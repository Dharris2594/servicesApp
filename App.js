import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { Login } from './pages/Login/Login';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#AAA" translucent={true} />
      <Login />
    </Provider>
  );
}
