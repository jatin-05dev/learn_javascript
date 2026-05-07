# 1 positional arguement 
# def play(x,y,z):
#     pass

# play(10,2)

# 2 default arguement
# def play(y,x,z):
#     print(x,y,z)

# play(10,2,5)

# def play(y=0,x=0,z=0):
#     print(x,y,z)

# play(10)
# 3 variable - length positional arguement *
# 
# def add(*args):
    # print(list(args))
    # print(type(args))
    # print(*args)
    # print(*args)

# add()
# add(10)
# add([10,45,7,63])
# add(10,12,5,5,5,5,5,5,5,"pyhon",[5,2,4]) 

# add

# def add(*n):
    # sum=0
    # for i in n:
        # sum=sum+i
    # print("sum = ",sum)

# add()
# add(10)
# add(10,20,30)
# add(10,12,5,5,5,5,5,5,5,"pyhon",[5,2,4]) 
# x=44,
# print(x,type(x))

# def add(*args):
#     print(args)
#     print(type(args))

# x=eval(input("enter anumber : "))
# add(x)
# add(44,5,5,52)

# def add(*x):
#     sum=0
#     for i in x:
#         for j in i:
#             sum =sum+j
#     print("sum :",sum)
# x=eval(input("enetr : "))
# add(x)

# optimised

# def add(*x):
#     sum=0
#     for i in x:
#         sum =sum+i
#     print("sum :",sum)
# x=eval(input("enetr : "))
# add(*x)

# pos chags n/a
# def add(x,*y,z=10):
#     print(x)
#     print(y)
#     print(z)
# add(10,45)
# positional → *args → default → **kwargs

# add(1,2,3,4,5,6,7,8,9)

# def name(x,y,z):
#     print(x)
#     print(y)
#     print(z)
            
# name(x=5,z=5,y=6)
# def add(x=0,y=0,z=0):
#     print(x)
#     print(y)
#     print(z)

# add(8,9,8)

# arguement
# key value
# def add(a="jatt",**x):
#     print(x)
#     print(type(x))
#     print(a)


# add(x=5,y=6,z=9)

# def add(a,x,l="puj"):
#     print(x,a,l)
#     print(type(x))

# add(a="jtt",x="puj")

# def add(**a):
#     print(a)



# add(a="jtt",x="puj")


# args

# def add(*n):
#     return n


# add(20,202,0)


# def add(*a):
#     print(a)
    
# add(*[5,7,8])

# def add(**a):
#     print(*a)
#     print(*a.values())
    
# ingo={"jatib":"lo","l":"j"}
# add(**ingo)
# add(x=6,c=6)