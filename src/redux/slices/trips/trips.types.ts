import { ITrip } from '@types';

export interface TripsState {
  trips: ITrip[];
  filteredTrips: ITrip[];
  searchValue: string;
  activeTrip: number;
  sortOrder: 'asc' | 'desc';
}
