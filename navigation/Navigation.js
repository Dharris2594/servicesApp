import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../pages/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainDrawer } from './MainDrawer';
import React from 'react';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drawer"
          component={MainDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
