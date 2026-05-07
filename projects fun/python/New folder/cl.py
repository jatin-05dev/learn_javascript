# positive negatve or not

# number=int(input("entet number : "))
# if(number>0):
#     print("positive")
# elif(number<0):
#     print("negative")
# else:
#     print("zero")

# grater in  three

# number1=int(input("entet number : "))
# number2=int(input("entet number : "))
# number3=int(input("entet number : "))
# if number1>number2:
#     if  number2>number3:
#         print(number1)
#     else:
#         print(number2)
# else:
#     if number2>number3:
#         print(number2)
#     else:
#         print(number3)
# scre caard
# score = int(input("Enter your score: "))
# if score>=90:
#     print("a")
# else:
#     if score>=80:
#         print("b")
#     else:
#         if(score>=70):
#             print("c")
#         else:
#             if(score>=60):
#                 print("d")
#             else:
#                 print("f")
# sqrrot of naumber
# num =float(input("enter : "))
# numa=num**0.5
# print(numa)
# area of trian gle
# a = float(input('Enter first side: '))
# b = float(input('Enter second side: '))
# c = float(input('Enter third side: '))
# s=(a+b+c)/2
# area=(s*(s-b)*(s-b)*(s-c))**0.5

# swap two
# a=10
# b=20
# temp=0

# a,b=b,a

# temp=a
# a=b
# b=temp
# print(a,b)


# grade
# balance = float(input("Enter your account balance: "))
# if balance>=10000:
#     print("ok")
# elif balance>=5000:
#     print("not ok")
# else:
#     print("er")
# ATM  
# balance = 5000
# withdraw_amount = int(input("Enter amount to withdraw: "))
# if withdraw_amount<=0:
#     print("invalid")
# elif withdraw_amount >balance:
#     print("innsiu")
# else:
#     balance=balance-withdraw_amount
#     print(f"Withdrawal successful. New balance: ₹{balance}")
    
# list of factor
# n=int(input("Enter any no:"))
# fac=[]
# for i in range(1,n+1):
#     if(n%i==0):
#         fac.append(i)


# print(fac)

# 2. WAP to arrenge all items from list in assending order.
# collection
# l = [64, 34, 25, 12, 22, 11, 90, 5]
# n=len(l)

# for i in range(n-1):
#     for j in range(n-i-1):
#         if l[j]>l[j+1]:
#             l[j],l[j+1]=l[j+1],l[j]
# print(l)

# perfect
# n=int(input("Enter any no:"))
# sum=0
# for i in range(1,n):
#     if n%i==0:
#         sum=sum+i
#         print(i)

# print(sum)

# all zero at the end 

# l=[2,0,5,3,0,0,4,0]
# l2=[]
# for i in l:
#     if i!=0:
#         l2.append(i)


# n=len(l)-len(l2)
# for i in range(n):
#     l2.append(0)

# print(l2)
# dict
# l = [1, 1, 1, 2, 3, 4, 3, 4, 2, 5, 6, 5, 7]
# output_dict = {}

# for i in l:
#     if i in output_dict:
#         output_dict[i]+=1
#     else:
#         output_dict[i]=1


# print(output_dict)

# # pattern 1
# n = int(input("Enter how many rows you want : "))

# for i in range(1,n+1):
#     for j in range(1,n+1):
#         print(j,end=" ")
#     print()

# pattern 2
# n = int(input("Enter how many rows you want : "))

# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j,end=" ")
#     print()

# pattern 3
# n = int(input("Enter how many rows you want : "))
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j*2,end=" ")
#     print()

# pattern 4
# n = int(input("Enter how many rows you want : "))

# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j*2-1,end=" ")
#     print()


# pattern 5
# n = int(input("Enter how many rows you want : "))
# j=1
# for i in range(1,n+1):
#     for _ in range(1,i+1):
#         print(j,end=" ")
#         j=j+1
#     print()

# pattern 6
# n = int(input("Enter how many rows you want : "))
# j=2
# for i in range(1,n+1):
#     for _ in range(1,i+1):
#         print(j,end=" ")
#         j=j+2
        
