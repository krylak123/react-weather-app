import GeneralStore from './GeneralStore';
import WeatherStore from './WeatherStore';

class RootStore {
  constructor() {
    this.generalStore = new GeneralStore();
    this.weatherStore = new WeatherStore();
  }
}

export default RootStore;
