import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Navigation } from './navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
