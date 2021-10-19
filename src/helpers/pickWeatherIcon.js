import ClearSkyIcon from '../images/Clear.png';
import FewCloudsIcon from '../images/LightCloud.png';
import ScatteredBrokenCloudsIcon from '../images/HeavyCloud.png';
import ShowerRainIcon from '../images/Shower.png';
import RainIcon from '../images/LightRain.png';
import ThunderstormIcon from '../images/Thunderstorm.png';
import SnowIcon from '../images/Snow.png';
import MistIcon from '../images/mist.png';

const description = {
  CLEAR_SKY: 'clear sky',
  FEW_CLOUDS: 'few clouds',
  SCATTERED_CLOUDS: 'scattered clouds',
  BROKEN_CLOUDS: 'broken clouds',
  SHOWER_RAIN: 'shower rain',
  RAIN: 'rain',
  THUNDERSTORM: 'thunderstorm',
  SNOW: 'snow',
  MIST: 'mist',
};

const pickWeatherIcon = desc => {
  let pickedIcon;

  if (desc === description.CLEAR_SKY) {
    pickedIcon = ClearSkyIcon;
  } else if (desc === description.FEW_CLOUDS) {
    pickedIcon = FewCloudsIcon;
  } else if (
    desc === description.SCATTERED_CLOUDS ||
    desc === description.BROKEN_CLOUDS
  ) {
    pickedIcon = ScatteredBrokenCloudsIcon;
  } else if (desc === description.SHOWER_RAIN) {
    pickedIcon = ShowerRainIcon;
  } else if (desc === description.RAIN) {
    pickedIcon = RainIcon;
  } else if (desc === description.THUNDERSTORM) {
    pickedIcon = ThunderstormIcon;
  } else if (desc === description.SNOW) {
    pickedIcon = SnowIcon;
  } else if (desc === description.MIST) {
    pickedIcon = MistIcon;
  } else pickedIcon = ClearSkyIcon;

  return pickedIcon;
};

export default pickWeatherIcon;
