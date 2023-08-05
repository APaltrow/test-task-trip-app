import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchForecast } from '@api';
import { ForecastParams, DayForecast } from '@types';

export const fetchForecastThunk = createAsyncThunk<
  DayForecast[],
  ForecastParams
>('forecast/fetchForecastThunk', fetchForecast);
