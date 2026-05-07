# x=range(1000)
# print(list(x))
# gen 
n=1000
def gen(n):
    for i in range(1,n+1):
        yield i
i=1
while(i<=n):
   yield i
   i=i+1

var=gen(n)
print(var)
print(list(var))
e=next(var)
print(e)
print("hello")
print("welcome")
e2=next(var)
print(e2)

for i in var:
 print(i)


  

# iterable to iterator

# l=list(range(1,10))
# print(type(l))
# x=iter(l)
# print(x)
# print(next(x))
# print("hello")
# print(next(x))

# loop se

# l=list(range(1,10))
# print(type(l))
# x=iter(l)
# for i in x:
#     print(i)
# print(next(x))

l=list(range(1,10))
x=iter(l)
for i in range(15):
 try:
    
     print(next(x))
 except StopIteration:
    print("exception")
    break


# exaptio handling

# x=1
# y=0

# try:
#     z=x/y
#     print(z)
# except ZeroDivisionError:
#     print("enter valid")



# ____________________________________________________________________________________________________________________________________/



'''def outer_fun(var):
    def inner_fun(x,y):
        x=x+5
        y=y+5
        var(x,y)
    return inner_fun
@outer_fun
def add(p,q):
    print(p+q)
x=int(input("enter a num:"))   
y=int(input("enter a num:"))
add(x,y)'''


'''def outer_fun(var):
    def inner_fun(x):
        
        var(x)
    return inner_fun
@outer_fun
def add(n):
    x=range(2,n+1,2)
    return list(x)
    
n=int(input("enter a num:"))   

res= add(n)
print(res)'''


#x=range((1000))
#print(list(x))

'''def gen_num(n):
        for i in range(1,n+1):
              yield i

n=int(input("enter a num:"))
var =gen_num(n)
print(var)
for i in var:
    print(i)'''

    
'''print(next(var))
ele1=next(var)
print(ele1)
print("Hello")
print("welcome")
ele2(next(var))
print(ele2)'''

'''l = list(range(1,10))
x=iter(l)
for i in range(15):
     print(next(x)) '''



l = list(range(1,10))
x=iter(l)
for i in range(15):
    try:
          print(next(x))
    except StopIteration:
           print("iterator is empty") 
           break      

          
    
'''x=int(input("enter a num:"))
y=int(input("enter a num:"))
try:
    z=x/y
    print(z)
except ZeroDivisionError:
    print("print enter non-zero value") '''