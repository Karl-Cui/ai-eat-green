from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route('/test', methods=['GET'])
def test_method():
    msg = jsonify({
        'message': 'hello world'
    })
    return msg


if __name__ == '__main__':
    app.run()
