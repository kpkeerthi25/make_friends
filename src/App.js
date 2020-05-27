import React from 'react';

import './App.css';

import {store,persistor} from './store/StoreConfig'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MyRouter from './Router/MyRouter'

function App() {
 
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
		<MyRouter />
    </PersistGate>
    </Provider>
   
    
  );
}

export default App;
