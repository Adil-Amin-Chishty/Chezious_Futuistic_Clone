// Generate 20 locations
export const locationsData = Array.from({ length: 20 }, (_, i) => ({
  id: `LC${String(i + 1).padStart(3, '0')}`,
  name: `Cheezious Branch ${i + 1}`,
  address: `123 Main Street, City ${i + 1}, Pakistan`,
  phone: `+92 ${300 + i} ${1000000 + i}`,
  operatingHours: '10:00 AM - 10:00 PM',
  coordinates: {
    lat: 24.8607 + (i * 0.01),
    lng: 67.0011 + (i * 0.01)
  },
  image: `https://images.unsplash.com/photo-${1555396273 + i}-367ea4eb4db5?w=500`
})); 