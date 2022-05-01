import React from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../store/auth/authSlice';
import { DrawerActions } from '@react-navigation/native';
import { DrawerContentUI } from './DrawerContentUI';

export const DrawerContent = ({ navigation, props }) => {
  const dispatch = useDispatch();

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [{ text: 'Aceptar' }]);
  };

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
            .catch((error) => showErrorMessage(error));
        },
      },
    ]);
  };

  return <DrawerContentUI logOutMessage={logOutMessage} />;
};
