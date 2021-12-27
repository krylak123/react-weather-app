import React from 'react';
import classNames from 'classnames';

import { useGeneralStore, useWeatherStore } from '../../stores/hooks';

import TrackingIcon from '../../images/my_location_white_24dp.svg';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '8eaf87abb8fe060c80b95b1392bc6922';

const HeaderPanel = () => {
  const { setIsMenuOpen } = useGeneralStore();
  const { weathersList, addWeather, setPickedWeatherID } = useWeatherStore();

  const handleOnMenuClick = () => setIsMenuOpen();

  const getCoordsSuccess = position => {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    fetch(`${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw Error(`${response.status} - ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (weathersList.find(item => item.id === data.id)) return;

        addWeather(data);
        setPickedWeatherID(data.id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getCoordsError = () => {
    throw new Error("can't get your location");
  };

  const handleOnTrackClick = () => {
    navigator.geolocation.getCurrentPosition(getCoordsSuccess, getCoordsError);
  };

  return (
    <header className="general__header">
      <button
        type="button"
        className={classNames('general__header-btn', 'general__header-btn--search')}
        onClick={handleOnMenuClick}
      >
        Search for place
      </button>
      <button
        type="button"
        className={classNames('general__header-btn', 'general__header-btn--tracking')}
        onClick={handleOnTrackClick}
      >
        <img src={TrackingIcon} alt="tracking your location" />
      </button>
    </header>
  );
};

export default HeaderPanel;
