from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "Successful call to api!"

@app.route('/data')
def data():
    return "This will return data at some point..."

if __name__=='__main__':
    app.run(debug=True)
