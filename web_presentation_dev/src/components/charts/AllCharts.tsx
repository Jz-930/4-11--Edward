"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, ScatterChart, Scatter, ZAxis, ComposedChart, Cell } from 'recharts';

/* ── Theme ── */
const C = { gold: '#D4983E', blue: '#3b82f6', teal: '#14b8a6', purple: '#8b5cf6', red: '#ef4444', white: '#e2e8f0', grid: 'rgba(255,255,255,0.04)', bg: '#0a0e1a' };
const TICK = { fill: '#94a3b8', fontSize: 11 };

/* ── Data ── */
const marketSize = [
  { name: '功能性健康饮品', value: 63, cagr: 9.4 },
  { name: '精品咖啡', value: 51, cagr: 10.1 },
  { name: '热茶', value: 15, cagr: 8.2 },
  { name: '即饮冷茶', value: 14, cagr: 10.9 },
  { name: '珍珠奶茶', value: 1.5, cagr: 9.0 },
];

const growth = [
  { year: '2025', conservative: 100, optimistic: 140 },
  { year: '2028', conservative: 140, optimistic: 250 },
  { year: '2031', conservative: 180, optimistic: 480 },
  { year: '2033', conservative: 220, optimistic: 265 },
];

const competitors = [
  { brand: '独立店铺', price: 4.75, stores: 180, r: 180 },
  { brand: 'CoCo', price: 5.85, stores: 120, r: 120 },
  { brand: 'Chatime', price: 5.85, stores: 100, r: 100 },
  { brand: 'Gong Cha', price: 7.0, stores: 50, r: 50 },
  { brand: 'Presotea', price: 7.0, stores: 30, r: 30 },
  { brand: 'Tiger Sugar', price: 8.75, stores: 20, r: 20 },
  { brand: 'The Alley', price: 7.0, stores: 16, r: 16 },
  { brand: 'Palgong', price: 7.0, stores: 15, r: 15 },
  { brand: '幸福堂', price: 8.75, stores: 10, r: 10 },
  { brand: 'Kung Fu Tea', price: 5.85, stores: 8, r: 8 },
  { brand: 'HEYTEA', price: 10.2, stores: 6, r: 6 },
];

const investment = [
  { model: 'Kiosk 极简店', design: 1.25, construction: 6, equipment: 5, compliance: 1.75, reserve: 2, total: 16 },
  { model: '标准店', design: 2, construction: 10, equipment: 10, compliance: 2, reserve: 4, total: 28 },
  { model: '复合旗舰店', design: 4.25, construction: 24, equipment: 16, compliance: 4.5, reserve: 8, total: 56.75 },
];

const scenarios = [
  { name: '保守', cups: 120, revenue: 2.65, margin: -40.3 },
  { name: '基准', cups: 170, revenue: 4.13, margin: 11.5 },
  { name: '乐观', cups: 230, revenue: 6.18, margin: 34.8 },
];

/* ── Custom Tooltip ── */
const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-brand-panel border border-white/10 px-4 py-3 rounded-xl shadow-2xl">
      <p className="text-white font-bold text-sm mb-1">{label}</p>
      {payload.map((e: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full" style={{ background: e.color }} />
          <span className="text-slate-400">{e.name}:</span>
          <span className="text-white font-mono">{e.value}</span>
        </div>
      ))}
    </div>
  );
};

/* ═══════════ EXPORTS ═══════════ */

