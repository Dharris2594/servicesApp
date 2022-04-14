import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../store/auth/authSlice';
import { LoginForm } from './LoginForm';
import { Header } from '../../components/Header';

export const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [
      { text: 'Aceptar' },
  ]);
  };

  const handleButton = useCallback(async (user, pass, rePass, register) => {
    if (user === '' || pass === '' || (rePass === '' && register)) {
      showErrorMessage('Favor Ingrese Usuario y Contraseña');
      return;
    }
    if (pass !== rePass && register){
        showErrorMessage('Las Contraseñas no coinciden!');
        return;
    }

    setLoading(true);

    const userData = {
      username: user,
      password: pass,
    };

    if (register){
        dispatch(registerUser(userData)).unwrap()
        .then(response => {
          setLoading(false);
          navigation.navigate('Drawer');
        })
        .catch(error => {
          showErrorMessage(error);
          setLoading(false);
        });
    }
    else {
      dispatch(loginUser(userData)).unwrap()
      .then(response => {
        setLoading(false);
        navigation.navigate('Drawer');
      })
      .catch(error => {
        setLoading(false);
        showErrorMessage(error);
      });
    }
  }, [dispatch, navigation]);

  return (
    <View style={styles.pageContainer}>
      <Header text="XOPA CHAMOOO"/>
      <LoginForm
        handleButton={handleButton}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
});
