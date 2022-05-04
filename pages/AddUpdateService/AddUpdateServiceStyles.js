import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgContainer: {
    flex: 1,
  },
  icon: {
    margin: 10,
    alignSelf: 'flex-start',
  },
  icon2: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 25,
    marginHorizontal: 70,
    borderColor: 'white',
    borderRadius: 10,
  },
  imageText: {
    color: 'white',
  },
  image: {
    width: width * 1,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: width * 1,
    height: height * 0.3,
    backgroundColor: '#C4C4C4',
  },
  contenedor: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  pickerItem: {
    fontSize: 14,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DCDEDF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  textArea: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#DCDEDF',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  loading: { marginTop: 20 },
  picker: {
    borderWidth: 1,
    borderColor: '#DCDEDF',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#263238',
    fontWeight: '500',
  },
  cancelContainer: {
    width: '47.5%',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'red',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addUpdateContainer: {
    width: '47.5%',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#019CA4',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: 'red',
    marginRight: 10,
  },
  addUpdateText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  finish: {
    marginTop: 20,
  },
});
