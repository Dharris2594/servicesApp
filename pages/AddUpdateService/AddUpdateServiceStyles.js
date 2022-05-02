import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contenedor: {
    height: 250,
    padding: 30,
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    borderBottomWidth: 1,
  },
  text: {
    marginVertical: 10,
  },
  textArea: {
    marginTop: 10,
    borderWidth: 1,
  },
  image: {
    width: '95%',
    height: 150,
    resizeMode: 'contain',
  },
  loading: { marginTop: 20 },
  picker: {
    borderWidth: 1,
  },
});
