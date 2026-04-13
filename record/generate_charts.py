import os
import matplotlib.pyplot as plt
import matplotlib
import numpy as np

# Set up fonts to support Chinese
matplotlib.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei', 'WenQuanYi Micro Hei', 'DejaVu Sans', 'Arial Unicode MS']
matplotlib.rcParams['axes.unicode_minus'] = False

out_dir = os.path.join(os.path.dirname(__file__), 'charts')
os.makedirs(out_dir, exist_ok=True)

# Custom Colors
color_deep_blue = '#2E75B6'
color_light_blue = '#9DC3E6'
color_green = '#548235'
color_orange = '#ED7D31'
color_gray = '#A5A5A5'

# Chart 1: 加拿大核心饮品品类市场规模（2024/2025）
categories = ['热茶', '即饮冷茶', '珍珠奶茶', '精品咖啡', '功能性健康饮品']
sizes = [15, 14, 1.5, 51, 63]
cagrs = ['8.2%', '10.9%', '9.0%', '10.1%', '9.4%']
plt.figure(figsize=(10, 6))
bars = plt.bar(categories, sizes, color=color_deep_blue, width=0.6)
for bar, cagr in zip(bars, cagrs):
    yval = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2, yval + 1, f'{yval}亿\nCAGR: {cagr}', ha='center', va='bottom', fontsize=10)
plt.title('加拿大核心饮品品类市场规模（2024/2025）', fontsize=14, pad=15)
plt.ylabel('规模（亿加元 CAD）', fontsize=12)
plt.ylim(0, 80)
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_01_市场规模对比.png'), dpi=300)
plt.close()

# Chart 2: 珍珠奶茶市场增长预测
years = [2025, 2028, 2031, 2033]
lower_bounds = [100, 140, 180, 220]
upper_bounds = [140, 250, 480, 265]
plt.figure(figsize=(10, 6))
plt.fill_between(years, lower_bounds, upper_bounds, color=color_light_blue, alpha=0.4, label='规模预测区间 (Grand View vs Mobility)')
plt.plot(years, lower_bounds, marker='o', color=color_deep_blue, linewidth=2, label='保守预期 (百万 CAD)')
plt.plot(years, upper_bounds, marker='o', linestyle='--', color=color_orange, linewidth=2, label='高潜力预期 (百万 CAD)')
for i in range(len(years)):
    plt.text(years[i], lower_bounds[i] - 15, str(lower_bounds[i]), ha='center', va='top', fontsize=10)
    plt.text(years[i], upper_bounds[i] + 15, str(upper_bounds[i]), ha='center', va='bottom', fontsize=10)
plt.title('加拿大珍珠奶茶市场规模预测（2025–2033）', fontsize=14, pad=15)
plt.ylabel('市场规模（百万加元 CAD）', fontsize=12)
plt.xlabel('年份', fontsize=12)
plt.xticks(years)
plt.ylim(50, 550)
plt.legend(loc='upper left')
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_02_市场增长预测.png'), dpi=300)
plt.close()

# Chart 3: GTA竞争者价格分层图
brands = ['独立店铺', 'Kung Fu Tea', 'The Alley', 'Palgong', '幸福堂', 'HEYTEA', 'Presotea', 'Tiger Sugar', 'Chatime', 'CoCo', 'Gong Cha']
prices = [4.75, 5.85, 7.0, 7.0, 8.75, 10.2, 7.0, 8.75, 5.85, 5.85, 7.0]
stores = [180, 8, 16, 15, 10, 6, 30, 20, 100, 120, 50]
sizes = [s * 15 for s in stores] 
colors = []
for p in prices:
    if p < 5.5:
        colors.append(color_gray)
    elif p < 6.5:
        colors.append(color_green)
    elif p < 7.5:
        colors.append(color_deep_blue)
    else:
        colors.append(color_orange)

plt.figure(figsize=(12, 7))
plt.scatter(prices, stores, s=sizes, c=colors, alpha=0.7, edgecolors='white', linewidth=1.5)
for i, txt in enumerate(brands):
    plt.annotate(txt, (prices[i], stores[i]), xytext=(0, 12), textcoords='offset points', ha='center', fontsize=10, fontweight='medium')
plt.axvspan(3.5, 5.5, color=color_gray, alpha=0.1, label='经济型 ($3.5-$5.5)')
plt.axvspan(5.5, 6.5, color=color_green, alpha=0.1, label='大众型 ($5.5-$6.5)')
plt.axvspan(6.5, 7.5, color=color_deep_blue, alpha=0.1, label='中端 ($6.5-$7.5)')
plt.axvspan(7.5, 13.0, color=color_orange, alpha=0.1, label='高端 ($7.5以上)')
plt.title('GTA珍珠奶茶品牌价格-规模分布图', fontsize=14, pad=15)
plt.xlabel('核心客单价（加元 CAD）', fontsize=12)
plt.ylabel('GTA地区门店估算数量', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.4)
plt.xlim(3.5, 13.0)
plt.ylim(-10, 220)
plt.legend(loc='upper right', title="价格分层")
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_03_竞争者价格分布.png'), dpi=300)
plt.close()

