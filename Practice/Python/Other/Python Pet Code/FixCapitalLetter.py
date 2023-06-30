def fix_capitalization(string):
  lists = string.split(". ")
  for i in range(len(lists)):
    lists[i] = lists[i].capitalize()
  lists = ". ".join(lists)
  return lists

def shift_equal(s, goal):
  if len(s) != len(goal):
    return False
  cntg = goal.find(s[0:1])
  if cntg < 0:
    return False
  for i in range(len(s)):
    if s[i:i+1]!=goal[cntg:cntg+1]:
      return False
    if cntg >= len(s)-1:
      cntg = 0
    else:
      cntg+=1
  return True
  
print(fix_capitalization("speak from my heart. Speak from my soul. say what you want."))
print(shift_equal("abcde", "cdeab"))