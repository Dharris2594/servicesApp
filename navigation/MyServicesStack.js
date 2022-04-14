import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyServices } from '../pages/MyServices/MyServices';
import { ServiceDetail } from '../pages/ServiceDetail/ServiceDetail';

const Stack = createNativeStackNavigator();

export const MyServicesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyServices"
        component={MyServices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
      />
    </Stack.Navigator>
  );
};
