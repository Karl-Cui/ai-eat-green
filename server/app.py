from flask import Flask
from flask import jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={"/api/*": {"origins": "*"}})


@app.route('/test', methods=['GET'])
def test_method():
    msg = jsonify({
        'message': 'hello world'
    })
    return msg

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


class GroceryList(Resource):
    def get(self, user_id):
        items = [
            {
            "name": "Apples",
            "checkedoff": False,
            "score": 60,
            "healthyalt": False,
            "healthyalt_name": "",
            "healthyalt_desc": "",
            },
            {
            "name": "Tofu",
            "checkedoff": False,
            "score": 60,
            "healthyalt": False,
            "healthyalt_name": "",
            "healthyalt_desc": "",
            },
            {
            "name": "Brie cheese",
            "checkedoff": False,
            "score": 30,
            "healthyalt": True,
            "healthyalt_name": "Feta cheese",
            "healthyalt_desc": "Feta cheese uses less water and GHGs in its production cycle than Brie cheese."
            },
        ]
        return items

api.add_resource(HelloWorld, '/')
api.add_resource(GroceryList, 'api/GroceryList/<string:user_id>')

if __name__ == '__main__':
     app.run(debug=True)
