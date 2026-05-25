export interface BoxItem {
  name: string;
  description: string;
  icon: string;
}

export interface CulturalExperience {
  title: string;
  description: string;
  icon: string;
}

export interface QRExperience {
  title: string;
  description: string;
  icon: string;
}

export interface CountryData {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  boxItems: BoxItem[];
  culturalExperiences: CulturalExperience[];
  qrExperiences: QRExperience[];
  price: number;
  premiumPrice: number;
  color: string;
  accentColor: string;
}

export const countries: CountryData[] = [
  {
    id: 'morocco',
    name: 'Morocco',
    flag: 'MA',
    tagline: 'A Curated Journey Through Rich Traditions',
    description: 'Discover the magic of Morocco through handcrafted treasures, aromatic spices, and centuries-old artisan techniques passed down through generations.',
    heroImage: '/MOROCCO.png',
    galleryImages: [
      '/gallery/box-morocco-1.jpg',
      '/gallery/box-morocco-2.jpg',
      '/gallery/box-morocco-3.jpg',
      '/gallery/box-morocco-4.jpg',
      '/gallery/box-morocco-5.jpg',
    ],
    boxItems: [
      { name: 'Kaab Ghazal', description: 'Traditional Moroccan almond sweets', icon: 'Cookie' },
      { name: 'Moroccan Tea', description: 'Premium green tea with natural herbs', icon: 'Coffee' },
      { name: 'Amazigh Bracelet', description: 'Handmade bracelet inspired by Amazigh art', icon: 'Gem' },
      { name: 'Story Booklet', description: 'Learn about Morocco\'s history and traditions', icon: 'BookOpen' },
      { name: 'QR Experience', description: 'Unlock videos, recipes, music and more', icon: 'QrCode' },
      { name: 'Discover more', description: 'Explore additional cultural experiences', icon: 'Globe' },
    ],
    culturalExperiences: [
      { title: 'Rich Heritage', description: 'Explore the history, art and traditions.', icon: 'Landmark' },
      { title: 'Authentic Flavors', description: 'Taste the real Morocco.', icon: 'UtensilsCrossed' },
      { title: 'Artisan Crafts', description: 'Support local artisans and handmade beauty.', icon: 'Palette' },
    ],
    qrExperiences: [
      { title: 'Traditional Recipes', description: 'Learn and cook authentic dishes.', icon: 'ChefHat' },
      { title: 'Gnaoua Music', description: 'Listen to traditional Moroccan music.', icon: 'Music' },
      { title: 'Souk Tours', description: 'Explore Moroccan markets virtually.', icon: 'MapPin' },
      { title: 'Artisan Videos', description: 'Meet the artisans and see their craft.', icon: 'Video' },
    ],
    price: 49.99,
    premiumPrice: 79.99,
    color: '#D4A853',
    accentColor: '#2C2F4E',
  },
  {
    id: 'mexico',
    name: 'Mexico',
    flag: 'MX',
    tagline: 'Vibrant Colors, Rich Traditions',
    description: 'Experience the warmth of Mexico with artisan pottery, authentic spices, and the festive spirit of a culture that celebrates life every day.',
    heroImage: '/MEXICO.png',
    galleryImages: [
      '/gallery/box-mexico-1.jpg',
      '/gallery/box-mexico-2.jpg',
      '/gallery/box-mexico-3.jpg',
    ],
    boxItems: [
      { name: 'Talavera Pottery', description: 'Hand-painted ceramic from Puebla', icon: 'Palette' },
      { name: 'Mexican Hot Chocolate', description: 'Traditional chocolate with cinnamon', icon: 'Coffee' },
      { name: 'Embroidered Textile', description: 'Hand-stitched textile art piece', icon: 'Scissors' },
      { name: 'Mezcal Miniature', description: 'Artisanal mezcal tasting bottle', icon: 'Wine' },
      { name: 'Papel Picado', description: 'Decorative paper banner craft', icon: 'Flag' },
    ],
    culturalExperiences: [
      { title: 'Ancient Roots', description: 'Discover Aztec and Mayan heritage.', icon: 'Landmark' },
      { title: 'Festival Spirit', description: 'Experience the joy of Mexican celebrations.', icon: 'PartyPopper' },
      { title: 'Culinary Arts', description: 'From moles to mezcal, taste Mexico.', icon: 'UtensilsCrossed' },
    ],
    qrExperiences: [
      { title: 'Cooking Classes', description: 'Learn to make authentic tacos and salsas.', icon: 'ChefHat' },
      { title: 'Mariachi Music', description: 'Listen to traditional Mexican folk music.', icon: 'Music' },
      { title: 'Market Tours', description: 'Virtual walk through Oaxaca markets.', icon: 'MapPin' },
      { title: 'Artisan Stories', description: 'Meet the makers behind each piece.', icon: 'Video' },
    ],
    price: 49.99,
    premiumPrice: 79.99,
    color: '#E8543A',
    accentColor: '#2C2F4E',
  },
  {
    id: 'peru',
    name: 'Peru',
    flag: 'PE',
    tagline: 'From the Heights of the Andes',
    description: 'Journey through Peru with soft alpaca textiles, ancient superfoods, and artisan crafts inspired by the majestic Andes mountains.',
    heroImage: '/PERU.png',
    galleryImages: [
      '/gallery/box-peru-1.jpg',
      '/gallery/box-peru-2.jpg',
      '/gallery/box-peru-3.jpg',
    ],
    boxItems: [
      { name: 'Alpaca Scarf', description: 'Hand-woven soft alpaca wool scarf', icon: 'Scissors' },
      { name: 'Cusco Ceramic', description: 'Traditional hand-painted ceramic cup', icon: 'Palette' },
      { name: 'Quinoa Grains', description: 'Organic Andean quinoa variety', icon: 'Wheat' },
      { name: 'Maca Powder', description: 'Ancient Peruvian superfood', icon: 'Heart' },
      { name: 'Llama Figurine', description: 'Hand-carved wooden llama keepsake', icon: 'ToyBrick' },
    ],
    culturalExperiences: [
      { title: 'Incan Legacy', description: 'Explore the ancient Incan civilization.', icon: 'Landmark' },
      { title: 'Andean Nature', description: 'Discover the biodiversity of the Andes.', icon: 'Mountain' },
      { title: 'Textile Traditions', description: 'Centuries of weaving knowledge.', icon: 'Palette' },
    ],
    qrExperiences: [
      { title: 'Pisco Recipes', description: 'Learn to make Peru\'s national cocktail.', icon: 'ChefHat' },
      { title: 'Andean Flutes', description: 'Listen to traditional pan flute music.', icon: 'Music' },
      { title: 'Machu Picchu VR', description: 'Virtual tour of the ancient citadel.', icon: 'MapPin' },
      { title: 'Weaver Stories', description: 'Watch Andean textile masters at work.', icon: 'Video' },
    ],
    price: 49.99,
    premiumPrice: 79.99,
    color: '#C75B2A',
    accentColor: '#2C2F4E',
  },
  {
    id: 'china',
    name: 'China',
    flag: 'CN',
    tagline: 'Elegant Oriental Luxury',
    description: 'Uncover the refined beauty of China with Yixing teaware, silk artistry, and the timeless traditions of the Middle Kingdom.',
    heroImage: '/CHINA.png',
    galleryImages: [
      '/gallery/box-china-1.jpg',
      '/gallery/box-china-2.jpg',
      '/gallery/box-china-3.jpg',
    ],
    boxItems: [
      { name: 'Yixing Teapot', description: 'Handcrafted clay teapot for brewing', icon: 'Coffee' },
      { name: 'Silk Pouch', description: 'Embroidered silk drawstring bag', icon: 'Scissors' },
      { name: 'Calligraphy Set', description: 'Traditional brush and ink tools', icon: 'PenTool' },
      { name: 'Pu-erh Tea', description: 'Aged fermented tea cake', icon: 'Leaf' },
      { name: 'Red Envelope', description: 'Decorative hongbao with gold detail', icon: 'Gift' },
    ],
    culturalExperiences: [
      { title: 'Imperial Heritage', description: 'Discover millennia of Chinese civilization.', icon: 'Landmark' },
      { title: 'Tea Ceremony', description: 'The art of Chinese tea preparation.', icon: 'Coffee' },
      { title: 'Silk Road', description: 'Trade routes that shaped world history.', icon: 'Route' },
    ],
    qrExperiences: [
      { title: 'Dim Sum Recipes', description: 'Make authentic Chinese dumplings at home.', icon: 'ChefHat' },
      { title: 'Guqin Music', description: 'Experience ancient Chinese string music.', icon: 'Music' },
      { title: 'Great Wall VR', description: 'Walk along the Great Wall of China.', icon: 'MapPin' },
      { title: 'Master Artisans', description: 'Watch traditional craftspeople at work.', icon: 'Video' },
    ],
    price: 49.99,
    premiumPrice: 79.99,
    color: '#C0392B',
    accentColor: '#2C2F4E',
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: 'IT',
    tagline: 'La Dolce Vita in a Box',
    description: 'Savor the Italian way of life with artisan olive oils, hand-painted ceramics, and the timeless elegance of Renaissance craftsmanship.',
    heroImage: '/ITALY.png',
    galleryImages: [
      '/gallery/box-italy-1.jpg',
      '/gallery/box-italy-2.jpg',
      '/gallery/box-italy-3.jpg',
    ],
    boxItems: [
      { name: 'Olive Oil', description: 'Cold-pressed extra virgin olive oil', icon: 'Droplet' },
      { name: 'Sicilian Plate', description: 'Hand-painted decorative ceramic plate', icon: 'Palette' },
      { name: 'Artisan Pasta', description: 'Traditional dried pasta bundle', icon: 'Wheat' },
      { name: 'Balsamic Vinegar', description: 'Aged Modena balsamic vinegar', icon: 'FlaskConical' },
      { name: 'Leather Journal', description: 'Florentine leather-bound notebook', icon: 'BookOpen' },
    ],
    culturalExperiences: [
      { title: 'Renaissance Art', description: 'The birthplace of Western art.', icon: 'Landmark' },
      { title: 'Cucina Italiana', description: 'Regional cuisine from north to south.', icon: 'UtensilsCrossed' },
      { title: 'Artisan Legacy', description: 'Generations of Italian craftsmanship.', icon: 'Palette' },
    ],
    qrExperiences: [
      { title: 'Pasta Making', description: 'Learn to make fresh pasta from scratch.', icon: 'ChefHat' },
      { title: 'Opera Classics', description: 'Experience Italian opera masterpieces.', icon: 'Music' },
      { title: 'Tuscan Tour', description: 'Virtual journey through Tuscany.', icon: 'MapPin' },
      { title: 'Maestro Stories', description: 'Meet Italian artisans and their crafts.', icon: 'Video' },
    ],
    price: 49.99,
    premiumPrice: 79.99,
    color: '#27AE60',
    accentColor: '#2C2F4E',
  },
];

export const galleryImages = [
  '/gallery/box-morocco-1.jpg',
  '/gallery/box-morocco-2.jpg',
  '/gallery/box-morocco-3.jpg',
  '/gallery/box-mexico-1.jpg',
  '/gallery/box-mexico-2.jpg',
  '/gallery/box-mexico-3.jpg',
  '/gallery/box-peru-1.jpg',
  '/gallery/box-peru-2.jpg',
  '/gallery/box-peru-3.jpg',
  '/gallery/box-china-1.jpg',
  '/gallery/box-china-2.jpg',
  '/gallery/box-china-3.jpg',
];