export const MarketSizeChart = () => (
  <ResponsiveContainer width="100%" height={280}>
    <BarChart data={marketSize} layout="vertical" margin={{ left: 20, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={C.grid} horizontal={false} />
      <XAxis type="number" tick={TICK} axisLine={false} tickLine={false} unit=" 亿" />
      <YAxis type="category" dataKey="name" tick={{ fill: '#e2e8f0', fontSize: 12 }} width={110} axisLine={false} tickLine={false} />
      <Tooltip content={<Tip />} />
      <Bar dataKey="value" fill={C.teal} radius={[0, 6, 6, 0]} name="市场规模(亿CAD)" />
    </BarChart>
  </ResponsiveContainer>
);

export const GrowthChart = () => (
  <ResponsiveContainer width="100%" height={280}>
    <LineChart data={growth} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={C.grid} vertical={false} />
      <XAxis dataKey="year" tick={TICK} axisLine={false} tickLine={false} />
      <YAxis tick={TICK} axisLine={false} tickLine={false} unit="M" />
      <Tooltip content={<Tip />} />
      <Legend wrapperStyle={{ fontSize: 11, color: '#94a3b8' }} />
      <Line type="monotone" dataKey="conservative" stroke={C.blue} strokeWidth={2.5} dot={{ r: 4, fill: C.blue }} name="保守预期(百万CAD)" />
      <Line type="monotone" dataKey="optimistic" stroke={C.gold} strokeWidth={2.5} dot={{ r: 4, fill: C.gold }} name="高潜力预期(百万CAD)" />
    </LineChart>
  </ResponsiveContainer>
);

export const CompetitorChart = () => (
  <ResponsiveContainer width="100%" height={320}>
    <ScatterChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={C.grid} />
      <XAxis type="number" dataKey="price" name="客单价" unit=" $" tick={TICK} axisLine={false} label={{ value: '客单价 (CAD)', position: 'insideBottom', offset: -5, fill: '#64748b', fontSize: 11 }} />
      <YAxis type="number" dataKey="stores" name="门店数" tick={TICK} axisLine={false} label={{ value: '门店数量', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }} />
      <ZAxis type="number" dataKey="r" range={[60, 400]} />
      <Tooltip
        content={({ active, payload }) => {
          if (!active || !payload?.length) return null;
          const d = payload[0].payload;
          return (
            <div className="bg-brand-panel border border-brand-gold/30 px-4 py-3 rounded-xl shadow-2xl">
              <p className="text-brand-gold font-bold">{d.brand}</p>
              <p className="text-slate-300 text-xs">客单价: ${d.price} CAD</p>
              <p className="text-slate-300 text-xs">门店: {d.stores} 家</p>
            </div>
          );
        }}
      />
      <Scatter data={competitors} name="品牌">
        {competitors.map((_, i) => (
          <Cell key={i} fill={i === competitors.length - 1 ? C.red : C.gold} fillOpacity={0.8} />
        ))}
      </Scatter>
    </ScatterChart>
  </ResponsiveContainer>
);

export const InvestmentChart = () => (
  <ResponsiveContainer width="100%" height={220}>
    <BarChart data={investment} layout="vertical" margin={{ left: 20, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={C.grid} horizontal={false} />
      <XAxis type="number" tick={TICK} axisLine={false} tickLine={false} unit="万" />
      <YAxis type="category" dataKey="model" tick={{ fill: '#e2e8f0', fontSize: 11 }} width={90} axisLine={false} tickLine={false} />
      <Tooltip content={<Tip />} />
      <Legend wrapperStyle={{ fontSize: 10 }} />
      <Bar dataKey="construction" stackId="a" fill={C.blue} name="硬装施工" />
      <Bar dataKey="equipment" stackId="a" fill={C.teal} name="设备软装" />
      <Bar dataKey="reserve" stackId="a" fill={C.gold} name="运营储备" />
      <Bar dataKey="design" stackId="a" fill={C.purple} name="设计审批" />
      <Bar dataKey="compliance" stackId="a" fill="#6b7280" name="合规押金" />
    </BarChart>
  </ResponsiveContainer>
);

export const ScenarioChart = () => (
  <ResponsiveContainer width="100%" height={250}>
    <ComposedChart data={scenarios} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={C.grid} vertical={false} />
      <XAxis dataKey="name" tick={{ fill: '#e2e8f0', fontSize: 12 }} axisLine={false} />
      <YAxis yAxisId="left" tick={TICK} axisLine={false} tickLine={false} />
      <YAxis yAxisId="right" orientation="right" tick={TICK} axisLine={false} tickLine={false} unit="%" />
      <Tooltip content={<Tip />} />
      <Legend wrapperStyle={{ fontSize: 11 }} />
      <Bar yAxisId="left" dataKey="revenue" fill={C.blue} radius={[6, 6, 0, 0]} name="月营收(万CAD)" opacity={0.7} />
      <Line yAxisId="right" type="monotone" dataKey="margin" stroke={C.gold} strokeWidth={3} dot={{ r: 5, fill: C.gold }} name="税后净利率(%)" />
    </ComposedChart>
  </ResponsiveContainer>
);
