import React from 'react';
import store from './redux';
import { Provider } from 'react-redux';
import SelectedLocation from './components/SelectLocation';
import MainContent from './components/MainContent';

function App() {
  return (
    <Provider store={store}>
      <SelectedLocation />
      <MainContent />
    </Provider>
    
  );
}

export default App;
