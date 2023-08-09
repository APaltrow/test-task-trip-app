/* Service icons */
import closeIcon from '@assets/images/close.svg';
import arrowIcon from '@assets/images/arrowDown.svg';
import nextIcon from '@assets/images/next.svg';
import previousIcon from '@assets/images/previous.svg';

/* Weather icons */
import cloudyIcon from '@assets/images/cloudy.png';
import rainyIcon from '@assets/images/rainy.png';
import partlyCloudyIcon from '@assets/images/sunnyCloudy.png';
import sunnyIcon from '@assets/images/sunny.png';
import snowIcon from '@assets/images/snow.png';
import windIcon from '@assets/images/wind.png';
import fogIcon from '@assets/images/fog.png';

export const WEATHER_ICONS_SET = {
  snow: snowIcon,
  rain: rainyIcon,
  fog: fogIcon,
  wind: windIcon,
  cloudy: cloudyIcon,
  'partly-cloudy-day': partlyCloudyIcon,
  'partly-cloudy-night': partlyCloudyIcon,
  'clear-day': sunnyIcon,
  'clear-night': fogIcon,
};

export const SERVICE_ICONS = {
  close: closeIcon,
  arrowDown: arrowIcon,
  next: nextIcon,
  previous: previousIcon,
};
