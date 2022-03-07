const myProfile = {
  name: 'Moataz Muhammed',
  profile_image: require('../assets/images/photo.jpg'),
  address: 'Maadi,Cairo',
};

const cart = [
  {
    id: 1,
    image: require('../assets/images/5.jpg'),
    sale: '30%',
    title: 'Chair Dacey li - Black',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 50.0,
    originalPrice: 80.99,
    rating: {
      rate: 4.1,
    },
  },
  {
    id: 2,
    image: require('../assets/images/1.jpg'),
    sale: '30%',
    title: 'Chair Patchwork 3GA',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 150.0,
    originalPrice: 180.99,
    rating: {
      rate: 4.9,
    },
  },
];
const bestSelling = [
  {
    id: 1,
    image: require('../assets/images/5.jpg'),
    sale: '30%',
    title: 'Chair Dacey li - Black',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 50.0,
    originalPrice: 80.99,
    rating: {
      rate: 4.1,
    },
  },
  {
    id: 2,
    image: require('../assets/images/1.jpg'),
    sale: '30%',
    title: 'Chair Patchwork 3GA',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 150.0,
    originalPrice: 180.99,
    rating: {
      rate: 4.9,
    },
  },
  {
    id: 3,
    image: require('../assets/images/2.jpg'),
    sale: '30%',
    title: 'Chair Bally 2 SII',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 350.0,
    originalPrice: 300.99,
    rating: {
      rate: 3.5,
    },
  },
  {
    id: 4,
    image: require('../assets/images/3.jpg'),
    sale: '40%',
    title: 'Chair Dacey li - Yello',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 100.0,
    originalPrice: 180.99,
    rating: {
      rate: 3.6,
    },
  },
  {
    id: 5,
    image: require('../assets/images/4.jpg'),
    sale: '50%',
    title: 'Chair Office Dacey lii - Black',
    description:
      'Full sleeves short Chair with three attractive colors and available in various sizes.',
    price: 50.0,
    originalPrice: 100.99,
    rating: {
      rate: 4.8,
    },
  },
];
const category = [
  {
    id: 1,
    name: 'Living Room',
    icon: require('../assets/icons/living-room.png'),
  },
  {
    id: 2,
    name: 'Bathroom',
    icon: require('../assets/icons/bathtub.png'),
  },
  {
    id: 3,
    name: 'Bedroom',
    icon: require('../assets/icons/bedroom.png'),
  },
  {
    id: 4,
    name: 'Workspace',
    icon: require('../assets/icons/workspace.png'),
  },

  {
    id: 5,
    name: 'Dining',
    icon: require('../assets/icons/dining-table.png'),
  },

  {
    id: 6,
    name: 'Outdoor',
    icon: require('../assets/icons/Outdoor.png'),
  },

  {
    id: 7,
    name: 'Kitchen',
    icon: require('../assets/icons/kitchen.png'),
  },

  {
    id: 8,
    name: 'Childrens room',
    icon: require('../assets/icons/childrensRoom.png'),
  },
];

const filterItems = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Latest',
    icon: require('../assets/icons/clock.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Popularity',
    icon: require('../assets/icons/star.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Low to High Prices',
    icon: require('../assets/icons/high-price.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'High to Low Prices',
    icon: require('../assets/icons/low-price.png'),
  },
];

const relatedItems = [
  {
    id: 1,
    image: require('../assets/images/item1.png'),
    title: 'Beautiful Couch',
    description: 'Slakol sleeves short dress with three attractive colors',
    price: 50.0,
  },
  {
    id: 2,
    image: require('../assets/images/item2.png'),
    title: 'Beautiful Couch',
    description: 'Slakol sleeves short dress with three attractive colors',
    price: 60.0,
  },
  {
    id: 3,
    image: require('../assets/images/banner3.jpg'),
    title: 'Beautiful Couch',
    description: 'Slakol sleeves short dress with three attractive colors',
    price: 70.0,
  },
  {
    id: 4,
    image: require('../assets/images/banner1.jpg'),
    title: 'Beautiful Couch',
    description: 'Slakol sleeves short dress with three attractive colors',
    price: 90.0,
  },
];
const more = {
  about_us: 'About Us',
  settings: 'Settings',
  customer_service: 'Customer Service',
};
const myAccount = {
  my_orders: 'My Orders',
  my_details: 'My Details',
  payment_cards: 'Payment Cards',
  sign_out: 'Sign Out',
};
export default {
  myProfile,
  category,
  bestSelling,
  filterItems,
  cart,
  more,
  myAccount,
  relatedItems,
};
