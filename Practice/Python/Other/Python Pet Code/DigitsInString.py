import string
def sumAvgDigits(text):
  sum = 0
  count = 0
  prev = False
  cons = 0
  savedcons = 0
  for char in text:
    prev = False
    if char in string.digits:
      sum += int(char)
      count+=1
      prev = True
    if prev:
      cons+=1
    elif prev == False:
      if cons > savedcons:
        savedcons = cons
      cons = 0
  print(f"Sum: {sum}\nAverage: {sum/count}\nConsective: {savedcons}")

sumAvgDigits("h3110fejwhjw43r8fhf56728cndskvnvn5847")