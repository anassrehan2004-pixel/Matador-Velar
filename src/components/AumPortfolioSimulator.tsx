import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDownRight, ArrowUpRight, Pause, Play, RotateCcw, X } from 'lucide-react';
import { motion, useSpring, useTransform } from 'motion/react';

type Asset = 'stocks' | 'forex' | 'bonds';
type Allocation = Record<Asset, number>;

const assets: { key: Asset; label: string; color: string }[] = [
  { key: 'stocks', label: 'Stocks', color: '#4f7cff' },
  { key: 'forex', label: 'Forex', color: '#45b879' },
  { key: 'bonds', label: 'Bonds', color: '#f0b429' },
];

const scenario = [
  { phase: 'Bull Market Surge', stocks: 0.06, forex: 0.025, bonds: 0.004 },
  { phase: 'Market Pullback', stocks: -0.045, forex: -0.025, bonds: 0.01 },
  { phase: 'Forex Volatility', stocks: -0.025, forex: 0.07, bonds: 0.004 },
  { phase: 'Market Correction', stocks: -0.09, forex: 0.045, bonds: 0.015 },
  { phase: 'Uneven Recovery', stocks: 0.08, forex: -0.03, bonds: -0.005 },
  { phase: 'Currency Selloff', stocks: 0.015, forex: -0.08, bonds: 0.01 },
  { phase: 'Relief Rally', stocks: 0.075, forex: 0.035, bonds: -0.005 },
  { phase: 'Profit Taking', stocks: -0.07, forex: 0.025, bonds: 0.012 },
  { phase: 'Global Risk-Off', stocks: -0.1, forex: -0.035, bonds: 0.02 },
  { phase: 'Sharp Rebound', stocks: 0.085, forex: 0.06, bonds: -0.01 },
  { phase: 'Forex Reversal', stocks: 0.025, forex: -0.055, bonds: 0.007 },
  { phase: 'Momentum Surge', stocks: 0.065, forex: 0.04, bonds: -0.002 },
];

