import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyServices } from '../pages/MyServices/MyServices';
import { MyServiceDetail } from '../pages/MyServiceDetail/MyServiceDetail';
import { HamburgerHeaderLeft } from '../components/HamburgerHeaderLeft';
import { AddUpdateService } from '../pages/AddUpdateService/AddUpdateService';

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
        name="MyServiceDetail"
        component={MyServiceDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddUpdateService"
        options={{ headerShown: false }}
        component={AddUpdateService}
      />
    </Stack.Navigator>
  );
};
