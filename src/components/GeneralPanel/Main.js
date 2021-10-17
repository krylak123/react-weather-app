import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useWeatherStore } from '../../stores/hooks';

import WeatherImg from '../../images/Shower.png';
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
    icon = `https://openweathermap.org/img/wn/${pickedWeather.weather[0].icon}@2x.png`;
    temp = pickedWeather.main.temp.toFixed();
    description = pickedWeather.weather[0].description;
    date = new Date(pickedWeather.dt * 1000).toUTCString().slice(0, 11);
    cityName = pickedWeather.name;
    countryName = pickedWeather.sys.country;
  }

  return (
    <>
      {!pickedWeather ? null : (
        <main className={classNames('general__main')}>
          <div className={classNames('general__content-container')}>
            <div className={classNames('general__img-container')}>
              <img
                className={classNames('general__img')}
                src={pickedWeather ? icon : WeatherImg}
                alt="weather icon"
              />
            </div>
            <h1 className={classNames('general__title')}>
              <span
                className={classNames('general__title general__title--value')}
              >
                {temp}
              </span>
              *C
            </h1>
          </div>
          <div className={classNames('general__content-container')}>
            <h2 className={classNames('general__subtitle')}>{description}</h2>
            <div className={classNames('general__date-container')}>
              <p className={classNames('general__date')}>Today</p>
              <span className={classNames('general__date-dot')} />
              <p className={classNames('general__date')}>{date}</p>
            </div>
            <div className={classNames('general__city-container')}>
              <img src={LocationIcon} alt="location icon" />
              <h3 className={classNames('general__city')}>
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
