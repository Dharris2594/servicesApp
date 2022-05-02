import React, { useRef } from 'react';
import {
  Image,
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

  const logo = require('../../assets/resources/loginLogo.png');
  const rectangle = require('../../assets/resources/rectangle.png');
  const googleLogo = require('../../assets/resources/googleLogo.png');
  const fbLogo = require('../../assets/resources/fbLogo.png');
  const twitterLogo = require('../../assets/resources/twitterLogo.png');

  const repeatPass = () => {
    if (register) {
      return (
        <View>
          <Text style={styles.text}>Repetir Contraseña</Text>
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
      <ScrollView>
        <Image style={styles.rectangle} source={rectangle} />
        <Image style={styles.logo} source={logo} />
        <View style={styles.container}>
          <Text style={styles.text}>Usuario</Text>
          <TextInput
            value={user}
            returnKeyType="next"
            onChangeText={(t) => setUser(t)}
            style={styles.textInput}
            placeholder=""
            onSubmitEditing={() => input2.current.focus()}
          />
          <Text style={styles.text}>Contraseña</Text>
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
              <ActivityIndicator size="large" color="#019CA4" />
            ) : (
              <Button
                color={'#019CA4'}
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
          {!register && (
            <View>
              <View style={styles.rowView}>
                <View style={styles.line} />
                <Text style={styles.ingresaConText}>Ingresar con</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.logoRowView}>
                <Image style={styles.socialNetworkLogo} source={googleLogo} />
                <Image style={styles.socialNetworkLogo} source={fbLogo} />
                <Image style={styles.socialNetworkLogo} source={twitterLogo} />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