const initialAllocation: Allocation = { stocks: 30, forex: 60, bonds: 10 };
const allocationPresets: { label: string; value: Allocation }[] = [
  { label: 'Defensive', value: { stocks: 20, forex: 30, bonds: 50 } },
  { label: 'Balanced', value: initialAllocation },
  { label: 'Growth', value: { stocks: 60, forex: 30, bonds: 10 } },
];
const annualTarget = 12;
const chart = { left: 42, right: 570, top: 18, bottom: 220 };

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const formatPercent = (value: number) => `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;

interface AumPortfolioSimulatorProps {
  onClose: () => void;
}

export const AumPortfolioSimulator: React.FC<AumPortfolioSimulatorProps> = ({ onClose }) => {
  const [initialCapital, setInitialCapital] = useState(5000);
  const [allocation, setAllocation] = useState(initialAllocation);
  const [month, setMonth] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    if (!isPlaying) return;
    if (month >= scenario.length) {
      setIsPlaying(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setMonth((current) => Math.min(current + 0.08, scenario.length));
    }, 40);
    return () => window.clearTimeout(timer);
  }, [isPlaying, month]);

  const history = useMemo(() => {
    const values = [initialCapital];
    for (let index = 0; index < Math.ceil(month); index += 1) {
      const step = scenario[index];
      const stepProgress = Math.min(month - index, 1);
      if (stepProgress <= 0) break;
      const weightedReturn =
        (allocation.stocks * step.stocks +
          allocation.forex * step.forex +
          allocation.bonds * step.bonds) /
        100;
      values.push(values[values.length - 1] * (1 + weightedReturn * stepProgress));
    }
    return values;
  }, [allocation, initialCapital, month]);
  const fullHistory = useMemo(() => {
    const values = [initialCapital];
    for (const step of scenario) {
      const weightedReturn =
        (allocation.stocks * step.stocks +
          allocation.forex * step.forex +
          allocation.bonds * step.bonds) /
        100;
      values.push(values[values.length - 1] * (1 + weightedReturn));
    }
    return values;
  }, [allocation, initialCapital]);

  const currentBalance = history[history.length - 1];
  const annualizedYield =
    month === 0 ? 0 : ((currentBalance / initialCapital - 1) * 12 * 100) / month;
  const currentScenario = month > 0 ? scenario[Math.min(Math.ceil(month) - 1, scenario.length - 1)] : null;
  const currentPeriodReturn = currentScenario
    ? (allocation.stocks * currentScenario.stocks +
        allocation.forex * currentScenario.forex +
        allocation.bonds * currentScenario.bonds) /
      100
    : 0;
  const targetBalance = initialCapital * (1 + annualTarget / 100);
  const marketPhase = currentScenario?.phase ?? 'Ready to simulate';
  const simulationComplete = month >= scenario.length;

  const chartBounds = useMemo(
    () => ({ min: initialCapital * 0.72, max: initialCapital * 1.35 }),
    [initialCapital],
  );

  const chartPoint = (value: number, index: number) => {
    const x = chart.left + (index / scenario.length) * (chart.right - chart.left);
    const y =
      chart.bottom -
      ((value - chartBounds.min) / (chartBounds.max - chartBounds.min)) *
        (chart.bottom - chart.top);
    return { x, y };
  };

  const fullChartPath = fullHistory
    .map((value, index) => {
      const point = chartPoint(value, index);
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    })
    .join(' ');
  const fullChartAreaPath = `${fullChartPath} L ${chart.right} ${chart.bottom} L ${chart.left} ${chart.bottom} Z`;
  const currentPoint = chartPoint(currentBalance, month);
  const targetY = chartPoint(targetBalance, 0).y;
  const achievedTarget = simulationComplete && annualizedYield >= annualTarget;
  const animatedBalance = useSpring(5000, { stiffness: 110, damping: 24 });
  const formattedAnimatedBalance = useTransform(animatedBalance, formatCurrency);

  useEffect(() => {
    animatedBalance.set(currentBalance);
  }, [animatedBalance, currentBalance]);

  const resetSimulation = () => {
    setIsPlaying(false);
    setMonth(0);
  };

  const updateAllocation = (asset: Asset, value: number) => {
    const otherAssets = assets.filter(({ key }) => key !== asset);
    const otherTotal = 100 - value;
    const currentOtherTotal = otherAssets.reduce((total, { key }) => total + allocation[key], 0);
    const next = { ...allocation, [asset]: value };

    if (currentOtherTotal === 0) {
      next[otherAssets[0].key] = Math.round(otherTotal / 2);
      next[otherAssets[1].key] = otherTotal - next[otherAssets[0].key];
    } else {
      next[otherAssets[0].key] = Math.round(
        (allocation[otherAssets[0].key] / currentOtherTotal) * otherTotal,
      );
      next[otherAssets[1].key] = otherTotal - next[otherAssets[0].key];
    }

    setAllocation(next);
    resetSimulation();
  };

  const updateCapital = (value: number) => {
    setInitialCapital(value);
    resetSimulation();
  };

  const updateTimeline = (value: number) => {
    setIsPlaying(false);
    setMonth(value);
  };

  const applyPreset = (preset: Allocation) => {
    setIsPlaying(false);
    setMonth(0);
    setAllocation(preset);
  };

  const activePreset = allocationPresets.find(({ value }) =>
    assets.every(({ key }) => value[key] === allocation[key]),
  )?.label;

  const currentAssetReturns = currentScenario ?? {
    stocks: 0,
    forex: 0,
    bonds: 0,
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="aum-simulator-title"
        className="max-h-[94vh] w-full max-w-[540px] overflow-y-auto overscroll-contain rounded-[28px] border border-white/10 bg-[#202226] text-[#e1e3e2] shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-[#202226]/95 px-5 py-4 backdrop-blur sm:px-7">
          <div>
            <h2 id="aum-simulator-title" className="mt-1 font-headline text-base font-semibold text-white">
              Portfolio simulator
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close portfolio simulator"
            className="rounded-full border border-white/10 p-2 text-[#d0c6ab] transition-colors hover:border-white/30 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-5 px-5 py-5 sm:px-7 sm:py-6">
          <div className="rounded-2xl border border-white/[0.06] bg-[#27292d] px-5 py-4">
            <p className="font-body text-xs text-[#b8b9bc]">Simulated portfolio balance</p>
            <div className="mt-1 flex flex-wrap items-center gap-2.5">
              <motion.p className="font-headline text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-[28px]">
                {formattedAnimatedBalance}
              </motion.p>
              <span
                className={`rounded-full border px-2.5 py-1 font-body text-[10px] font-medium ${
                  achievedTarget
                    ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                    : 'border-white/10 bg-white/[0.04] text-[#c2c3c6]'
                }`}
              >
                {achievedTarget
                  ? 'Target reached'
                  : simulationComplete
                    ? 'Below illustrative goal'
                    : month === 0
                      ? 'Illustrative scenario'
                      : 'Simulation in progress'}
              </span>
              {month > 0 && (
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-headline text-xs font-medium tabular-nums ${
                    currentPeriodReturn >= 0
                      ? 'bg-emerald-400/10 text-emerald-300'
                      : 'bg-rose-400/10 text-rose-300'
                  }`}
                  aria-label={`Current period ${currentPeriodReturn >= 0 ? 'gain' : 'loss'} ${formatPercent(currentPeriodReturn * 100)}`}
                >
                  {currentPeriodReturn >= 0
                    ? <ArrowUpRight className="h-3.5 w-3.5" />
                    : <ArrowDownRight className="h-3.5 w-3.5" />}
                  {formatPercent(currentPeriodReturn * 100)}
                  <span className="text-[10px] opacity-75">this period</span>
                </span>
              )}
            </div>
            <div className="mt-4">
              <p className="font-body text-xs text-[#b8b9bc]">Annualized scenario return</p>
              <p className="mt-1 font-headline text-lg font-medium text-white">
                {formatPercent(annualizedYield)}
                <span className="ml-2 text-sm font-normal text-[#8d9fcb]">
                  / {annualTarget}% illustrative goal
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-[#111114] p-4 sm:p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-body text-xs text-[#b8b9bc]">
                  Scenario phase: <span className="font-medium text-white">{marketPhase}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                  {assets.map(({ key, label, color }) => (
                    <span key={key} className="inline-flex items-center gap-1.5 font-body text-[10px] text-[#c2c3c6]">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                      {label} ({allocation[key]}%)
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={resetSimulation}
                  aria-label="Reset simulation"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-[#c2c3c6] transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (month >= scenario.length) setMonth(0);
                    setIsPlaying((playing) => !playing);
                  }}
                  aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-[#4f7cff]/25"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
                </button>
              </div>
            </div>

            <svg
              viewBox="0 0 600 250"
              role="img"
              aria-label={`Illustrative portfolio balance chart, month ${month} of 12`}
              className="h-[190px] w-full overflow-visible sm:h-[220px]"
            >
              {[0, 1, 2, 3].map((line) => {
                const y = chart.top + (line / 3) * (chart.bottom - chart.top);
                return (
                  <line
                    key={line}
                    x1={chart.left}
                    x2={chart.right}
                    y1={y}
                    y2={y}
                    stroke="#ffffff"
                    strokeOpacity=".07"
                  />
                );
              })}
              <line
                x1={chart.left}
                x2={chart.right}
                y1={targetY}
                y2={targetY}
                stroke="#45b879"
                strokeDasharray="4 5"
                strokeOpacity=".75"
              />
              <text
                x={chart.right - 2}
                y={Math.max(chart.top + 10, targetY - 7)}
                textAnchor="end"
                fill="#45b879"
                fontSize="10"
              >
                {annualTarget}% annual goal
              </text>
              <defs>
                <linearGradient id="aum-chart-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4f7cff" />
                  <stop offset="100%" stopColor="#4f7cff" stopOpacity="0" />
                </linearGradient>
                <clipPath id="aum-chart-clip">
                  <motion.rect
                    x={chart.left}
                    y={chart.top}
                    height={chart.bottom - chart.top}
                    animate={{ width: Math.max(0, currentPoint.x - chart.left) }}
                    initial={false}
                    transition={{ duration: 0.14, ease: 'easeOut' }}
                  />
                </clipPath>
              </defs>
              {month > 0 && (
                <path
                  d={fullChartAreaPath}
                  fill="url(#aum-chart-fill)"
                  opacity=".18"
                  clipPath="url(#aum-chart-clip)"
                />
              )}
              <motion.path
                d={fullChartPath}
                fill="none"
                stroke="#4f7cff"
                strokeWidth="2.5"
                strokeLinecap="round"
                clipPath="url(#aum-chart-clip)"
              />
              <motion.circle
                r="4.5"
                fill={currentPeriodReturn >= 0 ? '#45b879' : '#fb7185'}
                animate={{ cx: currentPoint.x, cy: currentPoint.y }}
                initial={false}
                transition={{ duration: 0.16, ease: 'easeOut' }}
              />
              <text x={chart.left} y="242" fill="#8f9095" fontSize="10">Month 0</text>
              <text x={chart.right} y="242" textAnchor="end" fill="#8f9095" fontSize="10">Month 12</text>
            </svg>
            <div className="mt-1 px-1">
              <div className="mb-2 flex items-center justify-between font-body text-[10px] text-[#a6a7aa]">
                <span>Drag to explore the timeline</span>
                <output htmlFor="aum-timeline" className="font-headline tabular-nums text-[#e1e3e2]">
                  Month {month.toFixed(month % 1 === 0 ? 0 : 1)} of 12
                </output>
              </div>
              <input
                id="aum-timeline"
                type="range"
                min="0"
                max={scenario.length}
                step="0.05"
                value={month}
                onChange={(event) => updateTimeline(Number(event.target.value))}
                aria-label="Simulation timeline"
                className="aum-range h-2 w-full cursor-pointer"
                style={{
                  '--range-color': '#4f7cff',
                  '--range-progress': `${(month / scenario.length) * 100}%`,
                } as React.CSSProperties}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-b border-white/[0.06] pb-5 text-center sm:gap-4">
            {assets.map(({ key, label }) => (
              <div key={key}>
                <p className="font-body text-[11px] text-[#b8b9bc]">{label} period return</p>
                <p className="mt-1 font-headline text-sm font-medium text-white">
                  {formatPercent(currentAssetReturns[key] * 100)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-2 font-body text-xs text-[#b8b9bc]">Try an allocation</p>
              <div className="grid grid-cols-3 gap-2">
                {allocationPresets.map(({ label, value }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => applyPreset(value)}
                    aria-pressed={activePreset === label}
                    className={`rounded-lg border px-2 py-2 font-headline text-xs transition-colors ${
                      activePreset === label
                        ? 'border-[#4f7cff]/60 bg-[#4f7cff]/15 text-white'
                        : 'border-white/10 bg-white/[0.03] text-[#b8b9bc] hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label htmlFor="aum-capital" className="font-body text-sm text-[#d0d1d3]">
                  Initial capital
                </label>
                <output htmlFor="aum-capital" className="font-headline text-sm font-medium text-white">
                  {formatCurrency(initialCapital)}
                </output>
              </div>
              <input
                id="aum-capital"
                type="range"
                min="1000"
                max="100000"
                step="500"
                value={initialCapital}
                onChange={(event) => updateCapital(Number(event.target.value))}
                className="aum-range h-2 w-full cursor-pointer"
                style={{
                  '--range-color': '#4f7cff',
                  '--range-progress': `${((initialCapital - 1000) / 99000) * 100}%`,
                } as React.CSSProperties}
              />
            </div>

            {assets.map(({ key, label, color }) => (
              <div key={key}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label htmlFor={`aum-${key}`} className="font-body text-sm text-[#d0d1d3]">
                    {label} portfolio share
                  </label>
                  <output htmlFor={`aum-${key}`} className="font-headline text-sm font-medium text-white">
                    {allocation[key]}%
                  </output>
                </div>
                <input
                  id={`aum-${key}`}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={allocation[key]}
                  onChange={(event) => updateAllocation(key, Number(event.target.value))}
                  className="aum-range h-2 w-full cursor-pointer"
                  style={{
                    '--range-color': color,
                    '--range-progress': `${allocation[key]}%`,
                  } as React.CSSProperties}
                />
              </div>
            ))}
          </div>

          <p className="border-t border-white/[0.06] pt-4 font-body text-[11px] leading-relaxed text-[#a6a7aa]">
            For illustration only. This hypothetical scenario uses simplified sample returns and is not actual
            performance, a forecast, or a guarantee. Investments involve risk, including possible loss of capital.
          </p>
        </div>
      </section>
    </div>,
    document.body,
  );
};
