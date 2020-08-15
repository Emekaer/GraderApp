import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppDrawer from './source/navigation/index';

const App = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default App;
