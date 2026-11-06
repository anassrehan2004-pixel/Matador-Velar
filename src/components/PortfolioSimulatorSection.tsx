import React, { useEffect, useMemo, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

type Asset = 'stocks' | 'forex' | 'bonds';
type Allocation = Record<Asset, number>;

const marketPhases: {
  name: string;
  stocksYield: number;
  forexYield: number;
  bondsYield: number;
}[] = [
  { name: 'Bull Market Surge', stocksYield: 95, forexYield: 15, bondsYield: 5 },
  { name: 'Forex Volatility', stocksYield: -10, forexYield: 110, bondsYield: 8 },
  { name: 'Global Rebound', stocksYield: 70, forexYield: 35, bondsYield: 2 },
  { name: 'Macro Liquidity Crisis', stocksYield: -35, forexYield: -15, bondsYield: 25 },
  { name: 'Hyper Growth Phase', stocksYield: 110, forexYield: 50, bondsYield: -5 },
];

const assets: { key: Asset; label: string; color: string }[] = [
  { key: 'stocks', label: 'Stocks', color: '#3B82F6' },
  { key: 'forex', label: 'Forex', color: '#FFD700' },
  { key: 'bonds', label: 'Bonds', color: '#45b879' },
];

const initialAllocation: Allocation = { stocks: 30, forex: 60, bonds: 10 };
const annualYieldTarget = 60;
const maxChartSteps = 100;
const phaseDuration = 3.5;
const frameDuration = 0.08;
const simulationStepsPerUpdate = 2;

const formatCurrency = (value: number) =>
  `$${Math.round(value).toLocaleString('en-US')}`;

const getWeightedYield = (allocation: Allocation, phaseIndex: number) => {
  const phase = marketPhases[phaseIndex];
  return (
    (allocation.stocks / 100) * phase.stocksYield +
    (allocation.forex / 100) * phase.forexYield +
    (allocation.bonds / 100) * phase.bondsYield
  );
};

interface SimulationState {
  frame: number;
  history: number[];
}

const initialSimulation: SimulationState = { frame: 0, history: [0] };

export const PortfolioSimulatorSection: React.FC = () => {
  const [capital, setCapital] = useState(6000);
  const [allocation, setAllocation] = useState<Allocation>(initialAllocation);
  const [simulation, setSimulation] = useState<SimulationState>(initialSimulation);
  const [isPlaying, setIsPlaying] = useState(false);

  const phaseIndex =
    Math.floor((simulation.frame * frameDuration) / phaseDuration) % marketPhases.length;
  const activePhase = marketPhases[phaseIndex];
  const annualizedYield = getWeightedYield(allocation, phaseIndex);
  const currentBalance = simulation.history[simulation.history.length - 1];
  const bondsShare = Math.max(0, 100 - allocation.stocks - allocation.forex);
  const yieldStatus =
    annualizedYield >= annualYieldTarget
      ? 'Target Achieved'
      : annualizedYield >= 20
        ? 'Moderate Yield'
        : 'Below Target';
  const yieldStatusClass =
    annualizedYield >= annualYieldTarget
      ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300'
      : annualizedYield >= 20
        ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
        : 'border-rose-400/30 bg-rose-400/10 text-rose-300';
  const yieldTextClass =
    annualizedYield >= annualYieldTarget
      ? 'text-emerald-300'
      : annualizedYield >= 20
        ? 'text-amber-300'
        : 'text-rose-300';

  const chartMetrics = useMemo(() => {
    const width = 500;
    const height = 200;
    const padY = 30;
    const dataMax = Math.max(capital * 1.5, ...simulation.history);
    const rangeY = dataMax * 1.1 || 1;
    const totalPoints =
      isPlaying && simulation.history.length < maxChartSteps
        ? maxChartSteps
        : simulation.history.length - 1;
    const points = simulation.history.map((value, index) => {
      const x = (index / Math.max(1, totalPoints)) * width;
      const y = height - padY - (value / rangeY) * (height - padY * 2);
      return { x, y };
    });

    if (points.length === 1) {
      points[0] = { x: 0, y: height - padY };
    }

    let linePath = `M ${points[0].x} ${points[0].y}`;
    const tension = 0.25;
    for (let index = 0; index < points.length - 1; index += 1) {
      const previous = points[Math.max(0, index - 1)];
      const current = points[index];
      const next = points[index + 1];
      const following = points[Math.min(points.length - 1, index + 2)];
      const firstControlX = current.x + (next.x - previous.x) * tension;
      const firstControlY = current.y + (next.y - previous.y) * tension;
      const secondControlX = next.x - (following.x - current.x) * tension;
      const secondControlY = next.y - (following.y - current.y) * tension;
      linePath += ` C ${firstControlX} ${firstControlY}, ${secondControlX} ${secondControlY}, ${next.x} ${next.y}`;
    }

    const tipPoint = points[points.length - 1];
    const targetValue = capital * 1.6;
    const targetY = height - padY - (targetValue / rangeY) * (height - padY * 2);

    return {
      linePath,
      areaPath: `${linePath} L ${tipPoint.x} ${height} L ${points[0].x} ${height} Z`,
      tipPoint,
      targetY: Math.max(10, Math.min(height - 10, targetY)),
      tipXPercent: (tipPoint.x / width) * 100,
      tipYPercent: (tipPoint.y / height) * 100,
    };
  }, [capital, isPlaying, simulation.history]);

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setSimulation((current) => {
        let frame = current.frame;
        let history = current.history;

        for (let step = 0; step < simulationStepsPerUpdate; step += 1) {
          const currentPhaseIndex =
            Math.floor((frame * frameDuration) / phaseDuration) % marketPhases.length;
          const yieldRate = getWeightedYield(allocation, currentPhaseIndex);
          const lastValue = history[history.length - 1];
          let nextValue: number;

          if (history.length < maxChartSteps) {
            const progress = history.length / maxChartSteps;
            nextValue =
              progress < 0.2
                ? capital * (progress / 0.2)
                : Math.max(100, lastValue * (1 + (yieldRate / 100) * frameDuration * 0.4));
          } else {
            nextValue = Math.max(
              100,
              lastValue * (1 + (yieldRate / 100) * frameDuration * 0.3),
            );
          }

          history =
            history.length < maxChartSteps
              ? [...history, nextValue]
              : [...history.slice(1), nextValue];
          frame += 1;
        }

        return { frame, history };
      });
    }, frameDuration * simulationStepsPerUpdate * 1000);

    return () => window.clearInterval(timer);
  }, [allocation, capital, isPlaying]);

  const resetSimulation = () => {
    setIsPlaying(false);
    setSimulation(initialSimulation);
  };

  const updateCapital = (value: number) => {
    setCapital(value);
    resetSimulation();
  };

  const updateStocks = (value: number) => {
    const forex = Math.min(allocation.forex, 100 - value);
    setAllocation({ stocks: value, forex, bonds: 100 - value - forex });
    resetSimulation();
  };

  const updateForex = (value: number) => {
    const stocks = Math.min(allocation.stocks, 100 - value);
    setAllocation({ stocks, forex: value, bonds: 100 - stocks - value });
    resetSimulation();
  };

  const startSimulation = () => {
    setSimulation(initialSimulation);
    setIsPlaying(true);
  };

  return (
    <motion.section
      id="portfolio-simulator"
      aria-labelledby="portfolio-simulator-title"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24 scroll-mt-28 md:mb-32"
    >
      <div className="glass-panel glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-[#111414]/90 p-6 shadow-2xl sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#FFD700]/[0.06] blur-[110px]" />

        <header className="relative mb-8">
          <p className="mb-1 font-headline text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD700]">
            Interactive Demo
          </p>
          <h2
            id="portfolio-simulator-title"
            className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#e1e3e2] font-bold mb-5 leading-tight tracking-tight"
          >
            Investment Portfolio Simulator
          </h2>
        </header>

        <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div>
                <p className="flex flex-wrap items-center gap-1.5 font-body text-xs font-medium text-[#d0c6ab] sm:text-sm">
                  <span className="text-[#d0c6ab]/65">Market Phase:</span>
                  <span className="font-semibold text-white">{activePhase.name}</span>
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-body text-[11px] text-[#d0c6ab]/85 sm:text-xs">
                  {assets.map(({ key, label, color }) => (
                    <span key={key} className="inline-flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                      {label} ({allocation[key]}%)
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-label={isPlaying ? 'Pause portfolio simulation' : 'Play portfolio simulation'}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white shadow-lg transition-all hover:bg-white/[0.12] active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                )}
              </button>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0C0F0F] p-2 sm:h-72">
              <div className="pointer-events-none absolute left-3 top-3 z-10 rounded border border-[#FFD700]/25 bg-[#FFD700]/[0.07] px-2 py-0.5 font-headline text-[10px] text-[#FFD700] sm:text-[11px]">
                60.0% Annual Yield Target Goal
              </div>

              <div
                className={`pointer-events-none absolute z-20 flex -translate-x-full -translate-y-full items-center gap-1.5 whitespace-nowrap rounded border border-[#FFD700]/25 bg-[#FFD700]/[0.07] px-2.5 py-1.5 font-mono text-xs font-bold text-white shadow-2xl transition-opacity duration-200`}
                style={{
                  left: `clamp(110px, calc(${chartMetrics.tipXPercent}% - 12px), calc(100% - 12px))`,
                  top:
                    chartMetrics.tipPoint.y < 100
                      ? `min(calc(100% - 12px), calc(${chartMetrics.tipYPercent}% + 12px))`
                      : `max(44px, calc(${chartMetrics.tipYPercent}% - 12px))`,
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFD700]" />
                <span className="font-extrabold text-[#fff]">{formatCurrency(currentBalance)}</span>
              </div>

              <svg
                className="h-full w-full overflow-visible"
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
                role="img"
                aria-label={`Illustrative portfolio balance ${formatCurrency(currentBalance)}`}
              >
                <defs>
                  <linearGradient id="portfolio-chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity=".35" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line
                  x1="0"
                  y1={chartMetrics.targetY}
                  x2="500"
                  y2={chartMetrics.targetY}
                  stroke="#FFD700"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeOpacity=".5"
                />
                <path d={chartMetrics.areaPath} fill="url(#portfolio-chart-gradient)" />
                <path
                  d={chartMetrics.linePath}
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle
                  cx={chartMetrics.tipPoint.x}
                  cy={chartMetrics.tipPoint.y}
                  r="5"
                  fill="#FFD700"
                  stroke="#fff"
                  strokeWidth="2.5"
                  className={simulation.history.length > 1 ? 'opacity-100' : 'opacity-0'}
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-xl border border-white/[0.08] bg-black/20 p-4 text-center">
              {assets.map(({ key, label }) => (
                <div key={key} className="space-y-0.5">
                  <p className="font-body text-[11px] font-medium text-[#d0c6ab]/65 sm:text-xs">
                    {label} Yield
                  </p>
                  <p className="font-mono text-base font-bold text-[#e1e3e2] sm:text-xl">
                    {activePhase[`${key}Yield` as keyof typeof activePhase]}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col justify-between space-y-6 rounded-2xl border border-white/10 bg-[#0C0F0F]/70 p-6 lg:col-span-5">
            <div className="space-y-2 border-b border-white/10 pb-6">
              <p className="font-body text-xs font-medium text-[#d0c6ab]/65 sm:text-sm">
                Current Portfolio Balance
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {formatCurrency(currentBalance)}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 font-body text-xs font-semibold transition-colors duration-300 ${yieldStatusClass}`}
                >
                  {yieldStatus}
                </span>
              </div>
              <div className="pt-2">
                <p className="font-body text-xs text-[#d0c6ab]/65 sm:text-sm">
                  Annualized Yield Achieved
                </p>
                <p className="mt-1 font-headline text-sm font-bold sm:text-base">
                  <span className={`font-mono ${yieldTextClass}`}>
                    {annualizedYield.toFixed(1)}%
                  </span>
                  <span className="font-normal text-[#d0c6ab]/55"> / </span>
                  <span className="font-semibold text-[#3B82F6]">
                    {annualYieldTarget.toFixed(1)}% Target
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3 font-body text-xs sm:text-sm">
                  <label htmlFor="portfolio-capital" className="font-medium text-[#d0c6ab]">
                    Initial Capital Investment
                  </label>
                  <output htmlFor="portfolio-capital" className="font-mono font-bold text-white">
                    {formatCurrency(capital)}
                  </output>
                </div>
                <input
                  id="portfolio-capital"
                  type="range"
                  min="1000"
                  max="30000"
                  step="1000"
                  value={capital}
                  onChange={(event) => updateCapital(Number(event.target.value))}
                  aria-label="Initial capital investment"
                  className="aum-range h-2 w-full cursor-pointer"
                  style={{
                    '--range-color': '#FFD700',
                    '--range-progress': `${((capital - 1000) / 29000) * 100}%`,
                  } as React.CSSProperties}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3 font-body text-xs sm:text-sm">
                  <label htmlFor="portfolio-stocks" className="font-medium text-[#d0c6ab]">
                    Stocks Portfolio Share
                  </label>
                  <output htmlFor="portfolio-stocks" className="font-mono font-bold text-white">
                    {allocation.stocks}%
                  </output>
                </div>
                <input
                  id="portfolio-stocks"
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={allocation.stocks}
                  onChange={(event) => updateStocks(Number(event.target.value))}
                  aria-label="Stocks portfolio share"
                  className="aum-range h-2 w-full cursor-pointer"
                  style={{
                    '--range-color': '#FFD700',
                    '--range-progress': `${allocation.stocks}%`,
                  } as React.CSSProperties}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3 font-body text-xs sm:text-sm">
                  <label htmlFor="portfolio-forex" className="font-medium text-[#d0c6ab]">
                    Forex Portfolio Share
                  </label>
                  <output htmlFor="portfolio-forex" className="font-mono font-bold text-white">
                    {allocation.forex}%
                  </output>
                </div>
                <input
                  id="portfolio-forex"
                  type="range"
                  min="0"
                  max={100 - allocation.stocks}
                  step="5"
                  value={allocation.forex}
                  onChange={(event) => updateForex(Number(event.target.value))}
                  aria-label="Forex portfolio share"
                  className="aum-range h-2 w-full cursor-pointer"
                  style={{
                    '--range-color': '#FFD700',
                    '--range-progress': `${(allocation.forex / Math.max(1, 100 - allocation.stocks)) * 100}%`,
                  } as React.CSSProperties}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={startSimulation}
              className="cursor-pointer flex w-full items-center justify-center gap-2 rounded border border-[#FFD700]/25 bg-[#FFD700]/[0.07] py-3 font-headline text-sm font-semibold text-white shadow-lg shadow-[#FFD700]/8 transition-all duration-200 hover:border-[#FFD700]/60 hover:bg-[#FFD700]/[0.12] active:scale-[0.98]"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Apply Strategy</span>
            </button>
          </aside>
        </div>

        <p className="relative mt-6 border-t border-white/10 pt-4 font-body text-[11px] leading-relaxed text-[#d0c6ab]/55">
          For illustration only. This hypothetical scenario uses simplified sample returns and is not actual
          performance, a forecast, or a guarantee. Investments involve risk, including possible loss of capital.
        </p>
      </div>
    </motion.section>
  );
};
