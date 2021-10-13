import React from 'react';
import classNames from 'classnames';

import StoreProvider from '../stores/StoreProvider';

const App = () => (
  <StoreProvider>
    <div className={classNames('wrapper')}>
      <p>React App</p>
    </div>
  </StoreProvider>
);

export default App;
