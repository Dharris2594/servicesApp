import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../store/auth/authSlice';
import { LoginUI } from './LoginUI';

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRepass] = useState('');
  const [register, toggleRegister] = useState(false);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [{ text: 'Aceptar' }]);
  };

  const resetFields = () => {
    setLoading(false);
    setUser('');
    setPass('');
    setRepass('');
    toggleRegister(false);
  };

  const handleButton = useCallback(async () => {
    if (user === '' || pass === '' || (rePass === '' && register)) {
      showErrorMessage('Favor Ingrese Usuario y Contraseña');
      return;
    }
    if (pass !== rePass && register) {
      showErrorMessage('Las Contraseñas no coinciden!');
      return;
    }

    setLoading(true);

    const userData = {
      username: user,
      password: pass,
    };

    if (register) {
      dispatch(registerUser(userData))
        .unwrap()
        .then((response) => {
          resetFields();
          navigation.navigate('Drawer');
        })
        .catch((error) => {
          showErrorMessage(error);
          setLoading(false);
        });
    } else {
      dispatch(loginUser(userData))
        .unwrap()
        .then((response) => {
          resetFields();
          navigation.navigate('Drawer');
        })
        .catch((error) => {
          setLoading(false);
          showErrorMessage(error);
        });
    }
  }, [dispatch, navigation, user, pass, rePass, register]);

  return (
    <LoginUI
      user={user}
      setUser={setUser}
      pass={pass}
      setPass={setPass}
      loading={loading}
      handleButton={handleButton}
      toggleRegister={toggleRegister}
      register={register}
      rePass={rePass}
      setRepass={setRepass}
    />
  );
};
