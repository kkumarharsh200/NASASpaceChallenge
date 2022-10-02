#from crypt import methods
from re import X
from flask import Flask,request,render_template
import psycopg2 as pg2
from flask_cors import CORS
# from nasa import input,column

try:
    conn = pg2.connect(database='test', user='postgres',password='harsh')
    print("connected")
except:
    print("not connected")

cur = conn.cursor()

app = Flask(__name__)
# 
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)


@app.route('/')
def hell():
    return 'hii'

#fetching data from server
@app.route('/serve/<command>')
def ser(command):
    query = """
    select * from datab
    where keyword like '%{}%'
    """.format(command)

    cur.execute(query)
    x = cur.fetchall()
    return x


@app.route('/serve', methods=['GET'])
def serve():
    args = request.args
    topic = args.get('topic')
    print(topic)
    print(topic[::2])
    return args


conn.commit()

if __name__ == '__main__':
   app.run(debug = True)