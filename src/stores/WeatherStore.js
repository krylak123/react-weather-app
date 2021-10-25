import { configure, observable, action, makeObservable } from 'mobx';

configure({
  enforceActions: 'never',
});

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?id=';
const API_KEY = '8eaf87abb8fe060c80b95b1392bc6922';

class WeatherStore {
  weathersList = [];

  pickedWeatherID = 0;

  constructor() {
    makeObservable(this, {
      weathersList: observable,
      pickedWeatherID: observable,
      loadDataFromLocalStorage: action,
      showWeather: action,
      addWeather: action,
      setPickedWeatherID: action,
    });
  }

  loadDataFromLocalStorage = () => {
    const state = JSON.parse(localStorage.getItem('WEATHERS_LIST'));

    if (state) {
      state.forEach(item => {
        fetch(`${BASE_URL}${item.id}&appid=${API_KEY}&units=metric`)
          .then(response => {
            if (!response.ok) {
              throw Error(`${response.status} - ${response.statusText}`);
            } else {
              return response.json();
            }
          })
          .then(data => this.weathersList.unshift(data))
          .catch(err => console.log(err));
      });
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
