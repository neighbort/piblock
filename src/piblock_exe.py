from flask import Flask, Response, request, redirect, url_for, render_template, jsonify
from flask_socketio import SocketIO     # add 0331
import threading                        # add 0331
import json
#import pigpio
#from time import sleep
import sys
import io

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


def execute_code(code):                 # add 0331
    old_stdout = sys.stdout
    sys.stdout = io.StringIO()          # capture stdio
    try:
        exec(code, {"socketio": socketio})  # activate socketio in exec
        output = sys.stdout.getvalue()
    except Exception as e:
        output = f"Error: {str(e)}"
    finally:
        sys.stdout = old_stdout         # stdio normalise
    socketio.emit('output', output)     # send result to client

@socketio.on('run_code')                # add 0331
def handle_code(code):
    threading.Thread(target=execute_code, args=(code,)).start()


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
