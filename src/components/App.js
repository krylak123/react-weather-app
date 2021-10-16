import React, { useState } from 'react';
import classNames from 'classnames';

import Navigation from './Navigation';
import GeneralPanel from './GeneralPanel';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className={classNames('wrapper')}>
      <Navigation isOpen={isMenuOpen} />
      <GeneralPanel setIsOpen={setIsMenuOpen} />
    </div>
  );
};

export default App;
