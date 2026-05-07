# class Stu:
#     x=45
#     def __init__(self, name):
#         self.name = name

#     @staticmethod   
#     def show():
#         print(Stu.x)

        
# obj=Stu("jatin")
# obj.show()

# 
# greet


class Stu:
    x=45
    def __init__(self, name):
        self.name = name

    @staticmethod   
    def show(name):
        print(f"welcome {name}")

        
obj=Stu("jatin")
x=obj.name
obj.show(x)


