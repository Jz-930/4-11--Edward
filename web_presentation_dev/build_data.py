import os
import json

with open('../scratch_report_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

os.makedirs('src/data', exist_ok=True)
with open('src/data/reportData.ts', 'w', encoding='utf-8') as f:
    f.write('export const rawReportText = ' + json.dumps(text) + ';\n')
