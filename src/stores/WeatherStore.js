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
      loadDataFromLocalStorage: action,
    });
  }

  loadDataFromLocalStorage = () => {
    const state = JSON.parse(localStorage.getItem('WEATHERS_LIST'));

    if (state) {
      this.weathersList = state;
    }
  };

  showWeather = id => this.weathersList.find(item => item.id === id);

  addWeather = weather => {
    this.weathersList.unshift(weather);

    localStorage.setItem('WEATHERS_LIST', JSON.stringify(this.weathersList));
  };

  setPickedWeatherID = id => {
    this.pickedWeatherID = id;
  };
}

export default WeatherStore;
