import {FLIGHTS} from '../constant';
import {ApiResponse} from '../model/TripsIModel';
import {fetchFlights} from './api';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the state type
export interface FlightState {
  data: ApiResponse | null;
  isLoader: boolean;
  isError: boolean;
}

// Define the initial state
const initialState: FlightState = {
  data: null,
  isLoader: false,
  isError: false,
};

const FlightSlice = createSlice({
  name: FLIGHTS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFlights.pending, (state: FlightState) => {
      state.isLoader = true;
      state.isError = false;
    });
    builder.addCase(
      fetchFlights.fulfilled,
      (state: FlightState, action: PayloadAction<ApiResponse>) => {
        state.isLoader = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchFlights.rejected, (state: FlightState) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default FlightSlice.reducer;
