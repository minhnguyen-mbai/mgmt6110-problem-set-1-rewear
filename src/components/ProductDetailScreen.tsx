import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  ShoppingBag,
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailScreenProps {
  product: Product;
  onBack: () => void;
  onNavigateToBag: () => void;
  isSaved: boolean;
  onToggleSave: (product: Product) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onBack,
  onNavigateToBag,
  isSaved,
  onToggleSave,
}) => {
  const [justSavedNotification, setJustSavedNotification] = useState(false);

  const savings = Math.max(0, product.retailPrice - product.price);
  const discountPercent = Math.round((savings / product.retailPrice) * 100);

  const handleSaveClick = () => {
    onToggleSave(product);
    if (!isSaved) {
      setJustSavedNotification(true);
      setTimeout(() => setJustSavedNotification(false), 3500);
    }
  };

  return (
    <div id="product-detail-screen" className="max-w-5xl mx-auto px-4 sm:px-8 py-4 sm:py-8 space-y-4 sm:space-y-6">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-100">
        <button
          id="back-to-discover-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors min-h-[44px] py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Discover
        </button>

        {isSaved && (
          <button
            id="view-in-bag-link"
            onClick={onNavigateToBag}
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors min-h-[36px]"
          >
            <span>In your bag</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Column: Clean Image with authentic badge */}
        <div className="space-y-3">
          <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
            <img
              src={product.image}
              alt={`${product.brand} - ${product.name}`}
              className="w-full h-full object-cover object-center grayscale-[0.08]"
              referrerPolicy="no-referrer"
            />
            {/* Condition Pill */}
            <div className="absolute top-2.5 left-2.5 bg-white/95 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-900 border border-slate-100 shadow-2xs rounded-xs">
              Condition: {product.condition}
            </div>

            {/* Savings Banner */}
            <div className="absolute bottom-2.5 left-2.5 bg-slate-900 text-white px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase rounded-xs">
              Save {discountPercent}% vs Retail
            </div>
          </div>
        </div>

        {/* Right Column: Product Info & Actions */}
        <div className="space-y-4 sm:space-y-6">
          {/* Brand, Title, Category */}
          <div className="space-y-1.5 sm:space-y-2 border-b border-slate-100 pb-3.5 sm:pb-5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
                {product.brand}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {product.category}
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-xs text-slate-500">
              Color tone: <span className="text-slate-800 font-medium">{product.color}</span>
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-3.5 sm:p-5 flex items-center justify-between gap-2">
            <div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider sm:tracking-widest font-bold">
                Rewear Price
              </div>
              <div className="flex items-baseline gap-2 mt-0.5 sm:mt-1">
                <span className="text-xl sm:text-3xl font-bold text-indigo-600">
                  S${product.price}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 line-through">
                  S${product.retailPrice}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 sm:py-1 rounded">
                You save S${savings}
              </span>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1">
                {discountPercent}% below retail
              </div>
            </div>
          </div>

          {/* Size & Availability */}
          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400 mb-1.5 sm:mb-2">
              Size & Availability
            </h3>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-11 sm:w-12 h-9 sm:h-10 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                {product.size}
              </div>
              <div className="text-xs text-slate-600">
                <p className="font-bold text-slate-900">1 unique piece in stock</p>
                <p className="text-slate-500 text-[11px] sm:text-xs">Curated & inspected in Singapore.</p>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400 mb-1.5 sm:mb-2">
              About This Piece
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* CTA Action Area */}
          <div className="pt-1 sm:pt-2 space-y-2.5 sm:space-y-3">
            <button
              id="save-to-bag-cta"
              onClick={handleSaveClick}
              className={`w-full min-h-[48px] py-3.5 sm:py-4 px-5 rounded font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] shadow-sm ${
                isSaved
                  ? 'bg-slate-900 text-indigo-300 hover:bg-slate-800'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span>{isSaved ? 'Saved in My Bag ✓' : 'Save to My Bag'}</span>
            </button>

            {/* Quick Feedback Banner when saved */}
            {justSavedNotification && (
              <div
                id="save-success-notification"
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 sm:px-4 py-2.5 rounded text-xs flex items-center justify-between transition-all"
              >
                <span className="flex items-center gap-2 font-medium text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Saved to your bag!
                </span>
                <button
                  onClick={onNavigateToBag}
                  className="font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 ml-2 uppercase text-[10px] tracking-wider shrink-0 min-h-[36px] flex items-center"
                >
                  Open Bag →
                </button>
              </div>
            )}

            {isSaved && !justSavedNotification && (
              <button
                id="go-to-bag-btn"
                onClick={onNavigateToBag}
                className="w-full min-h-[44px] py-3 px-4 rounded text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                View all items in Saved Bag
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

