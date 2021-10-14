import React from 'react';
import classNames from 'classnames';

import StoreProvider from '../stores/StoreProvider';

import GeneralPanel from './GeneralPanel';

const App = () => (
  <StoreProvider>
    <div className={classNames('wrapper')}>
      <GeneralPanel />
    </div>
  </StoreProvider>
);

export default App;
