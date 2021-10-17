import { observable, action, makeObservable } from 'mobx';

class WeatherStore {
  weathersList = [];

  pickedWeatherID = 0;

  constructor() {
    makeObservable(this, {
      weathersList: observable,
      pickedWeatherID: observable,
      showWeather: action,
      addWeather: action,
      setPickedWeatherID: action,
    });
  }

  showWeather = id => this.weathersList.find(item => item.id === id);

  addWeather = weather => this.weathersList.unshift(weather);

  setPickedWeatherID = id => {
    this.pickedWeatherID = id;
  };
}

export default WeatherStore;
