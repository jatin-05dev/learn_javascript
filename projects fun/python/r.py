#syntax range(st,syop,step/direction)
#range (st,stop)
#range (stop)
# x=range(5)
# print(0,5)
# print(list(x))
# print(tuple(x))
#collection
#1 o/p(1..10)
# x=range(1,11)
# print(list(x))
#2 o/p(2,4,6)
# x=range(2,11,2)
# print(list(x))
#3 o/p
# x=range(1,11,2)
# print(list(x))
#4 o/p(-1,-2,-3,-4,-10)
# x=range(-1,-11,-1)
# print(list(x))
#5
# x=range(-2,-11,-2)
# print(list(x)) 
#  x=range(-1,-10,-2)
#  print(list(x)) 
#empty output 
# x=range(1,10,-1)
# print(list(x))
# x=range(5,5)
# print(tuple(x))
#6
# x=range(-3,3)
# print(list(x))
# q=range(3,-3,-2)
# print(tuple(q))
#wap to create collection of n natural number
#wap
# n=int(input("enter  a number"))
# print(list(range(1,n+1)))
# print(tuple(range(1,int(input("enter anumber"))+1)))
# print(tuple(range(2,int(input("enter anumber"))+1,2)))
# print(tuple(range(1,int(input("enter anumber"))+1,2)))  

# x=float(input("enter number  1"))
# y=float(input("enter number  2"))
# z=x+y
# print(z)
# print(float(input("enter anumberv ")+float(input("enter number ")))
# print("hello")
x = range(1,5,2)
print(list(x))   # [0, 1, 2, 3, 4]
print(tuple(x))  # (0, 1, 2, 3, 4)