#     print()

# pattern 8
# n = int(input("Enter how many rows you want : "))
# for i in range(1,n+1):
#         j="A"
#         for _ in range(1,n+1):
#             print(j,end=" ")
#             j=chr(ord(j)+1)
#         print()

# pattern 9
# n = int(input("Enter how many rows you want : "))
# for i in range(1,n+1):
#         j="A"
#         for _ in range(1,i+1):
#             print(j,end=" ")
#             j=chr(ord(j)+1)
#         print()

# pattern 10

# n = int(input("Enter how many rows you want : "))
# j="A"
# for i in range(1,n+1):
#         for _ in range(1,i+1):
#             print(j,end=" ")
#             j=chr(ord(j)+1)
#         print()
# # pattern 11


# n = int(input("Enter how many rows you want : "))
# j="A"
# for i in range(1,n+1):
#         print(" " * (n - i), end="")
#         for _ in range(1,i+1):
#             print(j,end=" ")
#             j=chr(ord(j)+1)
#         print()

# pattern 12


# n = int(input("Enter how many rows you want : "))
# for i in range(1,n+1):
#         j="A"
#         print(" " * (n - i), end="")
#         for _ in range(1,i+1):
#             print(j,end=" ")
#             j=chr(ord(j)+1)
#         print()

# pattern 13

# n = int(input("Enter how many rows you want : "))
# for i in range(1,n+1):
#         print(" " * (n - i), end="")
#         for j in range(1,i+1):
#             print(j,end=" ")

#         print()


# pattern 14

# n = int(input("Enter how many rows you want : "))
# j=1
# for i in range(1,n+1):
#         print(" " * (n - i), end="")
#         for _ in range(1,i+1):
#             print(j,end=" ")
#             j=j+1
#         print()


# pattern 15


# n = int(input("Enter how many rows you want : "))
# i=1
# while(i<=n):
#     print("* "*i)
#     i=i+1


# # pattern 16
    

# n = int(input("Enter how many rows you want : "))
# i=1
# while(i<=n):
#     print(" "*(n-i)+"*"*i)
#     i=i+1



# pattern 17
    

# n = int(input("Enter how many rows you want : "))
# i=1
# while(i<=n):
#     print(" "*(n-i)+"* "*i)
#     i=i+1




# pattern 20
    

# n = int(input("Enter how many rows you want : "))
# i=n
# while(i>=1):
#     print("*"*i)
#     i=i-1


# pattern 21

# n = int(input("Enter how many rows you want : "))
# i=n
# while(i>=1):
#     print(" "*(n-i)+"*"*i)
#     i=i-1




# pattern 22

# n = int(input("Enter how many rows you want : "))
# i=n
# while(i>=1):
#     print(" "*(n-i)+"* "*i)
#     i=i-1

# pattern 23


# pattern 21

# n = int(input("Enter how many rows you want : "))
# i=1
# while(i<=n):
#     print(" "*(n-i)+"* "*i)
#     i=i+1


# i=n-1
# while(i>=1):
#     print(" "*(n-i)+"* "*i)
#     i=i-1

# pattern 22

# n=int(input("Enter the number of rows: "))
# for i in range(0,n+1):
#    print(" "*(n-i),"*"*i)
# for i in range(n,0,-1):
#    print("*"*i," "*(n-i))

# pattern 23
# n=int(input("Enter the number of rows: "))
# i=1
# while(i<=n):
#     print("*"*i)
#     i=i+1


# i=n-1
# while(i>=1):
#     print("*"*i)
#     i=i-1

# pattern 24

# n=int(input("Enter the number of rows: "))
# i=1
# while(i<=n):
#     print(" "*(n-i)+"*"*i)
#     i=i+1


# i=n-1
# while(i>=1):
#     print(" "*(n-i)+"*"*i)
#     i=i-1

# pattern 25


n=int(input("Enter the number of rows: "))

i=n-1
while(i>=1):
    print(" "*(n-i)+"*"*i)
    i=i-1


i=1
while(i<=n):
    print(" "*(n-i)+"*"*i)
    i=i+1


 







 
    
