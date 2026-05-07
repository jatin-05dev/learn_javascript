#dictionary 
#collection of "key":"value" .pairs 
#key must be unique
#value may be duplicate
#reresented by{} with comma(,) separated element
#maped data typeindexing not suppoerted 
#slicing not suppoerted 
# mutable in nature 
#both key value are homoa na d hetro
# ex==>
# d={'name':'neeraj',5:56}
# d2={"pu":56,9:6}
#print(d,type(d)) 
#uses of python in built function 
#key ke basis pe
# print(len(d))
# print(id(d))
# print(d)
###############################################################################################################
# print(max(d))
# print(min(d))
# print(sum(d))
#clear() copy()
#get()
#keys() values() items()
#pop() popitems()
#fromkeys() setdefault() update()
#pop ni by def
#method of dic
#copy()
# d={'name':'jatin','age':52}
# d2={'name':'ja','gender':52,"3":5}
# d1=d.copy()
# print(d,d1)
#print(id(d),id(d1))
#clear
# print(d.clear())
#d.clear()kali
# print(d)
# del(d)mita
# print(d)
#print(d)
#get()
#syntax
#key pe value deta he
# d4=d.get('name')
# print(d4)
# print(d.get('gender','not'))
# print(d.get('gender'))
# print(d.get('age','not'))
# print(d.keys())
# print(d.values())
# print(d.items())
#update()
# print(d.update())
# d.update(d2)
# print(d)
# print(d2)
#setdefault
# d1={'class':'bca'}
#agr key he to dega nhi he to add
# print(d1.setdefault('name','pooja'))
# print(d1)
#from keys
# s='python'
# l=['name','age']
# t=('name','age')
# d=dict.fromkeys(t,6)
# print(d)
#pop()
# f={'name':'jatin','age':56}
# print(f.pop('name'))
# print(f)
#key se
#print(f)
#popitem()
# f.popitem()
# print(f)
#pura detahe 
# print(f.popitem())
# print(f)
# print(f.popitem('name'))
#set 
# collection of unique element 
# represent bu {}/set() with comma(,)
# separated
# duplicates not alollow
# unordered
# index not supported
# slicing not suppoerted
# mutable in nagaure
# my_set={41,66,8,7,4,3,3}
# print(my_set,type(my_set))
# inbuilt  function python
# print(len(my_set))
# print(type(my_set))
# print(id(my_set))
# print(my_set)
# print(eval(my_set))
#print(max())
# print(min(my_set))
# print(sum(my_set))
#print(eval(input("enter any set :")))
#print(sum(my_set))
#methon of set
# union() sare hi element 
# intersection()
# diffrence()
# symetric-diffrence()
# intersection-update()
# diffrence -update()
# symteric-diffrence-update()
# is subset()
# is supset()
# is disjooint()
# my_set2={41,52,3,5}
#union nya set create krega
# print(my_set.union(my_set2))
#intersectio  bhi nya
# print(my_set.intersection(my_set2))
#diffrencen create new 
#s1 ke aise elemnt jo s2 se diffrent he 
# print(my_set.difference(my_set2))
#synmetric diffrence 
#ye bhi nya cerate
#intersection ka just oopposite jo same nhi he 
# print(my_set.symmetric_difference(my_set2)) 
#intersection update() usi  e uppdatae krta he s1 me hi update krta he0 
# my_set.intersection_update(my_set2)
# print(my_set)
#diffrence update
# my_set.difference_update(my_set2)
# print(my_set)
#symttic diffrece update
# my_set.symmetric_difference_update(my_set2)
# print(my_set)
#disjoint
#joint
#super  set
#subset
#subset meaasn bare set kka chld and super set mtlb parent
#disjoint mean alag alag 
# print(my_set.isdisjoint(my_set2))
# print(my_set.issubset(my_set2))
# print(my_set2.issubset(my_set))
# print(my_set.issuperset(my_set2))
# method jiske set requirement
# copy()kerga
#add() krega khi bhi  siingle kk add krega
s={8,7,9,6}
# s.add(5)
# print(s)
#update( multiple ko add krne ke liya update krega)
#s.update([6,'ko'])
#remove() atahne ke liye lekin error throw krta 
#s.remove(6)
#print(s)
#s.remove(6)
#print(s)
#isiline pe 
#errpor nhi deta
# s.discard(46)
# print(s)
# print(s.pop(1))
# print(s)
