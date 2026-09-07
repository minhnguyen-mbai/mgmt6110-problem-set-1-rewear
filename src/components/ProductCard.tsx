import React from 'react';
import { Bookmark } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isSaved: boolean;
  onToggleSave: (e: React.MouseEvent, product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isSaved,
  onToggleSave,
}) => {
  const savings = Math.max(0, product.retailPrice - product.price);

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onSelect(product)}
      className="group cursor-pointer flex flex-col transition-all duration-200"
    >
      {/* Product Image Area */}
      <div className="aspect-[4/5] bg-slate-100 mb-2 sm:mb-3 rounded-lg overflow-hidden flex items-center justify-center relative border border-slate-100 group-hover:border-slate-300 transition-colors">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />

        {/* Authentic / Condition Badge */}
        <div className="absolute top-2.5 left-2.5 bg-white/95 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-900 border border-slate-100 shadow-2xs rounded-xs">
          {product.condition}
        </div>

        {/* Quick Save to Bag Button */}
        <button
          id={`save-btn-${product.id}`}
          type="button"
          onClick={(e) => onToggleSave(e, product)}
          title={isSaved ? 'Remove from My Bag' : 'Save to My Bag'}
          className={`absolute top-2 right-2 w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-2xs ${
            isSaved
              ? 'bg-slate-900 text-white ring-2 ring-slate-900'
              : 'bg-white/90 text-slate-600 hover:bg-white hover:text-slate-900 backdrop-blur-xs'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-white' : ''}`} />
        </button>

        {/* Size Badge */}
        <div className="absolute bottom-2.5 left-2.5 bg-slate-900/90 text-white px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase rounded-xs">
          Size {product.size}
        </div>
      </div>

      {/* Product Info Area */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          {/* Brand */}
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest text-slate-400 truncate">
            {product.brand}
          </p>

          {/* Product Name */}
          <h4 className="text-xs sm:text-sm font-medium mt-0.5 text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h4>
        </div>

        {/* Pricing Block */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-1.5 gap-y-0.5 mt-1.5 sm:mt-2 pt-1 border-t border-slate-100">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              S${product.price}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 line-through">
              S${product.retailPrice}
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase">
            -S${savings}
          </span>
        </div>
      </div>
    </div>
  );
};

