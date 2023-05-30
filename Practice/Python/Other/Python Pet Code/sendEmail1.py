import smtplib
my_email = "testingmail@gmail.com"
password = "testing123"
connection = smtplib.SMTP("smtp.gmail.com")
connection.starttls()
connection.login(user=my_email, password=password)
connection.sendmail(from_addr=my_email, to_addrs="receipentemail@gmail.com", msg="Subject:Hello\n\nThis is the body of my email.")
connection.close()
# https://www.tutorialspoint.com/python/python_sending_email.htm