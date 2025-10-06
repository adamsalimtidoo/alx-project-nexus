import { createSlice } from '@reduxjs/toolkit';

export interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
  propertyType: string;
  amenities: string[];
}

interface SearchState {
  filters: SearchFilters;
  results: string[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  filters: {
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    priceRange: [0, 1000],
    propertyType: '',
    amenities: [],
  },
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { updateFilters, setResults, setLoading, setError, clearFilters } = searchSlice.actions;
export default searchSlice.reducer;
