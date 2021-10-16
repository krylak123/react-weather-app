/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './Header';
import Main from './Main';

import BackgroundImage from '../../images/Cloud-background.png';

const GeneralPanel = ({ setIsOpen }) => {
  return (
    <section className={classNames('general')}>
      <img
        className={classNames('general__background')}
        src={BackgroundImage}
        alt="clouds in background"
      />
      <Header setIsOpen={setIsOpen} />
      <Main />
    </section>
  );
};

GeneralPanel.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default GeneralPanel;
