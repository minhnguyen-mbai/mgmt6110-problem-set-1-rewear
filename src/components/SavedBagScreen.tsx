import React from 'react';
import { ArrowLeft, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface SavedBagScreenProps {
  savedProducts: Product[];
  onBackToDiscover: () => void;
  onSelectProduct: (product: Product) => void;
  onRemoveFromBag: (productId: string) => void;
  onClearBag: () => void;
}

export const SavedBagScreen: React.FC<SavedBagScreenProps> = ({
  savedProducts,
  onBackToDiscover,
  onSelectProduct,
  onRemoveFromBag,
  onClearBag,
}) => {
  const itemCount = savedProducts.length;

  const totalSecondhandPrice = savedProducts.reduce((sum, p) => sum + p.price, 0);
  const totalRetailPrice = savedProducts.reduce((sum, p) => sum + p.retailPrice, 0);
  const totalSavedValue = Math.max(0, totalRetailPrice - totalSecondhandPrice);
  const percentageSaved =
    totalRetailPrice > 0 ? Math.round((totalSavedValue / totalRetailPrice) * 100) : 0;

  return (
    <div id="saved-bag-screen" className="max-w-5xl mx-auto px-4 sm:px-8 py-4 sm:py-8 space-y-5 sm:space-y-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100">
        <button
          id="bag-back-btn"
          onClick={onBackToDiscover}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors min-h-[44px] py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Discovering
        </button>

        {itemCount > 0 && (
          <button
            id="clear-bag-btn"
            onClick={onClearBag}
            className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-red-600 transition-colors min-h-[44px] px-1"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Screen Title & Success State */}
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-3xl font-serif italic text-slate-900 tracking-tight">
            My Saved Bag
          </h1>
        </div>

        {/* Clear success state banner matching Clean Minimalism */}
        <div>
          <span
            id="saved-bag-status-badge"
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-100"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {itemCount === 0
                ? '0 items saved'
                : `${itemCount} item${itemCount === 1 ? '' : 's'} saved in bag`}
            </span>
          </span>
        </div>
      </div>

      {itemCount > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Saved Items List (2 columns on lg) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
              Saved Pieces ({itemCount})
            </h2>

            <div className="space-y-2.5 sm:space-y-3">
              {savedProducts.map((product) => {
                const itemSavings = Math.max(0, product.retailPrice - product.price);

                return (
                  <div
                    key={product.id}
                    id={`saved-item-${product.id}`}
                    className="bg-white border border-slate-100 rounded-lg p-3 sm:p-4 flex gap-3 sm:gap-4 items-center justify-between hover:border-slate-300 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div
                      onClick={() => onSelectProduct(product)}
                      className="relative aspect-[4/5] w-16 sm:w-20 rounded overflow-hidden bg-slate-100 shrink-0 cursor-pointer group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Information */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold text-slate-400 truncate">
                          {product.brand}
                        </span>
                        <span className="text-[9px] sm:text-[10px] bg-slate-100 text-slate-800 font-bold px-1.5 py-0.5 rounded">
                          Size {product.size}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-700 bg-slate-50 font-medium px-1.5 py-0.5 rounded border border-slate-100">
                          {product.condition}
                        </span>
                      </div>

                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-xs sm:text-sm font-medium text-slate-900 hover:text-indigo-600 cursor-pointer truncate mt-0.5 transition-colors"
                      >
                        {product.name}
                      </h3>

                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mt-1 sm:mt-1.5">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          S${product.price}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                          S${product.retailPrice}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase">
                          Save S${itemSavings}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2 shrink-0">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors hidden sm:block"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onRemoveFromBag(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-slate-100 rounded transition-colors"
                        title="Remove from bag"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Total Saved Value Card (1 column on lg) */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-5 sticky top-24">
              <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-900">
                Your Savings Summary
              </h2>

              <div className="space-y-2 text-xs border-b border-slate-200/80 pb-3 sm:pb-4">
                <div className="flex justify-between text-slate-500">
                  <span>Pre-Loved Total</span>
                  <span className="font-bold text-slate-900">
                    S${totalSecondhandPrice}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Original Retail Value</span>
                  <span className="line-through text-slate-400">
                    S${totalRetailPrice}
                  </span>
                </div>
              </div>

              {/* Total Saved Value Highlight */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-slate-100 space-y-1 shadow-2xs">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold text-slate-400">
                  Total Saved Value
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 font-sans">
                  S${totalSavedValue}
                </div>
                <p className="text-xs text-slate-500 pt-0.5">
                  You are saving <span className="font-bold text-emerald-600">{percentageSaved}%</span> compared to buying new.
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={onBackToDiscover}
                  className="w-full min-h-[48px] py-3.5 bg-slate-900 text-white rounded text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Discover More Pieces
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Items remain saved in your local session.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div
          id="empty-bag-state"
          className="bg-white border border-slate-200 rounded-xl p-8 sm:p-14 text-center space-y-4 max-w-md mx-auto"
        >
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <ShoppingBag className="w-5 sm:w-6 h-5 sm:h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Your bag is currently empty
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Explore pre-loved pieces matching your size and budget, then save them here for quick decision-making.
            </p>
          </div>
          <button
            id="empty-bag-discover-btn"
            onClick={onBackToDiscover}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-slate-800 transition-colors min-h-[44px]"
          >
            Start Discovering
          </button>
        </div>
      )}
    </div>
  );
};

