import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useGeneralStore } from '../../stores/hooks';

import SearchIcon from '../../images/search_white_24dp.svg';

// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
// const API_KEY = '8eaf87abb8fe060c80b95b1392bc6922';

const Navigation = () => {
  const { isMenuOpen } = useGeneralStore();
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = e => setInputValue(e.target.value);

  const handleOnFormSubmit = e => {
    e.preventDefault();
  };

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
        {/* {isError ? (
          <p className={classNames('menu__error')}>the city was not found</p>
        ) : null} */}
      </form>
      {/* <ul className={classNames('menu__list-container')}>{weathersListMap}</ul> */}
    </nav>
  );
};

export default observer(Navigation);
