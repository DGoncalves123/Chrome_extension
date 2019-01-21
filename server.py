from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_jsonpify import jsonify
from flask_cors import CORS
from flask import abort

#db_connect = create_engine('sqlite:///chinook.db')
app = Flask(__name__)
api = Api(app)
CORS(app)

class Employees(Resource):
    def put(self):
        args = request.headers
        print (args) # For debugging
        return {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFzMTYxMDUwMkBzYXBvLnB0IiwiZXhwIjoxNTQ2MzcyMjE1fQ.bFW4cWsJdDyOly3_NrdslCDBX137ooYjKlbnfbRXI40",
    "categories": [
        "newone1",
        "todelete",
        "test3",
        "aaaaa",
        "newone3",
        "test2",
        "newone2",
        "test",
        "aaa"
    ]
}

        #conn = db_connect.connect() # connect to database
        #query = conn.execute("select * from employees") # This line performs query and returns json result
        #return {'employees': [i[0] for i in query.cursor.fetchall()]} # Fetches first column that is Employee ID

class Tracks(Resource):
    def post(self):
        args = request.headers
        print (args) # For debugging
        return {"message":"success creating item Test on worten with current price 179.99"}
        #conn = db_connect.connect()
        #query = conn.execute("select trackid, name, composer, unitprice from tracks;")
        #result = {'data': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        #return jsonify(result)

class Employees_Name(Resource):
    def put(self):
        args = request.headers
        print(args)
        if args['Token']=="eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFzMTYxMDUwMkBzYXBvLnB0IiwiZXhwIjoxNTQ2MzcyMjE1fQ.bFW4cWsJdDyOly3_NrdslCDBX137ooYjKlbnfbRXI40":
            return 1, 200
        else:
            abort(404) 
        #conn = db_connect.connect()
        #query = conn.execute("select * from employees where EmployeeId =%d "  %int(employee_id))
        #result = {'data': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        #return jsonify(result)
        

api.add_resource(Employees, '/b4m/extension/login') # Route_1
api.add_resource(Tracks, '/b4m/extension/create_item') # Route_2
api.add_resource(Employees_Name, '/b4m/extension/verify') # Route_3


if __name__ == '__main__':
     app.run(port='8080')