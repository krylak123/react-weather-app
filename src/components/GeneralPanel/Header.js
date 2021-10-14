/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';

import TrackingIcon from '../../images/my_location_white_24dp.svg';

const HeaderPanel = () => {
  return (
    <header className={classNames('general__header')}>
      <button
        type="button"
        className={classNames(
          'general__header-btn',
          'general__header-btn--search',
        )}
      >
        Search for place
      </button>
      <button
        type="button"
        className={classNames(
          'general__header-btn',
          'general__header-btn--tracking',
        )}
      >
        <img src={TrackingIcon} alt="tracking your location" />
      </button>
    </header>
  );
};

export default HeaderPanel;
