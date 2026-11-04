import React, { useState } from 'react';
import { X, Sliders, Calculator, ArrowRight, ShieldCheck, PieChart, TrendingUp } from 'lucide-react';

interface StrategyCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const StrategyCalculatorModal: React.FC<StrategyCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [capital, setCapital] = useState<number>(500000);
  const [horizonYears, setHorizonYears] = useState<number>(3);
  const [macroWeight, setMacroWeight] = useState<number>(60);
  const [yieldWeight, setYieldWeight] = useState<number>(40);

  if (!isOpen) return null;

  // Calculations
  const expectedAnnualYield = (macroWeight * 0.196 + yieldWeight * 0.138) / 100;
  const projectedFutureValue = capital * Math.pow(1 + expectedAnnualYield, horizonYears);
  const totalNetGain = projectedFutureValue - capital;
  const estimatedSharpe = (macroWeight * 2.14 + yieldWeight * 2.85) / 100;

  const handleMacroChange = (val: number) => {
    setMacroWeight(val);
    setYieldWeight(100 - val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="glass-panel glow-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative bg-[#111414]/95 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white tracking-tight">
            Institutional Allocation Modeler
          </h3>
          <p className="text-xs sm:text-sm text-[#d0c6ab] mt-1">
            Simulate risk-adjusted compounded capital returns across DEMO quantitative mandates.
          </p>
        </div>

        {/* Controls */}
        <div className="space-y-6 mb-8">
          {/* Capital Slider */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab]">
                Investment Capital (USD)
              </span>
              <span className="text-lg font-mono font-bold text-[#FFD700]">
                ${capital.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={5000000}
              step={50000}
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value))}
              className="w-full accent-[#FFD700] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
              <span>$100,000</span>
              <span>$2,500,000</span>
              <span>$5,000,000+</span>
            </div>
          </div>

          {/* Time Horizon Slider */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab]">
                Investment Horizon
              </span>
              <span className="text-base font-mono font-bold text-white">
                {horizonYears} {horizonYears === 1 ? 'Year' : 'Years'}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={horizonYears}
              onChange={(e) => setHorizonYears(Number(e.target.value))}
              className="w-full accent-[#FFD700] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
              <span>1 Year</span>
              <span>5 Years</span>
              <span>10 Years</span>
            </div>
          </div>

          {/* Strategy Weights */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-headline font-semibold uppercase tracking-wider text-[#d0c6ab]">
                Strategy Weighting
              </span>
              <span className="text-xs font-mono text-white">
                Macro Alpha ({macroWeight}%) • Yield ({yieldWeight}%)
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={macroWeight}
              onChange={(e) => handleMacroChange(Number(e.target.value))}
              className="w-full accent-sky-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
              <span>100% Systematic Yield</span>
              <span>Balanced 50/50</span>
              <span>100% Macro Alpha</span>
            </div>
          </div>
        </div>

        {/* Projected Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          <div className="p-4 rounded-xl bg-[#191c1c] border border-white/10">
            <span className="text-[11px] font-headline uppercase tracking-wider text-[#d0c6ab]/70 block mb-1">
              Projected Capital
            </span>
            <span className="text-xl font-bold text-[#FFD700] font-mono">
              ${Math.round(projectedFutureValue).toLocaleString()}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#191c1c] border border-white/10">
            <span className="text-[11px] font-headline uppercase tracking-wider text-[#d0c6ab]/70 block mb-1">
              Compounded Net Return
            </span>
            <span className="text-xl font-bold text-emerald-400 font-mono">
              +${Math.round(totalNetGain).toLocaleString()}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#191c1c] border border-white/10">
            <span className="text-[11px] font-headline uppercase tracking-wider text-[#d0c6ab]/70 block mb-1">
              Blended Sharpe Ratio
            </span>
            <span className="text-xl font-bold text-sky-400 font-mono">
              {estimatedSharpe.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="btn-neo text-[#FFD700] font-headline text-xs font-semibold uppercase tracking-wider py-4 px-6 rounded-xl border border-[#FFD700]/40 flex-1 flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <span>Lock In Mandate Terms & Schedule Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 mt-4 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
          <span>Past performance models are for institutional simulation purposes. Actual portfolio agreements stipulate specific risk parameters.</span>
        </div>
      </div>
    </div>
  );
};
