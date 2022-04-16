import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { Alert, BackHandler } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, SelectCurrentUsername } from '../store/auth/authSlice';
import { DrawerActions } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { MyServicesStack } from './MyServicesStack';
import { ServicesStack } from './ServicesStack';

const Drawer = createDrawerNavigator();

export const MainDrawer = ({navigation}) => {
  const userName = useSelector(SelectCurrentUsername);
  const dispatch = useDispatch();

  const logOutMessage = () => {
    Alert.alert('Cerrar Sesión', 'Deseas Cerrar esta Sesión?', [
      { text: 'Cancelar', style: 'cancel', onPress: () => {} },
      {
        text: 'Aceptar',
        style: 'destructive',
        onPress: () => {
          dispatch(logOutUser())
            .unwrap()
            .then((response) => {
              navigation.dispatch(DrawerActions.closeDrawer());
              navigation.pop();
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );


  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Header text={`Hola ${userName.replace('org.couchdb.user:', '')}`} size={75} />
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar Sesión" onPress={logOutMessage} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => CustomDrawerContent(props)}
      initialRouteName="Services"
    >
      <Drawer.Screen name="ServicesStack" component={ServicesStack} options={{headerShown: false}} />
      <Drawer.Screen name="MyServicesStack" component={MyServicesStack} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
};
