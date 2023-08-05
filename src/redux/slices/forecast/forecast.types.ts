import { DayForecast } from '@types';

export interface ForecastState {
  forecast: DayForecast[];

  status: 'pending' | 'success' | 'error' | 'IDLE';
  error: string;
}
