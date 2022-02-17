const myProfile = {
  name: 'Moataz Muhammed',
  profile_image: require('../assets/images/photo.jpg'),
  address: 'Maadi,Cairo',
};

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

export default {
  myProfile,
  category,
};
