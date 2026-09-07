export type ProductCategory = 'All' | 'Tops' | 'Dresses' | 'Bottoms' | 'Outerwear' | 'Bags';
export type ProductSize = 'All' | 'XS' | 'S' | 'M' | 'L' | 'XL';
export type BudgetFilter = 'All' | 'under30' | 'under50' | 'under75' | 'under100';

export interface QualityCheckInfo {
  fabricInspection: string;
  conditionNotes: string;
  hardwareState: string;
  freshness: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: 'Tops' | 'Dresses' | 'Bottoms' | 'Outerwear' | 'Bags';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  condition: 'Like New' | 'Excellent' | 'Gently Used';
  price: number; // in SGD
  retailPrice: number; // in SGD
  image: string;
  description: string;
  color: string;
  qualityCheck: QualityCheckInfo;
}

export type Screen = 'discover' | 'detail' | 'bag';
