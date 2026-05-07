# class Stu:
#      def __init__(self, name, age):
#         self.name = name
#         self.age = age

# obj=Stu("jatin",20)


# instsnxce var object depent
# declaration untance varr      
# class Stu:
#     def __init__(self, name, age):
#         self.n = name
#         self.a= age
#     def add(self,cont):
#         self.c=cont
# obj=Stu("jatin",55)
# obj.add("56")
# obj.sch="shss"


# class Stu:
#     def __init__(self, name, age):
#         self.n = name
#         self.a= age
#         print(self.n,self.a)
#     def add(self,cont):
#         self.c=cont
#         print(self.n,self.a,self.c)
# obj=Stu("jatin",55)
# obj.add("56")
# print(obj.n,obj.c,obj.a)

# obj.sch="shss"
# class variabel
# obj ke baad bhi alue nhi badlti usko class variable khete
# declaration
# class Stu:
#     school="shss"
#     def __init__(self, name, age):
#         self.n = name
#         self.a= age
#         print(self.n,self.a)
#     def add(self,cont):
#         self.c=cont
#         print(self.n,self.a,self.c)
# obj=Stu("jatin",55)
# obj1=Stu("jat",85)
# obj2=Stu("jin",5)

# print(obj.school,obj.school,obj.school) 
# types
# print
# class Stu:
#     school="shss"
#     def __init__(self, name, age):
#         self.n = name
#         self.a= age
#         Stu.p="python"
#     def add(self):
#         Stu.schoolcity="bhopal"
#     @classmethod
#     def uc(cls):
#        cls.sschoolcode=110

# obj=Stu("jatin",22)
# obj.add()
# obj.uc()
    
class Stu:
    school="shss"
    def __init__(self, name, rollno):
        self.n = name
        self.r= rollno
        print(Stu.school)
        Stu.prin="pyhton"
    def add(self):
        Stu.schoolcode=88
    def show(self):
        print(Stu.school,Stu.prin,Stu.schoolcode)
    @classmethod
    def uc(cls):
       cls.x=55
       print(Stu.school,Stu.prin,Stu.sccity)


obj=Stu("jatin",22)
# obj.show()
obj.add()
obj.show()
Stu.sccity="bhopal"
obj.uc()
print(Stu.school)

# local varible

# class Stu:
#     def __init__(self,name,roolno):
#         self.n=name
#         self.r=roolno
#         x=55
#         print(x)
#     def show(self):
#         y=4956
#         print(y)
#         print(x)
# obj=Stu("jatin",897)
# obj.show()



# methods


# class BOOK:
#     price=666
#     def __init__(self, title, branch):
#         self.t=title
#         self.b=branch
# obj=BOOK("python","it")
# print(obj.price)
# obj2=BOOK("python","it") 
# print(obj2.price)
# class method       

# class BOOK:
#     price=666
#     def __init__(self, title, branch):
#         self.t=title
#         self.b=branch
# @classmethod
# def uc(cls,newp):
#     cls.price=newp
# obj=BOOK("python","it")
# print(obj.price)
# x=float(input("netre"))
# obj.uc(x)
# print(obj.price)