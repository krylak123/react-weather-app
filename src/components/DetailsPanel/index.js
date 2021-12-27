import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useGeneralStore, useWeatherStore } from '../../stores/hooks';

import WindDirectionIcon from '../../images/arrow_upward_white_24dp.svg';

const DetailsPanel = () => {
  const { isMenuOpen } = useGeneralStore();

  const { showWeather, pickedWeatherID } = useWeatherStore();

  const pickedWeather = showWeather(pickedWeatherID);

  let windSpeed = 0;
  let windDeg = 0;
  let humidity = 0;
  let visibility = 0;
  let pressure = 0;

  if (pickedWeather) {
    windSpeed = pickedWeather.wind.speed;
    windDeg = pickedWeather.wind.deg;
    humidity = pickedWeather.main.humidity;
    visibility = pickedWeather.visibility;
    pressure = pickedWeather.main.pressure;
  }

  return (
    <section className={classNames('details', { 'details--hidden': isMenuOpen })}>
      <p className="details__title">Today&apos;s Hightlights</p>
      <div className="details__detail-container">
        <article className="detail">
          <p className="detail__title">Wind Status</p>
          <p className="detail__subtitle">
            <span className="detail__subtitle--value">{windSpeed}</span>
            m/sec
          </p>
          <div
            className="detail__wind-icon-container"
            style={{ transform: `rotate(${windDeg}deg)` }}
          >
            <img className="detail__wind-icon" src={WindDirectionIcon} alt="wind direction" />
          </div>
        </article>
        <article className="detail">
          <p className="detail__title">Humidity</p>
          <p className="detail__subtitle">
            <span className="detail__subtitle--value">{humidity}</span>%
          </p>
          <div className="detail__progress-bar">
            <span className="detail__progress-bar-fill" style={{ width: `${humidity}%` }} />
            <span
              className={classNames('detail__progress-bar-value', 'detail__progress-bar-value--0')}
            >
              0
            </span>
            <span
              className={classNames('detail__progress-bar-value', 'detail__progress-bar-value--50')}
            >
              50
            </span>
            <span
              className={classNames(
                'detail__progress-bar-value',
                'detail__progress-bar-value--100',
              )}
            >
              100
            </span>
            <span
              className={classNames(
                'detail__progress-bar-value',
                'detail__progress-bar-value--char',
              )}
            >
              %
            </span>
          </div>
        </article>
        <article className="detail">
          <p className="detail__title">Visibility</p>
          <p className="detail__subtitle">
            <span className="detail__subtitle--value">{visibility}</span>m
          </p>
        </article>
        <article className="detail">
          <p className="detail__title">Air Pressure</p>
          <p className="detail__subtitle">
            <span className="detail__subtitle--value">{pressure}</span>
            hPa
          </p>
        </article>
      </div>
    </section>
  );
};

export default observer(DetailsPanel);
