import React from 'react';
import { observer } from 'mobx-react-lite';

import { useWeatherStore } from '../../stores/hooks';

import pickWeatherIcon from '../../helpers/pickWeatherIcon';

import LocationIcon from '../../images/location_on_white_24dp.svg';

const Main = () => {
  const { showWeather, pickedWeatherID } = useWeatherStore();

  const pickedWeather = showWeather(pickedWeatherID);

  let icon = '';
  let temp = 0;
  let description = '';
  let date = '';
  let cityName = '';
  let countryName = '';

  if (pickedWeather) {
    icon = pickWeatherIcon(pickedWeather.weather[0].description);
    temp = pickedWeather.main.temp.toFixed();
    description = pickedWeather.weather[0].description;
    date = new Date(pickedWeather.dt * 1000).toUTCString().slice(0, 11);
    cityName = pickedWeather.name;
    countryName = pickedWeather.sys.country;
  }

  return (
    <>
      {!pickedWeather ? null : (
        <main className="general__main">
          <div className="general__content-container">
            <div className="general__img-container">
              <img className="general__img" src={icon} alt="weather icon" />
            </div>
            <h1 className="general__title">
              <span className="general__title general__title--value">{temp}</span>
              *C
            </h1>
          </div>
          <div className="general__content-container">
            <h2 className="general__subtitle">{description}</h2>
            <div className="general__date-container">
              <p className="general__date">Today</p>
              <span className="general__date-dot" />
              <p className="general__date">{date}</p>
            </div>
            <div className="general__city-container">
              <img src={LocationIcon} alt="location icon" />
              <h3 className="general__city">
                {`${cityName}
                ,
              ${countryName}`}
              </h3>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default observer(Main);
