import os
import json
import re

with open('../scratch_report_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Split based on major headers
# Example regex to find "一、", "二、"
sections = re.split(r'\n(?=[一二三四五六七八九十]+、)', text)

data = {
    "execSummary": '',
    "marketInsights": '',
    "competitive": '',
    "financials": '',
    "risks": ''
}

for sec in sections:
    if sec.startswith('一、') or sec.startswith('二、') or sec.startswith('三、'):
        data['marketInsights'] += sec + '\n'
    elif '四、' in sec or '五、' in sec:
        data['competitive'] += sec + '\n'
    elif '六、' in sec or '七、' in sec or '八、' in sec:
        data['financials'] += sec + '\n'
    elif '九、' in sec or '十、' in sec or '十一、' in sec:
        data['risks'] += sec + '\n'
    else:
        # Title and header
        data['execSummary'] += sec + '\n'

with open('src/data/reportDataSections.ts', 'w', encoding='utf-8') as f:
    f.write('export const reportSections = ' + json.dumps(data, indent=2, ensure_ascii=False) + ';\n')
print("Text segments generated.")
