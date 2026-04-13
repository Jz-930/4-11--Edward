import os
import csv
import numpy as np

out_dir = r"f:\4-11 安省饮品研究-Edward\charts"
os.makedirs(out_dir, exist_ok=True)

def write_csv(filename, header, data):
    with open(os.path.join(out_dir, filename), mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(data)

# Chart 1: 加拿大核心饮品品类市场规模（2024/2025）
chart1_header = ['品类', '规模(亿加元 CAD)', 'CAGR']
chart1_data = [
    ['热茶', 15, '8.2%'],
    ['即饮冷茶', 14, '10.9%'],
    ['珍珠奶茶', 1.5, '9.0%'],
    ['精品咖啡', 51, '10.1%'],
    ['功能性健康饮品', 63, '9.4%']
]
write_csv('chart_01_市场规模对比_data.csv', chart1_header, chart1_data)

# Chart 2: 珍珠奶茶市场增长预测
chart2_header = ['年份', '保守预期(百万加元 CAD)', '高潜力预期(百万加元 CAD)']
chart2_data = [
    [2025, 100, 140],
    [2028, 140, 250],
    [2031, 180, 480],
    [2033, 220, 265]
]
write_csv('chart_02_市场增长预测_data.csv', chart2_header, chart2_data)

# Chart 3: GTA竞争者价格分布图
chart3_header = ['品牌', '估算核心客单价(加元 CAD)', 'GTA门店估算数量']
brands = ['独立店铺', 'Kung Fu Tea', 'The Alley', 'Palgong', '幸福堂', 'HEYTEA', 'Presotea', 'Tiger Sugar', 'Chatime', 'CoCo', 'Gong Cha']
prices = [4.75, 5.85, 7.0, 7.0, 8.75, 10.2, 7.0, 8.75, 5.85, 5.85, 7.0]
stores = [180, 8, 16, 15, 10, 6, 30, 20, 100, 120, 50]
chart3_data = list(zip(brands, prices, stores))
write_csv('chart_03_竞争者价格分布_data.csv', chart3_header, chart3_data)

# Chart 4: 三档开店投资模型对比
chart4_header = ['门店模型', '设计与审批(万CAD)', '硬装施工(万CAD)', '设备与软装(万CAD)', '物料押金合规(万CAD)', '营运资金储备(万CAD)', '总投资(万CAD)']
models = ['Kiosk/极简店', '标准店 (28万基准)', '复合旗舰店']
cat1 = [1.25, 2.0, 4.25]
cat2 = [6.00, 10.0, 24.0]
cat3 = [5.00, 10.0, 16.0]
cat4 = [1.75, 2.0, 4.5]
cat5 = [2.00, 4.0, 8.0]
chart4_data = []
for i in range(len(models)):
    total = cat1[i]+cat2[i]+cat3[i]+cat4[i]+cat5[i]
    chart4_data.append([models[i], cat1[i], cat2[i], cat3[i], cat4[i], cat5[i], total])
write_csv('chart_04_投资模型对比_data.csv', chart4_header, chart4_data)

# Chart 5: 三种经营情景对比
chart5_header = ['情景', '日均杯量', '月营收(万加元 CAD)', '税后净利率(%)']
chart5_data = [
    ['保守', 120, 2.65, -40.3],
    ['基准', 170, 4.13, 11.5],
    ['乐观', 230, 6.18, 34.8]
]
write_csv('chart_05_经营情景对比_data.csv', chart5_header, chart5_data)

# Chart 6: 盈亏敏感性热力图
orders = [100, 150, 200, 250, 300]
rents = [30, 40, 50, 60, 70]
chart6_header = ['日均杯量 \\ 净租金($/sqft/年)'] + [f'${r}' for r in rents]
chart6_data = []
for o in orders:
    row = [f'{o} 杯/日']
    for r in rents:
        price = 7.50
        inv = 280000 
        rev = o * 30 * price
        gross = rev * 0.75
        rent = r * 900 / 12
        fixed = rent + 9000 + 2000
        net = gross - fixed
        if net <= 0:
            row.append('N/A (亏损)')
        else:
            row.append(f'{inv / net:.1f} 月')
    chart6_data.append(row)
write_csv('chart_06_盈亏敏感性热力图_data.csv', chart6_header, chart6_data)

# Chart 7: 扩张路线图
chart7_header = ['阶段', '时间周期', '目标里程碑']
chart7_data = [
    ['启动阶段', '0个月', '启动与立项'],
    ['阶段一', '12-18个月', '【品牌验证】首店打磨，跑通本地模型，建立SOP'],
    ['阶段二', '24-36个月', '【区域扩张】5-8家大多直营店，建立区域中央厨房，降低原材料成本'],
    ['阶段三', '36个月以上', '【混合扩张】直营+特许加盟，探索跨省扩张(如BC, AB)']
]
write_csv('chart_07_扩张路线图_data.csv', chart7_header, chart7_data)

# Chart 8: TAM_SAM_SOM漏斗图
chart8_header = ['层级', '描述', '规模(加元 CAD)']
chart8_data = [
    ['TAM', '加拿大珍珠奶茶市场总规模', '$1.5亿'],
    ['安省市场', '安省占比约42%', '$6,300万'],
    ['SAM', 'GTA可服务市场', '$4,400万'],
    ['SOM', '新品牌3年内可获取市场 (≈ 1-2家标准店)', '约 $50万 - $70万']
]
write_csv('chart_08_TAM_SAM_SOM漏斗图_data.csv', chart8_header, chart8_data)

print(f"8 CSV files successfully written to {out_dir}")
