import React from 'react';
import classNames from 'classnames';

import { useGeneralStore } from '../../stores/hooks';

import TrackingIcon from '../../images/my_location_white_24dp.svg';

const HeaderPanel = () => {
  const { setIsMenuOpen } = useGeneralStore();

  const handleOnMenuClick = () => setIsMenuOpen();

  return (
    <header className={classNames('general__header')}>
      <button
        type="button"
        className={classNames(
          'general__header-btn',
          'general__header-btn--search',
        )}
        onClick={handleOnMenuClick}
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
