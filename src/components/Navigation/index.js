import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useGeneralStore, useWeatherStore } from '../../stores/hooks';

import ListElement from './ListElement';

import SearchIcon from '../../images/search_white_24dp.svg';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '8eaf87abb8fe060c80b95b1392bc6922';

const Navigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useGeneralStore();
  const { weathersList, addWeather, setPickedWeatherID } = useWeatherStore();

  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputValueChange = e => setInputValue(e.target.value);

  const handleOnFormSubmit = e => {
    e.preventDefault();

    const cityName = inputValue.trim().toLowerCase();

    if (!cityName.length) return;

    fetch(`${BASE_URL}${cityName}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw Error(`${response.status} - ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        setIsError(false);

        if (weathersList.find(item => item.id === data.id)) return;

        addWeather(data);
        setPickedWeatherID(data.id);

        setIsMenuOpen();
      })
      .catch(err => {
        setIsError(true);
        console.log(err);

        setTimeout(() => setIsError(false), 3000);
      });

    setInputValue('');
  };

  const weathersListMap = weathersList.map(item => (
    <ListElement key={item.id} id={item.id} name={item.name} />
  ));

  return (
    <nav className={classNames('menu', { 'menu--open': isMenuOpen })}>
      <h1 className={classNames('menu__title')}>Weather App</h1>
      <form className={classNames('menu__form')} onSubmit={handleOnFormSubmit}>
        <label className={classNames('menu__label')} htmlFor="city">
          <img
            className={classNames('menu__icon')}
            src={SearchIcon}
            alt="search icon"
          />
          <input
            className={classNames('menu__input')}
            type="text"
            name="city"
            id="city"
            placeholder="search location"
            value={inputValue}
            onChange={handleInputValueChange}
          />
        </label>
        <input
          className={classNames('menu__input menu__input--btn')}
          type="submit"
          value="Search"
        />
        {isError ? (
          <p className={classNames('menu__error')}>the city was not found</p>
        ) : null}
      </form>
      <ul className={classNames('menu__list-container')}>{weathersListMap}</ul>
    </nav>
  );
};

export default observer(Navigation);
