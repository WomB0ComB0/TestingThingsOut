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

def main():
  friends_numbers  = read_csv()
