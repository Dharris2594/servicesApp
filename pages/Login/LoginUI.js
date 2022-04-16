import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './LoginStyles';

export const LoginUI = ({
  user,
  setUser,
  pass,
  setPass,
  loading,
  handleButton,
  toggleRegister,
  register,
  rePass,
  setRepass,
}) => {
  const repeatPass = () => {
    if (register) {
      return (
        <View>
          <Text>Repetir Contraseña</Text>
          <TextInput
            secureTextEntry
            value={rePass}
            onChangeText={(t) => setRepass(t)}
            style={styles.textInput}
            placeholder=""
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Header text="XOPA CHAMOOO" />
      <View style={styles.container}>
        <Text>Usuario</Text>
        <TextInput
          value={user}
          onChangeText={(t) => setUser(t)}
          style={styles.textInput}
          placeholder=""
        />
        <Text>Contraseña</Text>
        <TextInput
          secureTextEntry
          value={pass}
          onChangeText={(t) => setPass(t)}
          style={styles.textInput}
          placeholder=""
        />
        {repeatPass()}
        <View style={styles.button}>
          {loading ? (
            <ActivityIndicator size="large" color="#CCC" />
          ) : (
            <Button
              onPress={handleButton}
              title={register ? 'Crear Usuario' : 'Iniciar Sesion'}
            />
          )}
          <TouchableWithoutFeedback
            onPress={() => {
              toggleRegister((state) => !state);
              if (Platform.OS === 'android') {
                if (UIManager.setLayoutAnimationEnabledExperimental) {
                  UIManager.setLayoutAnimationEnabledExperimental(true);
                }
              }
              LayoutAnimation.easeInEaseOut();
            }}
          >
            <Text style={styles.subtext}>
              {!register
                ? '¿No tienes una cuenta? ¡Registrate!'
                : '¿Ya tienes una cuenta? ¡Inicia Sesion!'}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};
