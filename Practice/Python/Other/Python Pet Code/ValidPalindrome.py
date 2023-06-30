import string
def palindrome(text):
  text = text.lower()
  ctext = ""
  for char in text:
    if char in string.ascii_lowercase: # Removes/ignores numbers
      ctext+=char
  if ctext == ctext[::-1]: # Reverses the text
    return True
  else: 
    return False 
print(palindrome("Rac4e56C2ar"))