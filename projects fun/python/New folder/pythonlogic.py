# natural number 

# n=10
# for i in range(1,n+1):
#     print(i)

# evevn unmber

# n=10
# for i in range(1,n+1):
#     print(2*i)

# odd


# n=10
# for i in range(1,10,2):
#     print(i)

# prime number
# n=int(input("ennter s anumber"))
# for  i in range(2,n):
#     if(n%i==0):
#         print(" not prime")
#         break
#     else:
#         print("prime")
#         break
# cnt=0
# n=int(input("ennter s anumber"))
# for  i in range(2,n+1):
#     if(n%i==0):
#         cnt=cnt+1


# if(cnt>=2):
#     print("not prinr")
# else:
#     print("prime")

# factor
# n=int(input("ennter s anumber"))
# for i in range(1,n+1):
#     if(n%i==0):
#         print(i)

# factorial
# n=int(input("ennter s anumber"))
# fac=1
# for i in range(1,n+1):
#     fac=fac*i


# print(fac)
# arm strong

# n=int(input("ennter s anumber"))
# sum=0
# n3=n2=n
# cnt=0
# while(n2>0):
#     cnt=cnt+1
#     n2=n2//10


# while(n3>0):
#     r=n3%10
#     sum=sum+r**cnt
#     n3=n3//10


# if(sum==n):
#     print("arm")
# else:
#     print("not arm")

# palindrome



# n=int(input("ennter s anumber"))
# n2=n
# rev=0
# while(n>0):
#     r=n%10
#     rev=rev*10+r
#     n=n//10

# if(rev==n2):
#     print("palindrome")

# else:
#     print("not palindrome")

# ins tring

# n=input("ennter s anumber : ")
# l=0
# r=len(n)-1
# flag=True
# while(l<r):

#     if(n[l]!=n[r]):
#         flag=False
#         break 
#     l=l+1
#     r=r-1


# if flag:
#     print("yes")
# else:
#     print("no")

    
# short /

# n=input("enter a string : ")
# if n==n[::-1]:
#     print("palindrome")
# else:
#     print("not palindrme")
    
    
 
# n1 = int(input("Enter number 1: "))
# n2 = int(input("Enter number 2: "))

# # -------- GCD ----------
# i = 1
# gcd = 1
# while i <= n1 and i <= n2:
#     if n1 % i == 0 and n2 % i == 0:
#         gcd = i
#     i += 1

# # -------- LCM ----------
# big = max(n1, n2)

# while True:
#     if big % n1 == 0 and big % n2 == 0:
#         lcm = big
#         break
#     big += 1

# print("GCD =", gcd)
# print("LCM =", lcm)


# GCD function (Euclid method)
# l = (n1 * n2) // g  # LCM formula

# fibo

# n = int(input("Enter how many terms: "))

# a, b = 0, 1

# for i in range(n):
#     print(a)
#     a, b = b, a + b

# harshad number 

# n = int(input("Enter how many terms: "))
# n1=n
# s=0
# while n>0:
#     r=n%10
#     s=s+r 
#     n=n//10


# if(n1%s==0):
#     print("harshad")

# else:
#     print("not harshad")
 
# neon

# n = int(input("Enter how many terms: "))
# n1=n
# r=n*n
# sum=0
# while r>0:
#     rem=r%10
#     sum=sum+rem
#     r=r//10


# if n1==sum:
#     print("neon num")
# else:
#     print("not neon")

# peterson


# n = int(input("Enter how many terms: "))

# n2=n
# sum=0
# while n2>0:
#     rem=n2%10
#     fac=1
#     for i in range(1,rem+1):
#         fac=fac*i
#     sum=sum+fac

        
#     n2=n2//10


# if n==sum:
#     print("peter")
# else:
#     print("not petre")

# spy nuber

# n = int(input("Enter how many terms: "))
# temp=n
# fc=1
# s=0
# while temp>0:
#     r=temp%10
#     fc=fc*r
#     s=s+r
#     temp=temp//10


# if(fc==s):
#     print("spy number")
# else:
#     print("not spy")
# sunny unmber


# import math

# n = int(input("Enter number: "))

# next_num = n + 1
# sqrt_val = math.isqrt(next_num)  # integer square root

# if sqrt_val * sqrt_val == next_num:
#     print("Sunny Number")
# else:
#     print("Not Sunny Number")


# n = int(input("Enter number: "))

# next_num = n + 1

# # manual square root check
# i = 1
# while i * i <= next_num:
#     if i * i == next_num:
#         print("Sunny Number")
#         break
      
#     i += 1
# else:
#     print("Not Sunny Number") 
# leap year
# year = int(input("Enter year: "))

# if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
#     print("Leap year")
# else:
#     print("Not leap year")



        





    


