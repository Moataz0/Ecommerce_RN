import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from './Routes';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
