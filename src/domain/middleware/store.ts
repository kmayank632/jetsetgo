import {configureStore} from '@reduxjs/toolkit';
import FlightReducer from './FlightSlice';
export const store = configureStore({
  reducer: {
    FLIGHTS: FlightReducer,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
