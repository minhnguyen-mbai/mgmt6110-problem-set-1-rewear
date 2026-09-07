import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'rw-01',
    brand: 'Kanso Studio',
    name: 'Relaxed Poplin Office Shirt',
    category: 'Tops',
    size: 'S',
    condition: 'Like New',
    price: 28,
    retailPrice: 95,
    color: 'Crisp Chalk White',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80',
    description: 'Crisp organic cotton poplin tailored for warm Singapore commutes and freezing CBD offices. Features mother-of-pearl buttons and a clean dropped shoulder.',
    qualityCheck: {
      fabricInspection: 'Zero discoloration, zero collar fraying, crisp weave structure intact.',
      conditionNotes: 'Worn only once for a product showcase. Includes spare collar button.',
      hardwareState: 'All original resin-reinforced buttons intact and secure.',
      freshness: 'Eco-laundered and steam sanitized. Ready to wear.'
    }
  },
  {
    id: 'rw-02',
    brand: 'Aveline Atelier',
    name: 'Tiered Linen-Blend Midi Dress',
    category: 'Dresses',
    size: 'M',
    condition: 'Excellent',
    price: 45,
    retailPrice: 168,
    color: 'Oatmeal Beige',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight, breathable linen-tencel blend dress designed for effortless weekend brunch or smart-casual workdays. Hidden side seam pockets included.',
    qualityCheck: {
      fabricInspection: 'No pilling, no pulls along seam lines. Breathable natural drape.',
      conditionNotes: 'Minor natural linen slub texture typical of fabric. Excellent preservation.',
      hardwareState: 'Concealed YKK side zipper tested and slides effortlessly.',
      freshness: 'Professionally dry-cleaned with hypoallergenic detergent.'
    }
  },
  {
    id: 'rw-03',
    brand: 'Meru Label',
    name: 'Tailored Wide-Leg Commute Trousers',
    category: 'Bottoms',
    size: 'S',
    condition: 'Like New',
    price: 36,
    retailPrice: 129,
    color: 'Slate Charcoal',
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=900&q=80',
    description: 'High-waisted tailored trousers with sharp front pleats and fluid drape. Crease-resistant Japanese poly-blend fabric ideal for full office days.',
    qualityCheck: {
      fabricInspection: 'Unblemished fabric face, razor-sharp front pressed pleats.',
      conditionNotes: 'Hem unaltered at standard 30" inseam. Pristine waistband interior.',
      hardwareState: 'Dual tab hook-and-bar clasp and front zipper in factory condition.',
      freshness: 'Steam pressed and sanitized.'
    }
  },
  {
    id: 'rw-04',
    brand: 'Studio Sian',
    name: 'Lightweight Structured Trench Vest',
    category: 'Outerwear',
    size: 'M',
    condition: 'Excellent',
    price: 52,
    retailPrice: 185,
    color: 'Warm Camel',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
    description: 'Sleeveless trench vest tailored for tropical climates. Perfect for layering over tees or blouses for instant corporate meetings without overheating.',
    qualityCheck: {
      fabricInspection: 'Clean twill weave without surface scuffs or thread looseness.',
      conditionNotes: 'Detachable fabric belt included with zero buckle tarnishing.',
      hardwareState: 'Tortoiseshell effect buttons firmly anchored.',
      freshness: 'Eco-laundered and odor-free.'
    }
  },
  {
    id: 'rw-05',
    brand: 'Forme Theory',
    name: 'Minimalist Leather Crescent Bag',
    category: 'Bags',
    size: 'M',
    condition: 'Like New',
    price: 68,
    retailPrice: 220,
    color: 'Deep Espresso',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    description: 'Supple full-grain upcycled leather shoulder bag. Fits a 500ml water bottle, compact umbrella, phone, and cardholder with comfort.',
    qualityCheck: {
      fabricInspection: 'Flawless leather grain with no corner rubs or scratches.',
      conditionNotes: 'Original cotton twill dustbag included. Interior lining spotless.',
      hardwareState: 'Brushed brass zipper glides smoothly without catching.',
      freshness: 'Conditioned with natural beeswax balm before verification.'
    }
  },
  {
    id: 'rw-06',
    brand: 'Nuance Collective',
    name: 'Fine Ribbed Knit Mockneck Top',
    category: 'Tops',
    size: 'XS',
    condition: 'Like New',
    price: 24,
    retailPrice: 79,
    color: 'Muted Olive',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
    description: 'Soft modal-cotton ribbed top with an elegant mock neckline. Holds shape through whole-day wear without stretch fatigue.',
    qualityCheck: {
      fabricInspection: 'Elasticity retains 100% original spring. Zero yarn snagging.',
      conditionNotes: 'Original care tags attached. No seam distortion.',
      hardwareState: 'No hardware needed (pull-over styling).',
      freshness: 'Freshly laundered and vacuum-sealed inspection.'
    }
  },
  {
    id: 'rw-07',
    brand: 'Koto Minimal',
    name: 'Pleated A-Line Midi Wrap Skirt',
    category: 'Bottoms',
    size: 'L',
    condition: 'Gently Used',
    price: 32,
    retailPrice: 110,
    color: 'Navy Blue',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
    description: 'Flowing pleated midi skirt with subtle wrap front and interior anchor button. Pairs seamlessly with loafers or sneakers for hybrid working.',
    qualityCheck: {
      fabricInspection: 'Micro-pleats hold sharp defined accordion shape.',
      conditionNotes: 'Very faint microscopic rub near hemline, virtually invisible when worn.',
      hardwareState: 'Anchor button and side tie verified secure.',
      freshness: 'Professionally steam sanitized.'
    }
  },
  {
    id: 'rw-08',
    brand: 'Vane & Co.',
    name: 'Structured Cotton Twill Overshirt',
    category: 'Outerwear',
    size: 'L',
    condition: 'Excellent',
    price: 42,
    retailPrice: 145,
    color: 'Sage Moss',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=80',
    description: 'Heavyweight organic cotton overshirt with twin chest patch pockets. Serves as light air-conditioning layer in Singapore office buildings.',
    qualityCheck: {
      fabricInspection: 'Sturdy 280gsm cotton twill with intact structural collar points.',
      conditionNotes: 'Gentle vintage wash patina intended by the original garment wash.',
      hardwareState: 'Reinforced matte black metal snap buttons all snap firmly.',
      freshness: 'Eco-laundered and steam-treated.'
    }
  },
  {
    id: 'rw-09',
    brand: 'Breeze & Thread',
    name: 'Breezy Linen Boatneck Slip Dress',
    category: 'Dresses',
    size: 'S',
    condition: 'Like New',
    price: 39,
    retailPrice: 139,
    color: 'Terracotta Clay',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
    description: 'Relaxed minimalist slip dress crafted in medium-weight French linen. Flattering boat neckline and modest side vent for easy MRT walking strides.',
    qualityCheck: {
      fabricInspection: 'Rich saturated garment dye with zero color fading or wash wear.',
      conditionNotes: 'Practically untouched condition. No alterations.',
      hardwareState: 'Discrete side zipper in pristine functional order.',
      freshness: 'Sanitized with gentle organic botanical rinse.'
    }
  },
  {
    id: 'rw-10',
    brand: 'Tessera Tailoring',
    name: 'Single-Breasted Tropical Wool Blazer',
    category: 'Outerwear',
    size: 'M',
    condition: 'Excellent',
    price: 78,
    retailPrice: 260,
    color: 'Deep Midnight Navy',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
    description: 'Ultra-light tropical high-twist wool blazer with half-canvas construction and unlined back for maximum thermal comfort in humid climates.',
    qualityCheck: {
      fabricInspection: 'Tropical wool is crease-resilient, no shine on elbows or lapels.',
      conditionNotes: 'Exterior pockets remain factory-tacked shut.',
      hardwareState: 'Real horn buttons intact with original cross-stitching.',
      freshness: 'Specialist dry-cleaned and shaped with tailor press.'
    }
  },
  {
    id: 'rw-11',
    brand: 'Lumière Daily',
    name: 'Silk-Blend Flutter Sleeve Blouse',
    category: 'Tops',
    size: 'XL',
    condition: 'Gently Used',
    price: 29,
    retailPrice: 115,
    color: 'Ivory Cream',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=900&q=80',
    description: 'Flowy silk-viscose blend blouse with subtle cap flutter sleeves. Drapes effortlessly into high-waisted work pants or denim.',
    qualityCheck: {
      fabricInspection: 'Silky smooth handfeel with no water spots or underarm stains.',
      conditionNotes: 'Minor natural drape wave at hem. In truly wonderful condition.',
      hardwareState: 'Single rear keyhole loop button securely attached.',
      freshness: 'Eco-laundered with silk-safe gentle detergent.'
    }
  },
  {
    id: 'rw-12',
    brand: 'Arbor Essentials',
    name: 'Everyday Canvas & Leather Commuter Tote',
    category: 'Bags',
    size: 'L',
    condition: 'Excellent',
    price: 38,
    retailPrice: 135,
    color: 'Sand / Chestnut',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    description: 'Sturdy 16oz waxed cotton canvas tote reinforced with vegetable-tanned leather shoulder handles. Fits a 14-inch MacBook and daily essentials.',
    qualityCheck: {
      fabricInspection: 'Heavy-duty canvas with clean corners and no ink or coffee marks.',
      conditionNotes: 'Vegetable-tanned leather straps show rich, clean honey patina.',
      hardwareState: 'Magnetic top snap closure snaps securely; inner pocket zip is smooth.',
      freshness: 'Treated and deodorized canvas interior.'
    }
  },
  {
    id: 'rw-13',
    brand: 'Atelier Sol',
    name: 'Pleated Linen Tiered Sundress',
    category: 'Dresses',
    size: 'L',
    condition: 'Like New',
    price: 48,
    retailPrice: 175,
    color: 'Sage Mist',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    description: 'Tiered pure European flax sundress with flattering square neckline and concealed pockets. Light, breezy, and graceful for Singapore heat.',
    qualityCheck: {
      fabricInspection: 'Pristine linen weave with no fabric thinning or pulling.',
      conditionNotes: 'Spare matching thread pouch attached.',
      hardwareState: 'Concealed side zipper works seamlessly.',
      freshness: 'Steam-sanitized and ready to wear.'
    }
  },
  {
    id: 'rw-14',
    brand: 'Kanso Studio',
    name: 'Tapered Pleated Linen Chinos',
    category: 'Bottoms',
    size: 'M',
    condition: 'Excellent',
    price: 34,
    retailPrice: 120,
    color: 'Warm Ecru',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    description: 'Relaxed-tapered lightweight trousers cut from Belgian linen-cotton twill. Elasticated back waistband for comfort during long commute days.',
    qualityCheck: {
      fabricInspection: 'Clean seams and intact waistband stretch elasticity.',
      conditionNotes: 'No cuff wear or pocket corner strain.',
      hardwareState: 'Natural horn button and YKK brass zipper verified.',
      freshness: 'Freshly laundered and steam-pressed.'
    }
  },
  {
    id: 'rw-15',
    brand: 'Nuance Collective',
    name: 'Boxy Cropped Linen Blend Tee',
    category: 'Tops',
    size: 'M',
    condition: 'Like New',
    price: 26,
    retailPrice: 85,
    color: 'Clay Brown',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Minimalist boxy tee with slightly dropped shoulders and reinforced crew neckline. Pairs with high-waisted shorts or tailored skirts.',
    qualityCheck: {
      fabricInspection: 'Zero neckline baconing or torquing; smooth drape.',
      conditionNotes: 'Immaculate condition, unworn after display styling.',
      hardwareState: 'No hardware needed.',
      freshness: 'Eco-laundered with organic detergent.'
    }
  },
  {
    id: 'rw-16',
    brand: 'Breeze & Thread',
    name: 'Minimalist Poplin Shirt Dress',
    category: 'Dresses',
    size: 'XS',
    condition: 'Excellent',
    price: 42,
    retailPrice: 155,
    color: 'French Navy',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    description: 'A-line cotton poplin shirt dress with covered placket and minimal mandarin collar. Polished enough for office meetings and easy for weekend strolls.',
    qualityCheck: {
      fabricInspection: 'Vibrant navy colorfastness with zero wash fading.',
      conditionNotes: 'All interior bias binding neat and intact.',
      hardwareState: 'All covered tonal buttons present and tight.',
      freshness: 'Steam-sanitized and allergen-free.'
    }
  }
];
