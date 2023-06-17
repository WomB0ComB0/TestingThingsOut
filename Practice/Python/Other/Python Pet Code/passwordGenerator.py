# Libraries
import string
import random
# Global variable
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
# Password function
def passWord():
  password = ""
  for i in range(0,4):
    vari = random.randint(0,len(alphabet))
    password += alphabet[vari:vari+1]
  for i in range(0,4):
    password += str(random.randint(0,9))
  return password
print(passWord())