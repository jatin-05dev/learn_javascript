# 🐍 Python Practice: Index + Slice + Range (Total 30 Questions, No Loops)

s = "python language"

print("=== INDEX QUESTIONS ===")
print(1, s.index(' '))          # 6
print(2, s.index('n'))          # 5
print(3, s.index('a'))          # 8
print(4, s.index('lan'))        # 7
print(5, s.index(''))           # 0
print(6, s.rindex('a'))         # 12
print(7, s.find('z'))           # -1
print(8, s.index('on'))         # 4
print(9, s.index('g'))          # 9
print(10, s.index('h'))         # 3


print("\n=== SLICING QUESTIONS ===")
print(1, s[0:6])                # python
print(2, s[:6])                 # python
print(3, s[7:])                 # language
print(4, s[::-1])               # eguagnal nohtyp
print(5, s[::2])                # pto agae
print(6, s[10:])                # guage
print(7, s[2:10:3])             # tna
print(8, s[-1:-8:-2])           # eagu
print(9, s[4:1])                # ''
print(10, s[6:-6])              #  langu


print("\n=== RANGE QUESTIONS ===")
print(1, list(range(5)))        # [0, 1, 2, 3, 4]
print(2, list(range(2, 7)))     # [2, 3, 4, 5, 6]
print(3, list(range(0, 10, 2))) # [0, 2, 4, 6, 8]
print(4, list(range(10, 0, -2)))# [10, 8, 6, 4, 2]
print(5, list(range(3)))        # [0, 1, 2]
print(6, sum(range(5)))         # 10
print(7, list(range(len("python"))))  # [0, 1, 2, 3, 4, 5]
print(8, list(range(1, 11)))    # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(9, list(range(0, 20, 5))) # [0, 5, 10, 15]
print(10, list(range(-3, 4)))   # [-3, -2, -1, 0, 1, 2, 3]
