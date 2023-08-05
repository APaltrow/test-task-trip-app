import { createSlice } from '@reduxjs/toolkit';

import { ForecastState } from '@redux';

import { fetchForecastThunk } from './forecast.actions';

const initialState: ForecastState = {
  forecast: [],

  status: 'IDLE',
  error: '',
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecastThunk.pending, (state) => {
        state.status = 'pending';
        state.error = '';

        state.forecast = [];
      })
      .addCase(fetchForecastThunk.fulfilled, (state, action) => {
        state.forecast = action.payload;

        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchForecastThunk.rejected, (state, action) => {
        state.forecast = [];
        state.status = 'error';

        state.error = action.error.message || 'Something went wrong ...';
      });
  },
});
