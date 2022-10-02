import psycopg2 as pg2
try:
    conn = pg2.connect(database='test', user='postgres',password='harsh')
    print("connected")
except:
    print("not connected")

x = "general"
cur = conn.cursor()
query = """
select keyword,title from datab
where keyword like '{}%'
""".format(x)

cur.execute(query)
x = cur.fetchall()
print(x)