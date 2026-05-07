 #collection  of element are himogeneous and heterogenius
#represented by[] with , sseperated elements 
#sequential/ordered collection
#indexing supported 
#slicing supported
#duplicateas are alowed
#mutable in nature 
#ex
#lis=[10,20,30,52,4,6,]
#lis[1]=100
#print(lis,type(list),id(lis))
#inbulit function
# len
# type
# id(system deppentdent)
# print 
# max
# min
# sum 
#l=[12,58,6,54,1,'python',"language"]
#print(sum(l))numerc
#print(max(l))same
#print(min(l))same
#print(len(l))same
#l=['pyhton','JAVA','cpp','sql']
#l=[5,5,65,5,5,68,10+4j]
#print(max(l))
#print(sum(l))
#ascii and string
#print(max(l))
#print(min(l))
#print(sum(l))


#___________________________________________________________________________________________________________________________________#
#method oof list sare 
# copy()=>create new object with same element
# clear()=>remove all element from given list
# append()=>add single element at last
# extend()=>add multiplt element at last 
# pop()=>remove index target element by default index is -1,thats why its removee last element 
# remove()=> remove according to tagrget elemrnt  frrom list  
# index()=> return index no agist given element
# # count()=>find out  freq/icc/ of aany elent 
# sort()=>arrange elent in acessdind
# reverse()=>reverse the all element from the string 
# insert()=> add element target  postion
l1=[2,1,5,'pyhton','java']
#l2=l1.copy()
# print(l2,l1,id(l1),id(l2))
#clear()
# print(l1.clear())
# print(id(l1),id(l1))
# del l1
# print(l1)
#del in string
#s="python"
#print(s)
#del s
#print(s)

#append()
# l1.append("mkm")
# print(l1)
# print(id(l1.append(45)))
# print(id(l1))


#extend
#syntax=>list.append(iterator/collection)
# l=[6,5,255,86,63,6]
# l.extend([4,5])
# print(l)
#insert(position,eelement)
l=[5,6,2,6,2]
#last me krega agar index nhi ho to 
# l.insert(1,120)
# l.insert(1,[3,5,9,8,95,7])
# print(l)
#index pe lata he 
#pop()
# print(l.pop(1))
#del ko return kr raha ahe 
#print(l)
#error aa agya out of range me
#removeE()
# l.remove('element')
# l.remove(6)
#print(l)
#first occurance ko krega 
#return nhm krta
#index()
# m=l.index(6)
#seond element
# n=l.index(6,(m+1))
# print(m)
# print(l.index(6,(l.index(6)+1)))
# print(l.count(6))
# print(l.count(5654))
#sort
#accessdind
# l.sort()
# print(l)
# l.reverse()
# print(l)
# l.sort(reverse=True)
# print(l)