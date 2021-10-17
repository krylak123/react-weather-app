import React from 'react';
import classNames from 'classnames';

import Header from './Header';
import Main from './Main';

import BackgroundImage from '../../images/Cloud-background.png';

const GeneralPanel = () => {
  console.log('generalPanel');

  return (
    <section className={classNames('general')}>
      <img
        className={classNames('general__background')}
        src={BackgroundImage}
        alt="clouds in background"
      />
      <Header />
      <Main />
    </section>
  );
};

export default GeneralPanel;
