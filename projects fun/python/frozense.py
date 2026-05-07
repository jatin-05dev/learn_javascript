#frozenset is collection of unique elelemt represseented by unique element   

l=[10,20,15,45,"ython","cpp"]
fs=frozenset(l)
#print(fs)
# print(type(fs))
#print(max(fs))
#print(min(fs))
# print(len(fs))
# print(sum(fs))
# print(id(fs))
#1 method
#fs1=fs.copy()
#print(id(fs),id(fs1))
# union
#t=(12,56,87,2,3)
#l=[2,5,8,9,6]
#f=frozenset(t)
#ls=frozenset(l)
#print(f.union(ls))
#print(f.intersection(l))
#print(f.difference(ls))
#print(f.symmetric_difference(ls))
#print(f.isdisjoint(ls))
#f1= f.copy()    
#print(id(f1),id(f))
f=(1,2,3,5,6,7,8)
f2=(9,10,11,12,13)
fs=frozenset(f)
f2=frozenset(f2)
print(f2.issubset(f))
print(f2.issuperset(fs))

