import React from 'react';
import classNames from 'classnames';

import Navigation from './Navigation';
import GeneralPanel from './GeneralPanel';

const App = () => (
  <div className={classNames('wrapper')}>
    <Navigation />
    <GeneralPanel />
  </div>
);

export default App;
