import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { Login } from './pages/Login/Login';
import store from './store/store';
import { Services } from './pages/Services/Services';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen  options={{ title: 'Overview' }} name='Services' component={Services} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
