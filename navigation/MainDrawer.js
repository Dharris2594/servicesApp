import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MyServicesStack } from './MyServicesStack';
import { ServicesStack } from './ServicesStack';
import { DrawerContent } from '../pages/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ swipeEdgeWidth: 0 }}
      drawerContent={DrawerContent}
      initialRouteName="Services"
    >
      <Drawer.Screen
        name="ServicesStack"
        component={ServicesStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="MyServicesStack"
        component={MyServicesStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
