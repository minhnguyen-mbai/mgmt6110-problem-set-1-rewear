import React, { useState, useMemo, useRef } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Product, Screen } from './types';
import { Header } from './components/Header';
import { DiscoverScreen } from './components/DiscoverScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { SavedBagScreen } from './components/SavedBagScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('discover');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // Pure front-end in-memory state only (no localStorage, database, or backend)
  const [savedProductIds, setSavedProductIds] = useState<Set<string>>(
    () => new Set(['rw-01', 'rw-03'])
  );

  // Small confirmation notification state
  const [confirmationMessage, setConfirmationMessage] = useState<{
    text: string;
    isSave: boolean;
  } | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showConfirmation = (text: string, isSave: boolean = true) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setConfirmationMessage({ text, isSave });
    toastTimeoutRef.current = setTimeout(() => {
      setConfirmationMessage(null);
    }, 3500);
  };

  // Handle saving/unsaving a product
  const handleToggleSave = (eOrProduct: React.MouseEvent | Product, maybeProduct?: Product) => {
    const product = maybeProduct || (eOrProduct as Product);
    if ('stopPropagation' in eOrProduct) {
      eOrProduct.stopPropagation();
    }

    setSavedProductIds((prev) => {
      const next = new Set(prev);
      const isAlreadySaved = next.has(product.id);
      if (isAlreadySaved) {
        next.delete(product.id);
        showConfirmation(`Removed "${product.name}" from your bag.`, false);
      } else {
        next.add(product.id);
        showConfirmation(`Saved "${product.name}" to your bag!`, true);
      }
      return next;
    });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDiscover = () => {
    setCurrentScreen('discover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToBag = () => {
    setCurrentScreen('bag');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemoveFromBag = (productId: string) => {
    const removedProduct = PRODUCTS.find((p) => p.id === productId);
    setSavedProductIds((prev) => {
      const next = new Set(prev);
      next.delete(productId);
      return next;
    });
    if (removedProduct) {
      showConfirmation(`Removed "${removedProduct.name}" from your bag.`, false);
    }
  };

  const handleClearBag = () => {
    setSavedProductIds(new Set());
    showConfirmation('Your saved bag has been cleared.', false);
  };

  // Derive saved products list in real-time from front-end state
  const savedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => savedProductIds.has(p.id));
  }, [savedProductIds]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-slate-200">
      {/* Universal Header across the 3 screens */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedProductIds.size}
      />

      {/* Screen 1: Discover */}
      {currentScreen === 'discover' && (
        <main className="flex-1 pb-16">
          <DiscoverScreen
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            savedProductIds={savedProductIds}
            onToggleSave={handleToggleSave}
          />
        </main>
      )}

      {/* Screen 2: Product Detail */}
      {currentScreen === 'detail' && selectedProduct && (
        <main className="flex-1 pb-16">
          <ProductDetailScreen
            product={selectedProduct}
            onBack={handleBackToDiscover}
            onNavigateToBag={handleNavigateToBag}
            isSaved={savedProductIds.has(selectedProduct.id)}
            onToggleSave={(prod) => handleToggleSave(prod)}
          />
        </main>
      )}

      {/* Screen 3: Saved Bag */}
      {currentScreen === 'bag' && (
        <main className="flex-1 pb-16">
          <SavedBagScreen
            savedProducts={savedProducts}
            onBackToDiscover={handleBackToDiscover}
            onSelectProduct={handleSelectProduct}
            onRemoveFromBag={handleRemoveFromBag}
            onClearBag={handleClearBag}
          />
        </main>
      )}

      {/* Minimal Footer */}
      <footer className="mt-auto border-t border-slate-100 bg-white py-6 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-bold uppercase tracking-widest text-slate-400 text-[10px]">
            REWEAR • SINGAPORE
          </p>
        </div>
      </footer>

      {/* Small Toast Confirmation Message */}
      {confirmationMessage && (
        <div
          id="bag-confirmation-toast"
          role="status"
          aria-live="polite"
          className="fixed bottom-5 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 max-w-sm sm:max-w-md z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-800 flex items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <CheckCircle2
              className={`w-4 h-4 shrink-0 ${
                confirmationMessage.isSave ? 'text-emerald-400' : 'text-slate-400'
              }`}
            />
            <span className="font-medium truncate text-slate-100">
              {confirmationMessage.text}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentScreen !== 'bag' && (
              <button
                id="toast-open-bag-btn"
                onClick={() => {
                  handleNavigateToBag();
                  setConfirmationMessage(null);
                }}
                className="font-bold text-indigo-300 hover:text-white underline underline-offset-2 uppercase text-[10px] tracking-wider transition-colors"
              >
                View Bag →
              </button>
            )}
            <button
              id="toast-close-btn"
              onClick={() => setConfirmationMessage(null)}
              aria-label="Dismiss notification"
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

