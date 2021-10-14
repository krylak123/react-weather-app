/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';

import WeatherImg from '../../images/Shower.png';
import LocationIcon from '../../images/location_on_white_24dp.svg';

const Main = () => {
  return (
    <main className={classNames('general__main')}>
      <div className={classNames('general__content-container')}>
        <div className={classNames('general__img-container')}>
          <img
            className={classNames('general__img')}
            src={WeatherImg}
            alt="weather icon"
          />
        </div>
        <h1 className={classNames('general__title')}>
          <span className={classNames('general__title general__title--value')}>
            15
          </span>
          *C
        </h1>
      </div>
      <div className={classNames('general__content-container')}>
        <h2 className={classNames('general__subtitle')}>Shower</h2>
        <div className={classNames('general__date-container')}>
          <p className={classNames('general__date')}>Today</p>
          <span className={classNames('general__date-dot')} />
          <p className={classNames('general__date')}>Fri. 5 Jun</p>
        </div>
        <div className={classNames('general__city-container')}>
          <img src={LocationIcon} alt="location icon" />
          <h3 className={classNames('general__city')}>Helsinki</h3>
        </div>
      </div>
    </main>
  );
};

export default Main;
