import { createSlice } from '@reduxjs/toolkit';

import { WeatherTodayState } from '@redux';

import { fetchWeatherTodayThunk } from './weatherToday.actions';

const initialState: WeatherTodayState = {
  weatherToday: null,

  status: 'IDLE',
  error: '',
};

export const weatherTodaySlice = createSlice({
  name: 'weatherToday',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherTodayThunk.pending, (state) => {
        state.status = 'pending';
        state.error = '';

        state.weatherToday = null;
      })
      .addCase(fetchWeatherTodayThunk.fulfilled, (state, action) => {
        state.weatherToday = action.payload;

        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchWeatherTodayThunk.rejected, (state, action) => {
        state.weatherToday = null;
        state.status = 'error';

        state.error = action.error.message || 'Something went wrong ...';
      });
  },
});
