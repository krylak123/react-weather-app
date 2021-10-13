import { observable, action, makeObservable } from 'mobx';

class WeatherStore {
  constructor() {
    this.weathersList = [];

    makeObservable(this, {
      weathersList: observable,
      addWeather: action,
    });
  }

  addWeather = weather => this.weathersList.push(weather);
}

export default WeatherStore;
