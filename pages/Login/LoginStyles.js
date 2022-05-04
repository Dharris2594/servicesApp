import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 30,
    transform: [{ translateY: -55 }],
  },
  textInput: {
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: 4,
  },
  button: {
    marginVertical: 15,
  },
  subtext: {
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 10,
  },
  rectangle: {
    width: width * 1,
    height: height * 0.125,
    transform: [{ translateY: -10 }],
  },
  logo: {
    width: width * 0.75,
    height: height * 0.4,
    alignSelf: 'center',
    resizeMode: 'cover',
    transform: [{ translateY: -30 }],
  },
  text: {
    fontSize: 16,
  },
  rowView: {
    marginTop: 15,
    flexDirection: 'row',
  },
  logoRowView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  line: {
    backgroundColor: 'gray',
    height: 1.5,
    flex: 1,
    alignSelf: 'center',
  },
  ingresaConText: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 16,
  },
  socialNetworkLogo: {
    width: width * 0.1,
    height: height * 0.05,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
