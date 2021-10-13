import WeatherStore from './WeatherStore';

class RootStore {
  constructor() {
    this.weatherStore = new WeatherStore();
  }
}

export default RootStore;
