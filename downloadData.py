import requests 
import json
import csv 


response = requests.get(
    url='https://api.energidataservice.dk/v2/dataset/CapacityPerMunicipality?limit=4000')

result = response.json()
records = result.get('records', [])

data_file = open('data_file.csv', 'w')
# create the csv writer object
csv_writer = csv.writer(data_file)


count = 0
for data in records:
    if count == 0:
        header = data.keys()
        csv_writer.writerow(header)
        count += 1
    csv_writer.writerow(data.values())
 
data_file.close()