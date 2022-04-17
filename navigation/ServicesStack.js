import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Services } from '../pages/Services/Services';
import { ServiceDetail } from '../pages/ServiceDetail/ServiceDetail';
import { HamburgerHeaderLeft } from '../components/HamburgerHeaderLeft';

const Stack = createNativeStackNavigator();

export const ServicesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Services"
        component={Services}
        options={{ headerLeft: () => <HamburgerHeaderLeft /> }}
      />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
    </Stack.Navigator>
  );
};
