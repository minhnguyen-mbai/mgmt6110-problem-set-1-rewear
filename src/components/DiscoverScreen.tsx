import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Product, ProductCategory, ProductSize, BudgetFilter } from '../types';
import { ProductCard } from './ProductCard';

interface DiscoverScreenProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  savedProductIds: Set<string>;
  onToggleSave: (e: React.MouseEvent, product: Product) => void;
}

const CATEGORIES: ProductCategory[] = ['All', 'Tops', 'Dresses', 'Bottoms', 'Outerwear', 'Bags'];
const SIZES: ProductSize[] = ['All', 'XS', 'S', 'M', 'L', 'XL'];
const BUDGET_OPTIONS: { id: BudgetFilter; label: string; maxPrice: number }[] = [
  { id: 'All', label: 'Any Budget', maxPrice: Infinity },
  { id: 'under30', label: 'Under S$30', maxPrice: 30 },
  { id: 'under50', label: 'Under S$50', maxPrice: 50 },
  { id: 'under75', label: 'Under S$75', maxPrice: 75 },
  { id: 'under100', label: 'Under S$100', maxPrice: 100 },
];

export const DiscoverScreen: React.FC<DiscoverScreenProps> = ({
  products,
  onSelectProduct,
  savedProductIds,
  onToggleSave,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedSize, setSelectedSize] = useState<ProductSize>('All');
  const [selectedBudget, setSelectedBudget] = useState<BudgetFilter>('All');

  // Filter products based on search, category, size, and budget
  const filteredProducts = useMemo(() => {
    const budgetMax = BUDGET_OPTIONS.find((b) => b.id === selectedBudget)?.maxPrice ?? Infinity;
    const query = searchQuery.trim().toLowerCase();

    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Size filter
      if (selectedSize !== 'All' && p.size !== selectedSize) {
        return false;
      }

      // Budget filter
      if (p.price > budgetMax) {
        return false;
      }

      // Search query filter
      if (query) {
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        if (!matchesBrand && !matchesName && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [products, searchQuery, selectedCategory, selectedSize, selectedBudget]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedSize !== 'All' ||
    selectedBudget !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSize('All');
    setSelectedBudget('All');
  };

  return (
    <div id="discover-screen" className="max-w-5xl mx-auto px-4 sm:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8">
      {/* Top Banner & Search Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3.5 sm:gap-4 pb-2 border-b border-slate-100">
        <div>
          <h2 className="text-xl sm:text-3xl font-serif italic text-slate-900 tracking-tight">
            Discover Pre-Loved Fashion
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Find items by category, size, and budget
          </p>
        </div>

        {/* Clean Minimalist Rounded Search Pill */}
        <div className="flex items-center bg-slate-100 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full w-full md:w-80 min-h-[44px] transition-all focus-within:ring-2 focus-within:ring-slate-900/10 focus-within:bg-white border border-transparent focus-within:border-slate-200">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search items or brands..."
            className="bg-transparent border-none focus:outline-none text-xs sm:text-sm ml-2.5 w-full text-slate-900 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-slate-400 hover:text-slate-700 ml-1 p-1"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Clean Minimalism Filters Panel */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-5">
        {/* Filter Section Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-700">
              Filter Pieces
            </span>
          </div>
          {hasActiveFilters && (
            <button
              id="top-reset-filters-btn"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors p-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset filters
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div>
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
              Category
            </h3>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-[11px] text-slate-400 hover:text-slate-700 p-0.5"
              >
                Reset category
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-category-${cat.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat === 'All' || selectedCategory === cat ? 'All' : cat)}
                  className={`px-3 py-2 sm:py-1.5 rounded text-xs min-h-[38px] sm:min-h-0 transition-all ${
                    isSelected
                      ? 'border border-slate-900 bg-slate-900 text-white font-medium shadow-2xs'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Size Filter */}
        <div>
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
              Your Size
            </h3>
            {selectedSize !== 'All' && (
              <button
                onClick={() => setSelectedSize('All')}
                className="text-[11px] text-slate-400 hover:text-slate-700 p-0.5"
              >
                Reset size
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {SIZES.map((sz) => {
              const isSelected = selectedSize === sz;
              return (
                <button
                  key={sz}
                  id={`filter-size-${sz.toLowerCase()}`}
                  onClick={() => setSelectedSize(sz === 'All' || selectedSize === sz ? 'All' : sz)}
                  className={`min-w-[40px] px-3 py-2 sm:py-1.5 rounded text-xs min-h-[38px] sm:min-h-0 transition-all ${
                    isSelected
                      ? 'border border-slate-900 bg-slate-900 text-white font-medium shadow-2xs'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-900'
                  }`}
                >
                  {sz === 'All' ? 'All Sizes' : sz}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget Filter */}
        <div>
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
              Budget (SGD)
            </h3>
            {selectedBudget !== 'All' && (
              <button
                onClick={() => setSelectedBudget('All')}
                className="text-[11px] text-slate-400 hover:text-slate-700 p-0.5"
              >
                Reset budget
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {BUDGET_OPTIONS.map((budget) => {
              const isSelected = selectedBudget === budget.id;
              return (
                <button
                  key={budget.id}
                  id={`filter-budget-${budget.id}`}
                  onClick={() => setSelectedBudget(budget.id === 'All' || selectedBudget === budget.id ? 'All' : budget.id)}
                  className={`px-3 py-2 sm:py-1.5 rounded text-xs min-h-[38px] sm:min-h-0 transition-all ${
                    isSelected
                      ? 'border border-slate-900 bg-slate-900 text-white font-medium shadow-2xs'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-900'
                  }`}
                >
                  {budget.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Summary & Dismissible Chips */}
        {hasActiveFilters && (
          <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Active:
              </span>
              {selectedCategory !== 'All' && (
                <button
                  id="chip-remove-category"
                  onClick={() => setSelectedCategory('All')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full text-[11px] sm:text-xs font-medium border border-indigo-100 transition-colors cursor-pointer group"
                  title="Remove category filter"
                >
                  <span>{selectedCategory}</span>
                  <X className="w-3 h-3 text-indigo-500 group-hover:text-indigo-800" />
                </button>
              )}
              {selectedSize !== 'All' && (
                <button
                  id="chip-remove-size"
                  onClick={() => setSelectedSize('All')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full text-[11px] sm:text-xs font-medium border border-indigo-100 transition-colors cursor-pointer group"
                  title="Remove size filter"
                >
                  <span>Size {selectedSize}</span>
                  <X className="w-3 h-3 text-indigo-500 group-hover:text-indigo-800" />
                </button>
              )}
              {selectedBudget !== 'All' && (
                <button
                  id="chip-remove-budget"
                  onClick={() => setSelectedBudget('All')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full text-[11px] sm:text-xs font-medium border border-indigo-100 transition-colors cursor-pointer group"
                  title="Remove budget filter"
                >
                  <span>{BUDGET_OPTIONS.find((b) => b.id === selectedBudget)?.label}</span>
                  <X className="w-3 h-3 text-indigo-500 group-hover:text-indigo-800" />
                </button>
              )}
              {searchQuery.trim() !== '' && (
                <button
                  id="chip-remove-search"
                  onClick={() => setSearchQuery('')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full text-[11px] sm:text-xs font-medium border border-slate-200 transition-colors cursor-pointer group"
                  title="Remove search query"
                >
                  <span className="truncate max-w-[120px]">"{searchQuery.trim()}"</span>
                  <X className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
                </button>
              )}
            </div>
            <button
              id="reset-filters-btn"
              onClick={resetFilters}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:border-slate-900 hover:text-slate-900 rounded transition-all shadow-2xs self-start sm:self-auto"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="flex flex-wrap items-end justify-between gap-2 pt-1">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-slate-400">
            Results
          </span>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} matching criteria
          </p>
        </div>
        {hasActiveFilters && (
          <button
            id="results-clear-btn"
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors p-1"
          >
            <RotateCcw className="w-3 h-3" />
            Clear all filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div
          id="products-grid"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              isSaved={savedProductIds.has(product.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          id="no-results-view"
          className="bg-white border border-slate-200 rounded-xl p-8 sm:p-14 text-center space-y-3"
        >
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            No items match your exact filters
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your category, size, or budget options to discover more pre-loved pieces.
          </p>
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-800 transition-colors min-h-[44px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
};

