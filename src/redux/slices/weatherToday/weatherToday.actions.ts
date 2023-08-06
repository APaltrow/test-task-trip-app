import { createAsyncThunk } from '@reduxjs/toolkit';

import { IWeatherToday } from '@redux';

import { fetchWeatherToday } from '@api';

export const fetchWeatherTodayThunk = createAsyncThunk<IWeatherToday, string>(
  'weatherToday/fetchWeatherTodayThunk',
  fetchWeatherToday,
);
