import pandas as pd

df = pd.read_csv ('src/assets/DataSFO.csv', sep=';')
#print(df.head(5))
#index or table works best currently
df.to_json (r'src/assets/panda_sfo_002.json', orient='records')