import psycopg2 as pg2
try:
    conn = pg2.connect(database='test', user='postgres',password='harsh')
    print("connected")
except:
    print("not connected")

#insertion in column command
def input(n,m):
    a ="insert into file(filen,path) values("
    b="'{}','{}')".format(n,m)
    ab = a+b
    cur.execute(ab)

#add column 
def column(m):
    x = "alter TABLE file "
    y = "add column {} bool not null".format(m)
    xy = x+y
    cur.execute(xy)

cur = conn.cursor()
cur.execute('SELECT * FROM file')
xy= []
xy.append(cur.fetchone())

print(xy)
cur.execute('SELECT * FROM file')
conn.commit()
# print(cur.fetchall())
 