# Chart 4: 三档投资模型对比（堆叠柱状图）
models = ['Kiosk/极简店', '标准店 (28万基准)', '复合旗舰店']
cat1 = [1.25, 2.0, 4.25]
cat2 = [6.00, 10.0, 24.0]
cat3 = [5.00, 10.0, 16.0]
cat4 = [1.75, 2.0, 4.5]
cat5 = [2.00, 4.0, 8.0]
plt.figure(figsize=(9, 6))
p1 = plt.bar(models, cat1, color='#D0CECE', width=0.5)
p2 = plt.bar(models, cat2, bottom=cat1, color=color_deep_blue, width=0.5)
p3 = plt.bar(models, cat3, bottom=np.array(cat1)+cat2, color=color_light_blue, width=0.5)
p4 = plt.bar(models, cat4, bottom=np.array(cat1)+cat2+cat3, color=color_orange, width=0.5)
p5 = plt.bar(models, cat5, bottom=np.array(cat1)+cat2+cat3+cat4, color=color_green, width=0.5)
for i in range(len(models)):
    total = cat1[i]+cat2[i]+cat3[i]+cat4[i]+cat5[i]
    plt.text(i, total + 1, f'{total}万', ha='center', va='bottom', fontweight='bold', fontsize=11)
plt.title('三档开店投资模型对比（CAD）', fontsize=14, pad=15)
plt.legend(['设计与审批', '硬装施工', '设备与软装', '物料押金合规', '营运资金储备'], loc='upper left')
plt.ylabel('投资总额（万 CAD）', fontsize=12)
plt.ylim(0, 65)
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_04_投资模型对比.png'), dpi=300)
plt.close()

# Chart 5: 三种经营情景对比（组合图）
scenarios = ['保守\n(120杯/日)', '基准\n(170杯/日)', '乐观\n(230杯/日)']
revenues = [2.65, 4.13, 6.18]
margins = [-40.3, 11.5, 34.8]
fig, ax1 = plt.subplots(figsize=(9, 6))
ax1.bar(scenarios, revenues, color=color_deep_blue, alpha=0.8, width=0.4, label='月营收 (万 CAD)')
for i, v in enumerate(revenues):
    ax1.text(i, v + 0.2, f'{v}万', ha='center', va='bottom', fontsize=11)
ax1.set_ylabel('月营收（万 CAD）', fontsize=12)
ax1.set_ylim(0, 8)
ax2 = ax1.twinx()
ax2.plot(scenarios, margins, color=color_orange, marker='D', markersize=8, linewidth=2, label='税后净利率 (%)')
for i, v in enumerate(margins):
    offset = 4 if v > 0 else -4
    ax2.text(i, v + offset, f'{v}%', ha='center', va='bottom' if v > 0 else 'top', fontsize=11, color=color_orange, fontweight='bold')
ax2.set_ylabel('税后净利率 (%)', fontsize=12)
ax2.set_ylim(-55, 50)
ax2.axhline(0, color='gray', linestyle='--', alpha=0.7)
plt.title('标准店三种经营情景对比', fontsize=14, pad=15)
lines, labels = ax1.get_legend_handles_labels()
lines2, labels2 = ax2.get_legend_handles_labels()
ax1.legend(lines + lines2, labels + labels2, loc='upper left')
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_05_经营情景对比.png'), dpi=300)
plt.close()

# Chart 6: 盈亏敏感性热力图
orders = np.array([100, 150, 200, 250, 300])
rents = np.array([30, 40, 50, 60, 70])
Z = np.zeros((len(rents), len(orders)))
for i, r in enumerate(rents):
    for j, o in enumerate(orders):
        price = 7.50
        inv = 280000 
        rev = o * 30 * price
        gross = rev * 0.75
        rent = r * 900 / 12
        fixed = rent + 9000 + 2000
        net = gross - fixed
        if net <= 0:
            Z[i, j] = 999
        else:
            Z[i, j] = inv / net
fig, ax = plt.subplots(figsize=(8, 6))
cmap = matplotlib.colors.ListedColormap([color_green, '#A9D18E', '#FFD966', '#F4B183', '#C00000'])
bounds = [0, 24, 36, 48, 60, 1000]
norm = matplotlib.colors.BoundaryNorm(bounds, cmap.N)
c = ax.pcolormesh(Z, cmap=cmap, norm=norm, edgecolors='white', linewidth=2)
for i in range(len(rents)):
    for j in range(len(orders)):
        val = Z[i, j]
        if val == 999:
            text = 'N/A\n(亏损)'
            color = 'white'
        else:
            text = f'{val:.1f}'
            color = 'black' if val < 60 else 'white'
        ax.text(j + 0.5, i + 0.5, text, ha='center', va='center', color=color, fontweight='bold')
