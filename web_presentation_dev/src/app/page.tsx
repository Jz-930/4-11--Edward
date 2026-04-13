"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, TrendingUp, Target, DollarSign, Clock, AlertTriangle, Shield, MapPin, Users, Zap, Store, ArrowRight, Download, FileText } from "lucide-react";
import { MarketSizeChart, GrowthChart, CompetitorChart, InvestmentChart, ScenarioChart } from "@/components/charts/AllCharts";

/* ── Animation Helpers ── */
const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

/* ── Reusable: Metric Card ── */
const Metric = ({ label, value, unit, accent = false }: { label: string; value: string; unit?: string; accent?: boolean }) => (
  <motion.div variants={fade} className="bg-brand-panel/80 border border-white/5 rounded-2xl p-6 hover:border-brand-gold/20 transition-all group">
    <p className="text-slate-500 text-xs tracking-widest uppercase mb-3">{label}</p>
    <p className={`text-4xl md:text-5xl font-bold ${accent ? 'text-brand-gold glow-gold' : 'text-white'}`}>
      {value}
      {unit && <span className="text-lg text-slate-500 ml-1 font-normal">{unit}</span>}
    </p>
  </motion.div>
);

/* ── Reusable: Section Header ── */
const SectionHead = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <motion.div variants={fade} className="mb-16">
    <span className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">{eyebrow}</span>
    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-slate-400 mt-4 max-w-2xl leading-relaxed">{subtitle}</p>}
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function Page() {
  return (
    <main className="bg-brand-dark text-white selection:bg-brand-gold/30">

      {/* ━━━━━━━━━━ HERO ━━━━━━━━━━ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/hero-bg.png" alt="" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark z-[1]" />

        <motion.div className="relative z-10 text-center px-6 max-w-4xl" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fade} className="text-brand-gold tracking-[0.4em] uppercase text-xs font-bold mb-6">
            Feasibility Study · 2026
          </motion.p>
          <motion.h1 variants={fade} className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            安大略省现调饮品<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-300">市场进入可行性研究</span>
          </motion.h1>
          <motion.p variants={fade} className="text-slate-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            探索"原叶鲜萃 + 健康功能性茶饮"品牌在大多伦多地区（GTA）的<br className="hidden md:block" />
            蓝海定位、财务回报与全周期扩张路径
          </motion.p>
        </motion.div>

        <motion.a href="#verdict" className="absolute bottom-10 z-10 text-slate-600 animate-bounce" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </section>

      {/* ━━━━━━━━━━ VERDICT ━━━━━━━━━━ */}
      <section id="verdict" className="relative py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Executive Summary" title="核心结论：谨慎乐观" subtitle="建议以自有品牌直营模式切入GTA中高端现调茶饮市场。首店选址推荐万锦（Markham）Hwy 7 走廊，定价区间 $7.00–$8.50 CAD，在蜜雪冰城和霸王茶姬进入加拿大前抢占品类心智窗口。" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
              <Metric label="加拿大珍珠奶茶市场" value="$1.5亿" unit="CAD" accent />
              <Metric label="GTA可服务市场 (SAM)" value="$4,400万" unit="CAD" />
              <Metric label="盈亏平衡线" value="139" unit="杯/日" accent />
              <Metric label="标准店初始投资" value="$28万" unit="CAD" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
              <Metric label="基准日均订单" value="170" unit="杯/日" />
              <Metric label="月营收 (基准)" value="$4.13万" unit="CAD" />
              <Metric label="投资回本期" value="~33" unit="个月" accent />
              <Metric label="五年 ROI" value="121.7" unit="%" accent />
            </div>

            <motion.div variants={fade} className="grid md:grid-cols-3 gap-6">
              <div className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <Target className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">品牌定位</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  "原叶鲜萃 + 健康功能性茶饮"——避开蜜雪冰城低价红海，也不与喜茶高端正面交锋，在 $7–$8.50 价格带建立差异化护城河。
                </p>
              </div>
              <div className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-brand-teal mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">首店选址</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  万锦 Hwy 7 走廊或列治文山——华人社区消费密度高、竞品覆盖度相对较低。标准店面积约 900 sqft。
                </p>
              </div>
              <div className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <Clock className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">窗口期</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  霸王茶姬（$4.1亿融资）预计 2027–28 年入加。蜜雪冰城可能以 $2–4 CAD 颠覆定价。建议 2026 年底前完成首店开业。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ MARKET ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Market Opportunity" title="市场的时与势" subtitle="加拿大现调饮品市场正处于从利基品类向主流生活方式饮品跃迁的关键拐点。Z世代、多元文化人口增长和健康趋势三大引擎驱动 6%–10% 的年增长率。" />

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {/* Left: Size Chart */}
              <motion.div variants={fade} className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-1">加拿大饮品细分市场规模</h3>
                <p className="text-slate-500 text-xs mb-4">2024/25 预估值 · 亿加元 CAD</p>
                <MarketSizeChart />
              </motion.div>
              {/* Right: Growth Forecast */}
              <motion.div variants={fade} className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-1">珍珠奶茶市场增长预测</h3>
                <p className="text-slate-500 text-xs mb-4">2025–2033 · 百万 CAD</p>
                <GrowthChart />
              </motion.div>
            </div>

            {/* TAM→SAM→SOM Funnel */}
            <motion.div variants={fade} className="mb-16">
              <h3 className="text-white font-bold text-xl mb-8 text-center">从宏观市场到单店可获取量</h3>
              <div className="flex flex-col items-center gap-3">
                {[
                  { label: 'TAM — 加拿大珍珠奶茶市场', value: '$1.5 亿', width: '100%', color: 'bg-brand-gold/10 border-brand-gold/25' },
                  { label: '安省市场份额 (42%)', value: '$6,300 万', width: '72%', color: 'bg-brand-gold/15 border-brand-gold/30' },
                  { label: 'SAM — GTA 可服务市场', value: '$4,400 万', width: '52%', color: 'bg-brand-gold/20 border-brand-gold/40' },
                  { label: 'SOM — 新品牌 3 年内可获取', value: '$50–70 万', width: '28%', color: 'bg-brand-gold/30 border-brand-gold/50' },
                ].map((item, i) => (
                  <div key={i} style={{ width: item.width }} className={`border rounded-xl px-6 py-4 text-center transition-all hover:scale-[1.02] ${item.color}`}>
                    <p className="text-slate-300 text-xs mb-1">{item.label}</p>
                    <p className="text-white font-bold text-2xl font-mono">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key market stats */}
            <motion.div variants={fade} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Store className="w-5 h-5" />, label: '安省茶饮门店', value: '759 家' },
                { icon: <MapPin className="w-5 h-5" />, label: 'GTA 门店', value: '~500 家' },
                { icon: <TrendingUp className="w-5 h-5" />, label: '门店增长率', value: '3.74%' },
                { icon: <Users className="w-5 h-5" />, label: 'GTA 人口', value: '~700 万' },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3 bg-brand-navy border border-white/5 rounded-xl p-4">
                  <div className="text-brand-gold mt-0.5">{s.icon}</div>
                  <div>
                    <p className="text-slate-500 text-xs">{s.label}</p>
                    <p className="text-white font-bold text-lg">{s.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ CONSUMERS ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16 bg-brand-navy/40">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Target Audience" title="精准客群画像" />

            <div className="grid md:grid-cols-4 gap-5 mb-12">
              {[
                { emoji: '🧋', title: '华裔年轻人', age: '18–35 岁', desc: '对中国新式茶饮有高度认知与情感联结，种子用户群体' },
                { emoji: '🌏', title: '泛亚裔 Z 世代', age: '18–30 岁', desc: '受韩流/日本文化影响接受亚洲饮品，品牌偏好尚未固化' },
                { emoji: '📸', title: '主流探索者', age: '20–35 岁', desc: '对异国风味和 Instagram-worthy 饮品体验充满好奇' },
                { emoji: '🍃', title: '健康导向者', age: '跨族裔', desc: '关注低糖、天然原料、功能性成分的品质消费者' },
              ].map((c, i) => (
                <motion.div key={i} variants={fade} className="bg-brand-panel border border-white/5 rounded-2xl p-6 text-center hover:border-brand-gold/20 transition-all">
                  <span className="text-4xl block mb-4">{c.emoji}</span>
                  <h3 className="text-white font-bold mb-1">{c.title}</h3>
                  <span className="inline-block bg-white/5 text-slate-400 text-xs px-2 py-0.5 rounded-full mb-3">{c.age}</span>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fade} className="grid md:grid-cols-3 gap-5">
              {[
                { icon: <Zap className="w-5 h-5 text-brand-gold" />, stat: '30%–40%', desc: '饮品消费通过外卖平台（UberEats / DoorDash）完成' },
                { icon: <TrendingUp className="w-5 h-5 text-brand-red" />, stat: '-15% ~ -25%', desc: '冬季（11–3月）销量季节性回落幅度' },
                { icon: <Users className="w-5 h-5 text-brand-teal" />, stat: '小红书 + IG', desc: '社交媒体对品牌发现和消费决策有显著驱动力' },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-4 bg-brand-dark border border-white/5 rounded-xl p-5">
                  <div className="mt-1">{b.icon}</div>
                  <div>
                    <p className="text-white font-bold text-lg">{b.stat}</p>
                    <p className="text-slate-400 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ COMPETITION ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Competitive Intelligence" title="竞争格局：出海潮与价格战前夜" subtitle="2024–2026 年是中国茶饮品牌集中出海北美的窗口期。多个品牌完成 IPO 融资后拥有充足的海外扩张资金，加拿大是多数品牌的下一站目标。" />

            {/* Scatter Plot */}
            <motion.div variants={fade} className="bg-brand-panel border border-white/5 rounded-2xl p-6 mb-12">
              <h3 className="text-white font-bold mb-1">GTA 品牌价格 × 规模矩阵</h3>
              <p className="text-slate-500 text-xs mb-2">气泡大小 = 门店数量 · 红色 = HEYTEA（高端标杆）· 悬停查看详情</p>
              <CompetitorChart />
            </motion.div>

            {/* Already in Canada */}
            <motion.div variants={fade}>
              <h3 className="text-white font-bold text-lg mb-5">已进入加拿大的品牌</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { name: '喜茶 HEYTEA', threat: '🔴 高', price: '$9–14', stores: '4–5 家', note: 'CF Eaton Centre 旗舰店 + 多伦多配送中心，供应链领先' },
                  { name: '茶百道 TeaByDo', threat: '🟡 中', price: '$7–9', stores: '1 家', note: 'IPO 融资 HK$25.9亿，"一地一策"精准播种' },
                  { name: '库迪 Cotti Coffee', threat: '🟠 中高', price: '$5–9', stores: '6+ 家', note: '瑞幸 2.0，极致低价 + App 补贴策略（首单$0.99）' },
                  { name: 'Chatime 日出茶太', threat: '🔴 高', price: '$6–9.5', stores: '~100 家', note: '加拿大最大连锁，5 年目标 250 家，联手沃尔玛' },
                ].map((b, i) => (
                  <div key={i} className="bg-brand-panel border border-white/5 rounded-xl p-5 flex gap-4 hover:border-brand-gold/20 transition-all">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-bold">{b.name}</h4>
                        <span className="text-xs bg-white/5 px-2 py-0.5 rounded-full">{b.threat}</span>
                      </div>
                      <p className="text-slate-400 text-sm mb-1">{b.note}</p>
                      <div className="flex gap-4 mt-2 text-xs">
                        <span className="text-brand-gold">{b.price} CAD</span>
                        <span className="text-slate-500">{b.stores}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Potential entrants */}
            <motion.div variants={fade}>
              <h3 className="text-white font-bold text-lg mb-5">潜在进入者 <span className="text-slate-500 font-normal text-sm">(2026–2028 窗口期)</span></h3>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                  { name: '霸王茶姬 Chagee', threat: '🟠 中高', note: '纳斯达克上市融资 $4.1 亿，"原叶鲜萃"定位与我方高度重叠。2026 年为海外筑基年。' },
                  { name: '蜜雪冰城 Mixue', threat: '🔴 颠覆性', note: '全球 53,000+ 门店，美国定价 $1.19–$5.50 USD，若入加将颠覆现有 $6–14 价格体系。' },
                  { name: '瑞幸 Luckin Coffee', threat: '🟡 中', note: '全球 30,000+ 门店，已进美国但扩张极为谨慎。短期不入加，远期威胁。' },
                  { name: '奈雪的茶 Nayuki', threat: '🟢 低', note: '美国仅 4 家店，国内持续亏损。"低 GI 健康茶饮 + 烘焙"是其差异化。' },
                ].map((b, i) => (
                  <div key={i} className="bg-brand-dark border border-dashed border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-white font-bold">{b.name}</h4>
                      <span className="text-xs bg-white/5 px-2 py-0.5 rounded-full">{b.threat}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{b.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Price tiers */}
            <motion.div variants={fade}>
              <h3 className="text-white font-bold text-lg mb-5">定价分层策略</h3>
              <div className="flex flex-col gap-2">
                {[
                  { tier: '超低价层', range: '$2–4', brands: '蜜雪冰城（潜在）', color: 'border-slate-600', bg: 'bg-slate-800/30' },
                  { tier: '大众层', range: '$5–6', brands: 'Chatime · CoCo · Kung Fu Tea', color: 'border-blue-500/30', bg: 'bg-blue-900/10' },
                  { tier: '中端层', range: '$7–8.5', brands: 'Gong Cha · The Alley · 本品牌定位 ✦', color: 'border-brand-gold/50', bg: 'bg-brand-gold/5' },
                  { tier: '高端层', range: '$9–14', brands: 'HEYTEA · Tiger Sugar', color: 'border-purple-500/30', bg: 'bg-purple-900/10' },
                ].map((t, i) => (
                  <div key={i} className={`border rounded-xl px-5 py-3 flex items-center gap-6 ${t.color} ${t.bg}`}>
                    <span className="text-white font-bold w-20 text-sm">{t.tier}</span>
                    <span className="text-brand-gold font-mono font-bold w-16">{t.range}</span>
                    <span className="text-slate-400 text-sm">{t.brands}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ FINANCIAL ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16 bg-brand-navy/40">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Financial Blueprint" title="投资测算与盈利模型" subtitle="通过客流量转化法、竞品对标法、市场份额倒推法三种方法交叉验证。基准日均 170 杯，月营收 $4.13 万 CAD，约 33 个月回本。" />

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <motion.div variants={fade} className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-1">三档投资模型 CAPEX 拆解</h3>
                <p className="text-slate-500 text-xs mb-4">万 CAD · 推荐标准店 $28 万基准</p>
                <InvestmentChart />
              </motion.div>
              <motion.div variants={fade} className="bg-brand-panel border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-1">三种经营情景对比</h3>
                <p className="text-slate-500 text-xs mb-4">柱 = 月营收 · 线 = 税后净利率</p>
                <ScenarioChart />
              </motion.div>
            </div>

            {/* Scenario detail cards */}
            <motion.div variants={fade} className="grid md:grid-cols-3 gap-5 mb-12">
              {[
                { name: '保守情景', cups: '120 杯/日', rev: '$2.65 万/月', margin: '-40.3%', color: 'text-brand-red', border: 'border-red-500/20', verdict: '持续亏损——生存底线以下' },
                { name: '基准情景', cups: '170 杯/日', rev: '$4.13 万/月', margin: '+11.5%', color: 'text-brand-gold', border: 'border-brand-gold/30', verdict: '合理回本线，约 33 个月收回投资' },
                { name: '乐观情景', cups: '230 杯/日', rev: '$6.18 万/月', margin: '+34.8%', color: 'text-brand-teal', border: 'border-teal-500/30', verdict: '优质单店模型，年净利约 $25 万' },
              ].map((s, i) => (
                <div key={i} className={`bg-brand-dark border rounded-2xl p-6 ${s.border}`}>
                  <h4 className={`font-bold text-lg mb-4 ${s.color}`}>{s.name}</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-slate-500">日均杯量</span><span className="text-white font-mono">{s.cups}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">月营收</span><span className="text-white font-mono">{s.rev}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">税后净利率</span><span className={`font-mono font-bold ${s.color}`}>{s.margin}</span></div>
                  </div>
                  <p className="text-slate-400 text-xs mt-4 pt-4 border-t border-white/5">{s.verdict}</p>
                </div>
              ))}
            </motion.div>

            {/* Break-even callout */}
            <motion.div variants={fade} className="bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-xs tracking-widest uppercase mb-1">盈亏平衡点</p>
                <p className="text-5xl font-bold text-brand-gold glow-gold">139 <span className="text-2xl text-slate-400">杯/日</span></p>
              </div>
              <div className="flex-1">
                <p className="text-slate-300 text-sm leading-relaxed">
                  月固定成本 $25,404（不含 COGS），杯均贡献毛利 $6.075。<strong className="text-white">日均杯量是最敏感变量</strong>——选址质量和开业营销的执行力直接决定门店成败。
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  基准模型月营收 $41.3K 与 Chatime $35K–$40K 高度吻合，验证了假设合理性。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ RISKS ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Risk Assessment" title="关键风险与防御机制" subtitle="62% 的加拿大餐厅在运营前两年内出现亏损或关闭。以下是最可能影响本项目成败的核心风险及对应策略。" />

            <div className="grid md:grid-cols-3 gap-5 mb-12">
              {[
                { severity: '🔴 CRITICAL', title: '中国品牌集中进入潮', desc: '2026–2028 年多个资金雄厚品牌同期涌入安省，加剧竞争、推高租金、分流客群。', mitigation: '抢占品类心智窗口，2026 年底前首店开业建立先发优势。', border: 'border-red-500/30', bg: 'bg-red-950/20' },
                { severity: '🔴 CRITICAL', title: '蜜雪冰城低价冲击', desc: '若以 $2–4 CAD 定价入加，中低端品牌面临毁灭性价格压力。', mitigation: '坚守中高端定位，以原叶品质和健康概念建立价格护城河。', border: 'border-red-500/30', bg: 'bg-red-950/20' },
                { severity: '🟠 HIGH', title: '选址与开业执行风险', desc: '保守情景下日均 <139 杯即持续亏损。执行质量直接决定单店生死。', mitigation: '预留 ≥3 个月运营储备金，选址前获取精确人流量数据。', border: 'border-orange-500/30', bg: 'bg-orange-950/20' },
              ].map((r, i) => (
                <motion.div key={i} variants={fade} className={`border rounded-2xl p-6 ${r.border} ${r.bg}`}>
                  <span className="text-xs font-bold tracking-widest">{r.severity}</span>
                  <h3 className="text-white font-bold text-lg mt-3 mb-3">{r.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex items-start gap-2 bg-black/20 rounded-lg p-3">
                    <Shield className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                    <p className="text-slate-300 text-xs">{r.mitigation}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other risks row */}
            <motion.div variants={fade} className="grid md:grid-cols-2 gap-4">
              {[
                { title: '运营与人力', desc: '安省最低工资持续上涨（2026: $17.95/hr），多品牌争夺有限茶饮师傅人才。', icon: <Users className="w-4 h-4" /> },
                { title: '供应链安全', desc: '核心原料（珍珠/茶叶）依赖进口，港口拥堵或关税调整可能导致断供。', icon: <AlertTriangle className="w-4 h-4" /> },
                { title: '合规与分区', desc: 'Markham Zoning By-law 对餐饮用途有具体规定，停车位需满足 1/160 sqft。', icon: <Shield className="w-4 h-4" /> },
                { title: '地缘政治', desc: '中国品牌可能面临消费者抵制。品牌叙事需本地化，菜单须适应多元文化口味。', icon: <AlertTriangle className="w-4 h-4" /> },
              ].map((r, i) => (
                <div key={i} className="bg-brand-panel border border-white/5 rounded-xl p-4 flex items-start gap-3">
                  <div className="text-slate-500 mt-0.5">{r.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{r.title}</h4>
                    <p className="text-slate-400 text-xs mt-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ EXPANSION ROADMAP ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16 bg-brand-navy/40">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHead eyebrow="Growth Roadmap" title="三阶段扩张蓝图" subtitle="每一家新店的开设都必须以前一家店的盈利为前提。核心原则：用品牌忠诚度和社区关系构建护城河，而非用门店数量对抗资本雄厚的竞争者。" />

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold via-brand-gold/50 to-transparent" />

              {[
                { phase: 'Phase 1', time: '0 → 18 个月', title: '品牌验证：单店打磨', align: 'left',
                  points: ['选址、装修、合规审批并开业 (0–6 个月)', '达到盈亏平衡线 139 杯/日 (6–12 个月)', '建立标准化 SOP 手册，稳定供应链', '核心 KPI：日均 ≥170 杯，连续 3 个月正现金流'],
                  highlight: '⚠ 首店未跑通则扩张必亡' },
                { phase: 'Phase 2', time: '18 → 36 个月', title: '区域扩张：GTA 5–8 家直营', align: 'right',
                  points: ['优先万锦其他节点、列治文山、North York', '建立区域中央厨房，COGS 从 25% 压至 22%', '会员体系 + 私域流量池，目标 3 万+ 会员', '引入区域经理，创始人转向品牌管理'],
                  highlight: undefined },
                { phase: 'Phase 3', time: '36 个月 +', title: '混合扩张：直营 + 加盟跨省', align: 'left',
                  points: ['开放特许加盟（参考 Chatime 模式）', '加盟费 $293K–$480K，持续特许费 5%–6%', '探索渥太华、Waterloo、Hamilton 及 BC 省', '根据竞争态势动态调整——优先巩固而非铺量'],
                  highlight: undefined },
              ].map((p, i) => (
                <motion.div key={i} variants={fade} className={`relative flex ${p.align === 'right' ? 'md:flex-row-reverse' : ''} items-start gap-8 mb-16 pl-14 md:pl-0`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-brand-dark border-2 border-brand-gold rounded-full shadow-[0_0_12px_rgba(212,152,62,0.5)] z-10" />
                  {/* Content */}
                  <div className={`md:w-1/2 ${p.align === 'right' ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <span className="text-brand-gold font-mono font-bold text-sm">{p.phase}</span>
                    <span className="text-slate-500 text-xs ml-2">{p.time}</span>
                    <h3 className="text-white font-bold text-xl mt-2 mb-4">{p.title}</h3>
                    <ul className={`space-y-2 ${p.align === 'right' ? '' : 'md:ml-auto'}`}>
                      {p.points.map((pt, j) => (
                        <li key={j} className={`text-slate-400 text-sm flex items-start gap-2 ${p.align === 'right' ? '' : 'md:flex-row-reverse md:text-left'}`}>
                          <ArrowRight className="w-3 h-3 text-brand-gold mt-1 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    {p.highlight && (
                      <p className="text-brand-red text-xs font-bold mt-3 bg-red-950/30 border border-red-500/20 rounded-lg px-3 py-2 inline-block">{p.highlight}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ━━━━━━━━━━ NEXT STEPS ━━━━━━━━━━ */}
      <section className="py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fade}>
              <span className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">Next Steps</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-12">建议立即行动清单</h2>
            </motion.div>

            <div className="grid gap-3 text-left max-w-xl mx-auto mb-16">
              {[
                { step: '完成品牌注册与安省公司注册', budget: '~$2,000–$5,000 CAD', icon: '01' },
                { step: '启动 GTA 选址调研，获取至少 3 个候选铺面 LOI', budget: '万锦 Hwy 7 优先', icon: '02' },
                { step: '建立本地供应链联系（含 CFIA 检疫流程）', budget: '茶叶进口 + 杯具', icon: '03' },
                { step: '制定开业营销方案', budget: '小红书 / IG / UberEats + DoorDash', icon: '04' },
                { step: '聘请安省持牌会计师完成税务架构设计', budget: 'HST · 所得税 · 工资代扣', icon: '05' },
              ].map((a, i) => (
                <motion.div key={i} variants={fade} className="flex items-center gap-4 bg-brand-panel border border-white/5 rounded-xl p-4 hover:border-brand-gold/20 transition-all">
                  <span className="text-brand-gold font-mono font-bold text-lg w-8">{a.icon}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{a.step}</p>
                    <p className="text-slate-500 text-xs">{a.budget}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fade} className="bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-transparent border border-brand-gold/20 rounded-2xl p-8">
              <p className="text-slate-400 text-sm mb-6">本报告基于三份独立调研的合并分析，数据截至 2026 年 4 月。完整数据模型、方法论细节与参考文献（60+）详见以下报告文件：</p>
              <div className="grid gap-3 max-w-xl mx-auto">
                {[
                  { name: '安大略省饮品市场进入可行性研究报告（终版）', file: '/downloads/安大略省饮品市场进入可行性研究报告（终版）.pdf', size: '4.9 MB', desc: '完整版报告 · 含全部章节、数据模型与参考文献' },
                  { name: '安大略省饮品市场研究 · 执行摘要', file: '/downloads/安大略省饮品市场研究_执行摘要.pdf', size: '225 KB', desc: '高管摘要 · 适合快速决策阅读' },
                  { name: '进驻安省现调饮品行业 · 25个关键问题', file: '/downloads/进驻安省现调饮品行业_25个关键问题.pdf', size: '309 KB', desc: 'FAQ 问答 · 覆盖合规、选址、财务等核心疑问' },
                ].map((doc, i) => (
                  <a
                    key={i}
                    href={doc.file}
                    download
                    className="group flex items-center gap-4 bg-brand-dark/60 border border-white/5 rounded-xl p-4 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                      <FileText className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate group-hover:text-brand-gold transition-colors">{doc.name}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{doc.desc}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-slate-600 text-xs">{doc.size}</span>
                      <Download className="w-4 h-4 text-slate-600 group-hover:text-brand-gold transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━ FOOTER ━━━━━━━━━━ */}
      <footer className="py-10 text-center text-slate-700 text-xs bg-[#050710] border-t border-white/5">
        <p className="tracking-widest uppercase">Ontario Beverage Market Feasibility Study</p>
        <p className="mt-1">© 2026 · Confidential</p>
      </footer>
    </main>
  );
}
