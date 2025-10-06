import { createSlice } from '@reduxjs/toolkit';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
  };
  amenities: string[];
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface ListingsState {
  properties: Property[];
  loading: boolean;
  error: string | null;
  selectedProperty: Property | null;
}

const initialState: ListingsState = {
  properties: [],
  loading: false,
  error: null,
  selectedProperty: null,
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
  },
});

export const { setProperties, setLoading, setError, setSelectedProperty } = listingsSlice.actions;
export default listingsSlice.reducer;
