from flask import Flask, Response, request, redirect, url_for, render_template, jsonify
import json
import pigpio

# Set up Web Server
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/jsonrpi', methods=['POST'])
def controll():
    code = request.json
    #print(code)
    exec(code)
    return 'true'

if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=8000, debug=False)
    app.run(host='0.0.0.0', port=334, ssl_context=('server.crt', 'server.key'), threaded=True, debug=True)
