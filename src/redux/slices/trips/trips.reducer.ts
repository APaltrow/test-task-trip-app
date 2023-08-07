import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITrip } from '@types';

import { TripsState } from '@redux';

const initialState: TripsState = {
  trips: [
    {
      startDate: '2023-08-07',
      endDate: '2023-08-08',
      city: 'Berlin',
      id: 1,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
  ],
  filteredTrips: [],
  searchValue: '',
  sortOrder: 'asc',
  activeTrip: 1,
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTrips: (state, action: PayloadAction<ITrip[]>) => {
      state.trips = action.payload;
    },
    setActiveTrip: (state, action: PayloadAction<number>) => {
      state.activeTrip = action.payload; // active trip ID

      if (state.searchValue) {
        state.searchValue = '';
        state.filteredTrips = [];
      }
    },
    setSearchVale: (state, action: PayloadAction<string>) => {
      const userInput = action.payload;

      state.searchValue = userInput;

      if (!userInput) {
        state.filteredTrips = [];
        return;
      }

      state.filteredTrips = state.trips.filter((trip) =>
        trip.city.toLowerCase().includes(userInput.toLowerCase()),
      );
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setTrips, setActiveTrip, setSearchVale, setSortOrder } =
  tripsSlice.actions;
