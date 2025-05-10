// Helper function to generate random price between min and max
const randomPrice = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Generate 20 deals
export const dealsData = Array.from({ length: 20 }, (_, i) => ({
  id: `DL${String(i + 1).padStart(3, '0')}`,
  title: `Special Deal ${i + 1}`,
  description: 'Get amazing savings on our most popular items',
  price: randomPrice(499, 1499),
  originalPrice: randomPrice(699, 1999),
  image: `https://images.unsplash.com/photo-${1555396273 + i}-367ea4eb4db5?w=500`,
  validity: '2024-12-31',
  category: ['burgers', 'pizzas', 'sides', 'drinks', 'desserts'][Math.floor(Math.random() * 5)]
})); 