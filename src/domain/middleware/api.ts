import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiResponse} from '../model/TripsIModel';

export const fetchFlights = createAsyncThunk<ApiResponse>(
  'fetchFlights',
  async () => {
    const res = await fetch('https://api.npoint.io/4829d4ab0e96bfab50e7');
    const final = await res.json();
    return final as ApiResponse;
  },
);
