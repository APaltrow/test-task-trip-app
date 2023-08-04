export interface IWeatherToday {
  city: string;
  temp: number;
  icon: string;
  datetime: string;
}

export interface WeatherTodayState {
  weatherToday: IWeatherToday | null;

  status: 'pending' | 'success' | 'error' | 'IDLE';
  error: string;
}
