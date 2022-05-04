import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Services } from '../pages/Services/Services';
import { ServiceDetail } from '../pages/ServiceDetail/ServiceDetail';

const Stack = createNativeStackNavigator();

export const ServicesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Services"
        options={{ headerShown: false }}
        component={Services}
      />
      <Stack.Screen
        name="ServiceDetail"
        options={{ headerShown: false }}
        component={ServiceDetail}
      />
    </Stack.Navigator>
  );
};
