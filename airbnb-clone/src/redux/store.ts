import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './slices/listingsSlice';
import searchReducer from './slices/searchSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
