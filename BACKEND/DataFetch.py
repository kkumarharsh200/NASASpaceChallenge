from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time
import psycopg2 as pg
import webbrowser as link
try:
    conn = pg.connect(database='test', user='postgres',password='harsh')
    print("connected")
except:
    print("not connected")

cur = conn.cursor()
cur.execute('select sourceid from datab')

#changing tuple to list
tupple  = ()
x= cur.fetchall()
for i in range(len(x)):
    tupple += x[i]
data = []
list1 = list(tupple)
# print(list1)

conn.commit()
data = []
s = Service("C:\\Users\\Harsh\\Downloads\\chromedriver.exe")
driver = webdriver.Chrome(service=s)
for i in range(len(list1)):
    driver.get(list1[i])
    try:
        for element in driver.find_elements(By.XPATH, '//*[@id="article-content"]/section[1]/div/p[1]'):
            data.append(element.text)
    except:
        continue
print(data)
