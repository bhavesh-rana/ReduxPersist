import * as React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation/mainNavigation';
import {store, persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {CounterContext} from './src/hooks/Usercontext';
const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>

      <MainNavigation />
 
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
