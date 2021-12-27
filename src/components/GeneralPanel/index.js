import React from 'react';

import Header from './Header';
import Main from './Main';

import BackgroundImage from '../../images/Cloud-background.png';

const GeneralPanel = () => (
  <section className="general">
    <img className="general__background" src={BackgroundImage} alt="clouds in background" />
    <Header />
    <Main />
  </section>
);

export default GeneralPanel;
