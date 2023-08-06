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

    {
      startDate: '2023-08-08',
      endDate: '2023-08-09',
      city: 'Barcelona',
      id: 2,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-09',
      endDate: '2023-08-10',
      city: 'Milan',
      id: 3,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-10',
      endDate: '2023-08-11',
      city: 'Prague',
      id: 4,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    /**
    {
      startDate: '2023-08-11',
      endDate: '2023-08-12',
      city: 'Paris',
      id: 5,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-12',
      endDate: '2023-08-26',
      city: 'London',
      id: 6,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
     */
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
      /* By default trips are sorted as ASCENDING  */
      /* and resorted  as ASCENDING  after adding a new trip : need to resort in case the sort order is DESCENDING */

      if (state.sortOrder === 'desc') {
        state.trips = [...action.payload.reverse()];
        return;
      }

      state.trips = action.payload;
    },
    setActiveTrip: (state, action: PayloadAction<number>) => {
      state.activeTrip = action.payload;

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
      state.trips = [...state.trips.reverse()];
    },
  },
});

export const { setTrips, setActiveTrip, setSearchVale, setSortOrder } =
  tripsSlice.actions;
