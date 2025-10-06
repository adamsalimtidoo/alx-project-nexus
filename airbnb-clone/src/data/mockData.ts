import type { Property } from '../redux/slices/listingsSlice';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Cozy Apartment in Downtown Nashville',
    location: 'Nashville, TN',
    price: 120,
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80'
    ],
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      isSuperhost: true,
    },
    amenities: ['WiFi', 'Kitchen', 'Parking', 'Pool', 'Gym'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    description: 'Beautiful modern apartment in the heart of Nashville with stunning city views.',
    coordinates: { lat: 36.1627, lng: -86.7816 }
  },
  {
    id: '2',
    title: 'Lakeside Cabin with Private Beach',
    location: 'South Haven, MI',
    price: 200,
    rating: 4.9,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1506905925346-14b1e0d0b6e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    host: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      isSuperhost: false,
    },
    amenities: ['WiFi', 'Kitchen', 'Fireplace', 'Lake Access', 'BBQ Grill'],
    propertyType: 'Cabin',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Charming lakeside cabin perfect for a peaceful getaway with family and friends.',
    coordinates: { lat: 42.4036, lng: -86.2726 }
  },
  {
    id: '3',
    title: 'Modern Loft in Arts District',
    location: 'Stanton, CA',
    price: 180,
    rating: 4.7,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    ],
    host: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      isSuperhost: true,
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Balcony', 'Air Conditioning'],
    propertyType: 'Loft',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Stylish loft in the vibrant arts district with exposed brick and modern amenities.',
    coordinates: { lat: 33.8121, lng: -117.9990 }
  },
  {
    id: '4',
    title: 'Beach House with Ocean Views',
    location: 'New Buffalo, MI',
    price: 250,
    rating: 4.9,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    host: {
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      isSuperhost: true,
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Hot Tub', 'Deck'],
    propertyType: 'House',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    description: 'Stunning beach house with panoramic ocean views and direct beach access.',
    coordinates: { lat: 41.7931, lng: -86.7439 }
  }
];
