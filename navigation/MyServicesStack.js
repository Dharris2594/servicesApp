import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyServices } from '../pages/MyServices/MyServices';
import { ServiceDetail } from '../pages/ServiceDetail/ServiceDetail';
import { HamburgerHeaderLeft } from '../components/HamburgerHeaderLeft';

const Stack = createNativeStackNavigator();

export const MyServicesStack = ({navigation}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyServices"
        component={MyServices}
        options={{headerLeft: () => <HamburgerHeaderLeft />,
        }}
        />
        <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
      />
    </Stack.Navigator>
  );
};

