# Airbnb Clone

A full-featured Airbnb clone built with React, TypeScript, Redux, and Tailwind CSS.

## Features

### Core Functionality
- **Property Listings**: Browse and view detailed property information
- **Search & Filter**: Search properties by location, dates, and guest count
- **User Authentication**: Login and signup system with demo credentials
- **Booking System**: Complete booking flow with date selection and pricing
- **Property Details**: Detailed property pages with image galleries and amenities
- **User Dashboard**: View bookings and manage account

### Host Features
- **Host Dashboard**: Manage listings, view bookings, and track revenue
- **Property Management**: Add, edit, and manage property listings
- **Booking Management**: View and manage guest bookings
- **Analytics**: Track performance metrics (coming soon)

### UI/UX Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern interface inspired by Airbnb
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Image Galleries**: Property image carousels with navigation
- **Real-time Updates**: Dynamic pricing and availability

## Tech Stack

- **Frontend**: React 19, TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd airbnb-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials
- **Email**: demo@airbnb.com
- **Password**: password

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navbar.tsx      # Navigation bar
│   ├── searchBar.tsx   # Search functionality
│   ├── PropertyCard.tsx # Property listing card
│   └── ...
├── pages/              # Page components
│   ├── landing.tsx     # Home page
│   ├── search.tsx      # Search results
│   ├── PropertyDetail.tsx # Property details
│   ├── Login.tsx       # User login
│   ├── Signup.tsx      # User registration
│   ├── MyBookings.tsx  # User bookings
│   └── HostDashboard.tsx # Host management
├── redux/              # State management
│   ├── store.ts        # Redux store configuration
│   └── slices/         # Redux slices
│       ├── listingsSlice.ts
│       ├── searchSlice.ts
│       └── userSlice.ts
├── data/               # Mock data
│   └── mockData.ts     # Property data
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## Key Features Explained

### 1. Property Search
- Location-based search
- Date range selection
- Guest count filtering
- Real-time search results

### 2. Booking System
- Date validation
- Price calculation
- Guest management
- Booking confirmation

### 3. User Authentication
- Secure login/signup
- Session management
- Protected routes
- User profile management

### 4. Host Dashboard
- Property management
- Booking overview
- Revenue tracking
- Performance metrics

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Future Enhancements

- [ ] Real backend integration
- [ ] Payment processing
- [ ] Advanced search filters
- [ ] Map integration
- [ ] Review and rating system
- [ ] Messaging system
- [ ] Mobile app
- [ ] Multi-language support

## License

This project is for educational purposes only.

## Acknowledgments

- Design inspired by Airbnb
- Icons from various sources
- Images from Unsplash
