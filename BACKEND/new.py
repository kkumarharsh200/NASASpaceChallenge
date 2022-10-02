file = open('data.txt','w')
data= ["1","3","4","5"]
for i in range(len(data)):
    entry = data[i] 
    end = entry + " @@@ "
    file.write(end)
file.close()
