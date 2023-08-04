import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchWeatherToday } from '@api';

import { IWeatherToday } from '@redux';

export const fetchWeatherTodayThunk = createAsyncThunk<IWeatherToday, string>(
  'weatherToday/fetchWeatherTodayThunk',
  fetchWeatherToday,
);
