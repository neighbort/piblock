from flask import Flask, Response, request, redirect, url_for, render_template, jsonify
from flask_socketio import SocketIO     # add 0331
import threading                        # add 0331
import json
import sys
import io
import ctl_bluetooth as myblue


# Set up Web Server
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode="threading")  # add 0331


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/jsonrpi', methods=['POST'])
def controll():
    code = request.json
    try:
        exec(code)
        return 'Success'
    except Exception as e:
        return 'Error: ' + str(e)


class StreamRedirector:
    """ class to send stdout through WebSocket in real time """
    def __init__(self):
        self.buffer = ""

    def write(self, message):
        if message.strip():     # avoid ampty buffer
            socketio.emit("output", {"message": message}, broadcast=True)

    def flush(self):
        pass                    # do nothing to avoid buffer


def execute_code(code):                 # add 0331
    old_stdout = sys.stdout
#    sys.stdout = io.StringIO()          # capture stdio, commented out 0402
    sys.stdout = StreamRedirector()     # add 0402
    try:
        exec(code, {"socketio": socketio})  # activate socketio in exec
        output = sys.stdout.getvalue()
    except Exception as e:
        output = f"Error: {str(e)}"
    finally:
        sys.stdout = old_stdout         # stdio normalise
#    socketio.emit('output', output)     # send result to client, commented out 0402

@socketio.on('run_code')                # add 0331
def handle_code(code):
    threading.Thread(target=execute_code, args=(code,)).start()


@app.route("/scan-connect", methods=["POST"])
def scan_connect():
    print("here comes the sun")
    stdout = myblue.scan_and_connect_to_joycon()
    return jsonify({"result": stdout})

@app.route("/paired", methods=["GET"])
def paired_devices():
    devices = myblue.get_paired_devices()
    return jsonify(devices)

@app.route("/connect", methods=["POST"])
def connect():
    mac = request.json.get("mac")
    print(mac)
    stdout = myblue.connect_to_device(mac)
    print(stdout)
    return jsonify({"result": stdout})

@app.route("/disconnect", methods=["POST"])
def disconnect():
    stdout = myblue.disconnect_current_device()
    return jsonify({"result": stdout})

@app.route("/remove", methods=["POST"])
def remove():
    mac = request.json.get("mac")
    stdout = myblue.remove_device(mac)
    return jsonify({"result": stdout})


if __name__ == '__main__':

### follwoing is std http run, FilePicker doesn't work
#    app.run(host='0.0.0.0', port=8000, debug=False)

### following is std https run, FilePicker work
#    app.run(host='0.0.0.0', port=334, ssl_context=('server.crt', 'server.key'), threaded=True, debug=True)

### following is https run with socket to catch server stdout in real time
    #NOTE: work with "async_mode=threading"
    socketio.run(app, host='0.0.0.0', port=334, ssl_context=('server.crt', 'server.key'), debug=False)
    #CAUTION: following could work with "async_mode=eventlet", but had ssrerror. Not knowing why. 2025/04/01
#   socketio.run(app, host='0.0.0.0', port=334, certfile='serevr.crt', keyfile='server.key', debug=False
