/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import { useGeneralStore, useWeatherStore } from '../../stores/hooks';

import CityIcon from '../../images/apartment_white_24dp.svg';

const ListElement = ({ id, name }) => {
  const { setIsMenuOpen } = useGeneralStore();
  const { setPickedWeatherID } = useWeatherStore();

  const handleOnClick = e => {
    setPickedWeatherID(Number(e.target.dataset.id));
    setIsMenuOpen();
  };

  return (
    <li data-id={String(id)} className="menu__list-element" onClick={handleOnClick}>
      <img src={CityIcon} alt="city icon" />
      <p className="menu__element-title">{name}</p>
    </li>
  );
};

ListElement.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default observer(ListElement);
