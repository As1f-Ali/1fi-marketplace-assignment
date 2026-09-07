export default [
  {
    id: 'p1',
    brand: 'Apple',
    name: 'iPhone 17 Pro',
    image: require('../../assets/images/iphone17pro.webp'),
    variants: [
      { id: 'v1', label: '2026 · 256 GB', sublabel: 'iPhone 17 Pro 256 GB', price: 125900 },
      { id: 'v2', label: '2026 · 512 GB', sublabel: 'iPhone 17 Pro 512 GB', price: 134900 },
    ],
  },
  {
    id: 'p2',
    brand: 'Apple',
    name: 'MacBook Air M3',
    image: require('../../assets/images/macbookairm3.webp'),
    variants: [
      { id: 'v1', label: '8GB / 256GB', sublabel: 'MacBook Air M3 - Midnight', price: 114900 },
      { id: 'v2', label: '16GB / 512GB', sublabel: 'MacBook Air M3 - Starlight', price: 139900 },
    ],
  },
  {
    id: 'p3',
    brand: 'Samsung',
    name: 'Galaxy S25 Ultra',
    image: require('../../assets/images/galaxys25ultra.webp'),
    variants: [
      { id: 'v1', label: '12GB / 256GB', sublabel: 'Galaxy S25 Ultra - Titanium Black', price: 129999 },
    ],
  },
  {
    id: 'p4',
    brand: 'OnePlus',
    name: 'OnePlus 13',
    image: require('../../assets/images/oneplus13.webp'),
    variants: [
      { id: 'v1', label: '12GB / 256GB', sublabel: 'OnePlus 13 - Midnight Ocean', price: 69999 },
    ],
  },
];