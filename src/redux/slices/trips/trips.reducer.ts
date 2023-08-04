import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITrip } from '@types';

import { TripsState } from '@redux';

const initialState: TripsState = {
  trips: [
    {
      startDate: '2023-08-01',
      endDate: '2023-08-11',
      city: 'Berlin',
      id: 1,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-02',
      endDate: '2023-08-12',
      city: 'Barcelona',
      id: 2,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-03',
      endDate: '2023-08-13',
      city: 'Milan',
      id: 3,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-04',
      endDate: '2023-08-14',
      city: 'Prague',
      id: 4,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-05',
      endDate: '2023-08-15',
      city: 'Paris',
      id: 5,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
    {
      startDate: '2023-08-06',
      endDate: '2023-08-16',
      city: 'London',
      id: 6,
      imgURL:
        'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',
    },
  ],
  searchValue: '',
  filteredTrips: [],
  activeTrip: 0,
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addNewTrip: (state, action: PayloadAction<ITrip[]>) => {
      state.trips = action.payload;
    },
    setActiveTrip: (state, action: PayloadAction<number>) => {
      state.activeTrip = action.payload;
    },
    setSearchVale: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;

      if (!action.payload) {
        state.filteredTrips = [];
        return;
      }

      state.filteredTrips = state.trips.filter((trip) =>
        trip.city.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
});

export const { addNewTrip, setActiveTrip, setSearchVale } = tripsSlice.actions;
