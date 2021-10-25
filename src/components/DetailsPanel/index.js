import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useGeneralStore, useWeatherStore } from '../../stores/hooks';

const DetailsPanel = () => {
  const { isMenuOpen } = useGeneralStore();

  const { showWeather, pickedWeatherID } = useWeatherStore();

  const pickedWeather = showWeather(pickedWeatherID);

  let wind = 0;
  let humidity = 0;
  let visibility = 0;
  let pressure = 0;

  if (pickedWeather) {
    wind = pickedWeather.wind.speed;
    humidity = pickedWeather.main.humidity;
    visibility = pickedWeather.visibility;
    pressure = pickedWeather.main.pressure;
  }

  return (
    <section
      className={classNames('details', { 'details--hidden': isMenuOpen })}
    >
      <p className={classNames('details__title')}>Today&apos;s Hightlights</p>
      <div className={classNames('details__detail-container')}>
        <article className={classNames('detail')}>
          <p className={classNames('detail__title')}>Wind Status</p>
          <p className={classNames('detail__subtitle')}>
            <span className={classNames('detail__subtitle--value')}>
              {wind}
            </span>
            m/sec
          </p>
        </article>
        <article className={classNames('detail')}>
          <p className={classNames('detail__title')}>Humidity</p>
          <p className={classNames('detail__subtitle')}>
            <span className={classNames('detail__subtitle--value')}>
              {humidity}
            </span>
            %
          </p>
        </article>
        <article className={classNames('detail')}>
          <p className={classNames('detail__title')}>Visibility</p>
          <p className={classNames('detail__subtitle')}>
            <span className={classNames('detail__subtitle--value')}>
              {visibility}
            </span>
            m
          </p>
        </article>
        <article className={classNames('detail')}>
          <p className={classNames('detail__title')}>Air Pressure</p>
          <p className={classNames('detail__subtitle')}>
            <span className={classNames('detail__subtitle--value')}>
              {pressure}
            </span>
            hPa
          </p>
        </article>
      </div>
    </section>
  );
};

export default observer(DetailsPanel);
