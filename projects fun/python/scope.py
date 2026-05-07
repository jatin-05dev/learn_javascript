#Scope 

# '''x=10
# def show():
#     x=20
#     print(x)
 
    
# show()  



x=10
def show():
    print(x)

show()
print(x)  



x=10
def show():
    x=20
    print(x)

show()
print(x)



x=10
def show():
    global x
    x=20
    print(x)

print(x)
show()
print(x)  


'''x=10
def show():
    x=20
    print(x)

show()'''


'''x=10
def show():
    print(x)
    x=20

show()    #error'''


#
'''x=20
def show():
    x=10
    print(globals()['x'])

show()'''