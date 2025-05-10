// src/data/menuItems.js
export const menuItems = [
    {
      id: 1,
      name: "Cosmic Burger",
      description: "A stellar beef patty with cosmic cheese, served in a nebula bun",
      price: 599,
      category: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      isSpicy: false,
      isVegetarian: false,
      isPopular: true
    },
    {
      id: 2,
      name: "Galaxy Pizza",
      description: "A universe of flavors with star-shaped pepperoni and meteorite cheese",
      price: 1299,
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      isSpicy: false,
      isVegetarian: false,
      isPopular: true
    },
    {
      id: 3,
      name: "Nebula Fries",
      description: "Crispy space potatoes with cosmic seasoning",
      price: 299,
      category: "Sides",
      image: "https://images.unsplash.com/photo-1630384060427-3e33ddb4d2b8?w=800&auto=format&fit=crop&q=60",
      isSpicy: false,
      isVegetarian: true,
      isPopular: false
    },
    {
      id: 4,
      name: "Stellar Wings",
      description: "Intergalactic chicken wings with meteor sauce",
      price: 899,
      category: "Wings",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=60",
      isSpicy: true,
      isVegetarian: false,
      isPopular: true
    },
    {
      id: 5,
      name: "Cosmic Shake",
      description: "A milky way of flavors in a cosmic cup",
      price: 399,
      category: "Drinks",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=60",
      isSpicy: false,
      isVegetarian: true,
      isPopular: false
    },
    {
      id: 6,
      name: "Space Salad",
      description: "Fresh greens from the cosmic garden",
      price: 499,
      category: "Salads",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
      isSpicy: false,
      isVegetarian: true,
      isPopular: false
    },
    {
      id: 7,
      name: "Euro",
      category: "Somewhat Sooper",
      price: 1250,
      description: "European style pizza with special toppings",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      ingredients: "Chicken, mushrooms, olives, cheese, special sauce"
    },
    {
      id: 8,
      name: "Black Pepper Tikka",
      category: "Somewhat Sooper",
      price: 1250,
      description: "Chicken tikka with extra black pepper seasoning",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      isNew: true,
      ingredients: "Chicken tikka, black pepper, onions, cheese"
    },
    {
      id: 9,
      name: "Chicken Supreme",
      category: "Somewhat Sooper",
      price: 1250,
      description: "Loaded with premium chicken and vegetables",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      ingredients: "Premium chicken cuts, bell peppers, onions, olives, cheese"
    },
    {
      id: 10,
      name: "Chicken Mushroom",
      category: "Somewhat Sooper",
      price: 1250,
      description: "Chicken with fresh mushrooms and cheese",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      ingredients: "Chicken, fresh mushrooms, onions, cheese"
    },
    {
      id: 11,
      name: "Cheezious Special",
      category: "Cheezy Treats",
      price: 1450,
      description: "Our signature pizza with secret recipe",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
      isPopular: true,
      ingredients: "Secret recipe ingredients, extra cheese, special sauce"
    },
    {
      id: 12,
      name: "Bihari Kebab",
      category: "Cheezy Treats",
      price: 1450,
      description: "Traditional bihari kebab with cheese",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
      ingredients: "Bihari kebab, onions, green chilies, cheese"
    }
  ];
  
  export const categories = [
    { id: "all", name: "All" },
    { id: "somewhat-local", name: "Somewhat Local" },
    { id: "somewhat-sooper", name: "Somewhat Sooper" },
    { id: "cheezy-treats", name: "Cheezy Treats" }
  ];
  
  export const featuredItems = menuItems.filter(item => item.isPopular || item.isNew).slice(0, 6);