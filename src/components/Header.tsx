import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  savedCount,
}) => {
  return (
    <header
      id="app-header"
      className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <button
          id="brand-logo-btn"
          onClick={() => onNavigate('discover')}
          className="flex items-center gap-2.5 text-left group focus:outline-none min-h-[44px] py-1"
        >
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-sans">
              REWEAR
            </h1>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Singapore
            </span>
          </div>
        </button>

        {/* Right Nav Action: Bag Icon */}
        <div className="flex items-center gap-3">
          <button
            id="nav-bag-btn"
            onClick={() => onNavigate('bag')}
            className="flex items-center gap-2.5 focus:outline-none group min-h-[44px] min-w-[44px] justify-center"
            title="My Saved Bag"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900 hidden sm:inline">
              Saved Bag
            </span>
            <div className="relative">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all ${
                  currentScreen === 'bag'
                    ? 'bg-slate-900 text-white ring-2 ring-slate-900 ring-offset-2'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
              </div>
              {savedCount > 0 && (
                <span
                  id="bag-badge-count"
                  className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-bold"
                >
                  {savedCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