ax.set_xticks(np.arange(len(orders)) + 0.5)
ax.set_yticks(np.arange(len(rents)) + 0.5)
ax.set_xticklabels(orders)
ax.set_yticklabels(rents)
ax.set_xlabel('日均杯量', fontsize=12)
ax.set_ylabel('净租金 ($/sqft/年)', fontsize=12)
plt.title('标准店投资回本期敏感性分析（月）', fontsize=14, pad=15)
cbar = plt.colorbar(c, ax=ax, boundaries=bounds, ticks=[12, 30, 42, 54, 100])
cbar.ax.set_yticklabels(['<2年\n极佳', '2-3年\n优秀', '3-4年\n良好', '4-5年\n及格', '不可行'])
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_06_盈亏敏感性热力图.png'), dpi=300)
plt.close()

# Chart 7: 扩张路线图（时间轴）
fig, ax = plt.subplots(figsize=(10, 4.5))
ax.plot([0, 36], [0, 0], color=color_deep_blue, linewidth=4)
ax.plot(0, 0, marker='o', color=color_orange, markersize=14, zorder=5)
ax.plot(12, 0, marker='o', color=color_orange, markersize=14, zorder=5)
ax.plot(24, 0, marker='o', color=color_orange, markersize=14, zorder=5)
ax.plot(36, 0, marker='>', color=color_deep_blue, markersize=18, zorder=5)
ax.text(0, 0.15, '0个月\n启动阶段', ha='center', va='bottom', fontweight='bold', fontsize=11)
ax.text(12, 0.15, '12-18个月\n阶段一', ha='center', va='bottom', fontweight='bold', fontsize=11)
ax.text(24, 0.15, '24-36个月\n阶段二', ha='center', va='bottom', fontweight='bold', fontsize=11)
ax.text(36, 0.15, '36个月+\n阶段三', ha='center', va='bottom', fontweight='bold', fontsize=11)

ax.text(6, -0.15, '【品牌验证】\n首店打磨\n跑通本地模型\n建立SOP', ha='center', va='top', fontsize=10)
ax.text(18, -0.15, '【区域扩张】\n5-8家大多直营店\n建立区域中央厨房\n降低原材料成本', ha='center', va='top', fontsize=10)
ax.text(30, -0.15, '【混合扩张】\n直营+特许加盟\n探索跨省扩张\n(如BC, AB)', ha='center', va='top', fontsize=10)
ax.set_ylim(-0.8, 0.8)
ax.axis('off')
plt.title('安大略省现调饮品市场进入与扩张路线图', fontsize=14, pad=15)
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_07_扩张路线图.png'), dpi=300)
plt.close()

# Chart 8: TAM_SAM_SOM漏斗图
y = [4, 3, 2, 1]
labels = [
    'TAM: 加拿大珍珠奶茶市场\n($1.5亿 CAD)',
    '安省市场占比约42%\n($6,300万 CAD)',
    'SAM: GTA可服务市场\n($4,400万 CAD)',
    'SOM: 新品牌3年内可获取市场\n(约 $50万 - $70万 CAD)'
]
widths = [150, 63, 44, 6] 
fig, ax = plt.subplots(figsize=(8, 6))
for i in range(len(y)):
    half_w = widths[i] / 2
    if i < len(y) - 1:
        next_half_w = widths[i+1] / 2
        ax.fill_betweenx([y[i+1], y[i]], [-next_half_w, -half_w], [next_half_w, half_w], color=color_deep_blue, alpha=0.25 + 0.15*i, zorder=1)
        
    ax.barh(y[i], widths[i], height=0.5, color=color_deep_blue, align='center', alpha=0.6 + 0.1*i, zorder=2)
    ax.text(0, y[i], labels[i], ha='center', va='center', fontweight='bold', color='white' if i==3 else 'black', fontsize=11, zorder=3)

# Arrow and text for SOM
ax.annotate('≈ 1-2家标准店\n目标营收', xy=(6, 1), xytext=(20, 1),
            arrowprops=dict(facecolor='black', shrink=0.05, width=1.5, headwidth=6),
            fontsize=10, va='center')

ax.set_xlim(-80, 80)
ax.set_ylim(0.2, 4.8)
ax.axis('off')
plt.title('安大略省珍珠奶茶市场规模逐级拆解（TAM→SAM→SOM）', fontsize=14, pad=15)
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'chart_08_TAM_SAM_SOM漏斗图.png'), dpi=300)
plt.close()

print("All charts generated successfully in chars/ directory.")
