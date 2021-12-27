import React, { useEffect } from 'react';

import { useWeatherStore } from '../stores/hooks';

import Navigation from './Navigation';
import GeneralPanel from './GeneralPanel';
import DetailsPanel from './DetailsPanel';

const App = () => {
  const { loadDataFromLocalStorage } = useWeatherStore();

  useEffect(() => loadDataFromLocalStorage(), []);

  return (
    <div className="wrapper">
      <Navigation />
      <GeneralPanel />
      <DetailsPanel />
    </div>
  );
};

export default App;
