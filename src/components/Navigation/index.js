/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useWeatherStore } from '../../stores/hooks';

import ListElement from './ListElement';

import SearchIcon from '../../images/search_white_24dp.svg';

const Navigation = ({ isOpen }) => {
  const { weathersList } = useWeatherStore();

  const weathersListMap = weathersList.map(item => (
    <ListElement key={item.id} {...item} />
  ));

  return (
    <nav className={classNames('menu', { 'menu--open': isOpen })}>
      <h1 className={classNames('menu__title')}>Weather App</h1>
      <form className={classNames('menu__form')}>
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
          />
        </label>
        <input
          className={classNames('menu__input menu__input--btn')}
          type="submit"
          value="Search"
        />
      </form>
      <ul className={classNames('menu__list-container')}>{weathersListMap}</ul>
    </nav>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
