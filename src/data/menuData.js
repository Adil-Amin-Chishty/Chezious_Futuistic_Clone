// Helper function to generate random price between min and max
const randomPrice = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Helper function to generate random image
const randomImage = (category) => {
  const images = {
    burgers: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500',
      'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500'
    ],
    pizzas: [
      'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500',
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
    ],
    sides: [
      'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500',
      'https://images.unsplash.com/photo-1626082927389-6cd4b1c67f13?w=500',
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500'
    ],
    drinks: [
      'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500',
      'https://images.unsplash.com/photo-1553530666-ba11a90a0864?w=500',
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500'
    ],
    desserts: [
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500',
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500'
    ]
  };

  // If category doesn't exist, return a default image
  if (!images[category]) {
    return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500';
  }

  return images[category][Math.floor(Math.random() * images[category].length)];
};

// Generate 100 burgers
export const burgers = Array.from({ length: 100 }, (_, i) => ({
  id: `BR${String(i + 1).padStart(3, '0')}`,
  name: `Burger ${i + 1}`,
  description: 'Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and our special sauce',
  price: randomPrice(399, 899),
  image: randomImage('burgers'),
  category: 'burgers',
  ingredients: ['Beef patty', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Special sauce', 'Brioche bun'],
  nutrition: {
    calories: randomPrice(500, 800),
    protein: randomPrice(20, 40),
    carbs: randomPrice(30, 60),
    fat: randomPrice(20, 40)
  }
}));

// Generate 100 pizzas
export const pizzas = Array.from({ length: 100 }, (_, i) => ({
  id: `PZ${String(i + 1).padStart(3, '0')}`,
  name: `Pizza ${i + 1}`,
  description: 'Classic pizza with fresh mozzarella, tomatoes, and basil',
  price: randomPrice(699, 1499),
  image: randomImage('pizzas'),
  category: 'pizzas',
  ingredients: ['Pizza dough', 'Fresh mozzarella', 'Tomatoes', 'Basil', 'Olive oil'],
  nutrition: {
    calories: randomPrice(700, 1000),
    protein: randomPrice(25, 35),
    carbs: randomPrice(80, 120),
    fat: randomPrice(30, 50)
  }
}));

// Generate 100 sides
export const sides = Array.from({ length: 100 }, (_, i) => ({
  id: `SD${String(i + 1).padStart(3, '0')}`,
  name: `Side ${i + 1}`,
  description: 'Delicious side dish to complement your meal',
  price: randomPrice(199, 499),
  image: randomImage('sides'),
  category: 'sides',
  ingredients: ['Fresh ingredients', 'Special seasoning'],
  nutrition: {
    calories: randomPrice(200, 500),
    protein: randomPrice(5, 15),
    carbs: randomPrice(20, 50),
    fat: randomPrice(10, 25)
  }
}));

// Generate 100 drinks
export const drinks = Array.from({ length: 100 }, (_, i) => ({
  id: `DR${String(i + 1).padStart(3, '0')}`,
  name: `Drink ${i + 1}`,
  description: 'Refreshing beverage to quench your thirst',
  price: randomPrice(149, 399),
  image: randomImage('drinks'),
  category: 'drinks',
  ingredients: ['Fresh ingredients', 'Natural flavors'],
  nutrition: {
    calories: randomPrice(100, 300),
    protein: randomPrice(0, 5),
    carbs: randomPrice(20, 40),
    fat: randomPrice(0, 5)
  }
}));

// Generate 100 desserts
export const desserts = Array.from({ length: 100 }, (_, i) => ({
  id: `DS${String(i + 1).padStart(3, '0')}`,
  name: `Dessert ${i + 1}`,
  description: 'Sweet treat to end your meal',
  price: randomPrice(299, 699),
  image: randomImage('desserts'),
  category: 'desserts',
  ingredients: ['Fresh ingredients', 'Sweeteners'],
  nutrition: {
    calories: randomPrice(300, 600),
    protein: randomPrice(5, 10),
    carbs: randomPrice(40, 80),
    fat: randomPrice(15, 30)
  }
}));

// Combine all menu items
export const menuItems = [
  ...burgers,
  ...pizzas,
  ...sides,
  ...drinks,
  ...desserts
]; 