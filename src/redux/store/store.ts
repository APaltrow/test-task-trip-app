import { configureStore } from '@reduxjs/toolkit';

import { forecastSlice, tripsSlice, weatherTodaySlice } from '../slices';

export const store = configureStore({
  reducer: {
    trips: tripsSlice.reducer,
    weatherToday: weatherTodaySlice.reducer,
    forecast: forecastSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
