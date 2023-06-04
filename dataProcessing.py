# dataDictionary = {municipality_1 : {date1: [2,3,2,2,3], date2: [2,3,2,2,3], [2,3,2,2,3]...},
#                   }

import pandas as pd
import json
import numpy as np 

dataDictionary = {}

headers = ['HourUTC', 'HourDK', 'Municipality Number', 'Solar Mwh', 'Offshore Wind Lt 100MW Mwh', 'Offshore Wind Ge 100MW MWh' 'Onshore Wind MWh' 'Thermal Power MWh']
dtypes = {'HourUTC':'str', 'HourDK':'str', 'MunicipalityNo':'int', 'SolarMWh':'float', 'OffshoreWindLt100MW_MWh':'float', 'OffshoreWindGe100MW_MWh':'float', 'OnshoreWindMWh':'float', 'ThermalPowerMWh': 'float'}
parse_dates = ['HourUTC', 'HourDK']

df = pd.read_csv('dataFile.csv', dtype = dtypes)

df['HourUTC']= pd.to_datetime(df['HourUTC'], format='%Y-%m-%d %H:%M:%S')
df['HourDK']= pd.to_datetime(df['HourDK'], format='%Y-%m-%d %H:%M:%S')

df.sort_values(by='HourUTC', inplace=True, ascending = True)
df.fillna(0)
df.replace(np.nan, 0)

max = df["HourDK"].max()
min = df["HourDK"].min()

#result_df = df[df['MunicipalityNo'] == 101]
uniqueTimeValues = df['HourDK'].unique()
uniqueMunicipalities = df['MunicipalityNo'].unique()

count = 0
for municipality in uniqueMunicipalities:
    count += 1
    print("count, municipality:  ", count, municipality)
    dictForThisMunicipality = {}
    dfFilteredByMunicipality =  df[df['MunicipalityNo'] == municipality]
    for time in uniqueTimeValues:
        row = dfFilteredByMunicipality[dfFilteredByMunicipality['HourDK'] == time].values.tolist()
        if len(row) == 0:
            dataValues = [0,0,0,0,0]
        else:
            dataValues = row[0][3:]
            if "nan" in [str(i).lower()  for i in dataValues]:
                newDataValues = []
                for dataValueIndex in range(0, len(dataValues)): 
                    dataValue = [str(i).lower() for i in dataValues][dataValueIndex]
                    if dataValue == "nan":
                        newDataValues.append(0.0)
                    else:
                        newDataValues.append(dataValues[dataValueIndex])
                dataValues = newDataValues
        dictForThisMunicipality[str(time)] = dataValues
    dataDictionary[str(municipality)] = dictForThisMunicipality
    
# with open('processedData.json', 'w') as fp:
#     json.dump(dataDictionary, fp)

# with open('uniqueTimes.json', 'w') as fp:
#     json.dump([str(i) for i in uniqueTimeValues], fp)

# with open('processedData.json') as json_data:
#     data = json.load(json_data)


# print(data["101"]['2022-09-29T05:00:00.000000000'])



print(uniqueMunicipalities)
