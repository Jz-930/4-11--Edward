import os
import csv
import json

data_dir = '../charts/csv_data'
out_path = 'src/data/chartData.ts'

ts_content = "// Auto-generated chart data from Phase-2 CSVs\n\n"

for filename in os.listdir(data_dir):
    if filename.endswith('.csv'):
        # chart_01_市场规模对比_data.csv -> chart_01_MarketSize
        var_base = filename.split('_data.csv')[0].replace(' ', '_')
        var_name = f"data_{var_base}"
        
        records = []
        with open(os.path.join(data_dir, filename), 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                parsed_row = {}
                for k, v in row.items():
                    # try to parse as float if possible
                    try:
                        # handle percentage
                        if v.endswith('%'):
                            parsed_row[k] = float(v.strip('%'))
                        else:
                            parsed_row[k] = float(v)
                    except ValueError:
                        parsed_row[k] = v
                records.append(parsed_row)
        
        ts_content += f"export const {var_name} = {json.dumps(records, indent=2, ensure_ascii=False)};\n\n"

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)
    
print("Successfully generated chartData.ts")
