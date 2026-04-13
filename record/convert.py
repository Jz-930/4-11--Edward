import os
import docx

os.makedirs('record/scratch', exist_ok=True)

for name in ['安大略省饮品市场进入可行性研究.docx', '安省饮品市场可行性研究.docx']:
    try:
        doc = docx.Document(name)
        text = '\n'.join([p.text for p in doc.paragraphs])
        
        out_name = f"record/scratch/{name.split('.')[0]}.md"
        with open(out_name, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully converted {name}")
    except Exception as e:
        print(f"Failed to convert {name}: {e}")
