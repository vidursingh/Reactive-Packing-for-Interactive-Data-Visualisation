import csv

datafile = "dataFile.csv"

with open(datafile) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in csv_reader:
        line_count += 1
        print(row)
        if line_count == 5:
            break



