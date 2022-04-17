import React, { useRef } from 'react';
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
  SafeAreaView,
  ScrollView,
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
  const input2 = useRef();
  const input3 = useRef();

  const repeatPass = () => {
    if (register) {
      return (
        <View>
          <Text>Repetir Contraseña</Text>
          <TextInput
            ref={input3}
            secureTextEntry
            value={rePass}
            returnKeyType="done"
            onChangeText={(t) => setRepass(t)}
            style={styles.textInput}
            placeholder=""
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text="XOPA CHAMOOO" />
        <View style={styles.container}>
          <Text>Usuario</Text>
          <TextInput
            value={user}
            returnKeyType="next"
            onChangeText={(t) => setUser(t)}
            style={styles.textInput}
            placeholder=""
            onSubmitEditing={() => input2.current.focus()}
          />
          <Text>Contraseña</Text>
          <TextInput
            ref={input2}
            secureTextEntry
            value={pass}
            returnKeyType={register ? 'next' : 'done'}
            onChangeText={(t) => setPass(t)}
            style={styles.textInput}
            placeholder=""
            onSubmitEditing={register ? () => input3.current.focus() : () => {}}
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
      </ScrollView>
    </SafeAreaView>
  );
};
