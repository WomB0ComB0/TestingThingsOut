import csv
from twilio.rest import Client

def read_csv():
  csv_file_path = ''

  friends_numbers_dict = {}

  with open(csv_file_path, 'r') as csv_file:
    reader = csv.DictReader(csv_file)

    for row in reader:
      friends_numbers_dict[row['name']] = row['number']

  return friends_numbers_dict

def send_message(friends__numbers):
  account_sid = 'account_sid'
  auth_token  = 'auth_token'
  twilio_phon_num = 'twilio_phon_num'

  client = Client(account_sid, auth_token, twilio_phon_num)
  
  user_input_template = input('Enter your holiday message template: ')
  holiday_message_template = f"Hi {{}}, {user_input_template}"
  
  for friend_name, friend_number in friends__numbers:
    full_message_template = f"Hi {friend_name}, {holiday_message_template}"
    message_body = full_message_template.format(friend_name)
    message = client.messages.create(
      body=message_body,
      from_=twilio_phon_num,
      to=friend_number
    )
  
def main():
  friends_numbers  = read_csv()
  send_message(friends_numbers)