import { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const LoginForm = ({handleButton, loading}) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRepass] = useState("");
  const [register, toggleRegister] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setUser('');
      setPass('');
      setRepass('');
      toggleRegister(false);
    }, [])
  );

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
            onPress={() => handleButton(user, pass, rePass, register)}
            title={register ? "Crear Usuario" : "Iniciar Sesion"}
          />
        )}
        <TouchableWithoutFeedback
          onPress={() => {
            toggleRegister((state) => !state);
            if (Platform.OS === "android") {
              if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
              }
            }
            LayoutAnimation.easeInEaseOut();
          }}
        >
          <Text style={styles.subtext}>
            {!register
              ? "¿No tienes una cuenta? ¡Registrate!"
              : "¿Ya tienes una cuenta? ¡Inicia Sesion!"}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginVertical: 20,
      marginHorizontal: 30
  },
  textInput: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  button: {
    marginVertical: 20,
  },
  subtext: {
    textDecorationLine: "underline",
    alignSelf: "center",
    marginTop: 20,
  },
});
