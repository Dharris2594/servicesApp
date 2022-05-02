import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  ratingContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: 'white',
    fontSize: 30,
    marginRight: 10,
  },
  imgContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  icon: {
    alignSelf: 'flex-start',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: width * 1,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  dataContainer: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  date: {
    fontSize: 18,
    opacity: 0.7,
  },
  scrollText: {
    height: height * 0.125,
    marginBottom: 20,
  },
  description: {
    marginTop: 15,
    textAlign: 'justify',
  },
  comments: {
    color: 'black',
    fontWeight: 'bold',
  },
  miniText: {
    fontSize: 12,
    color: 'black',
  },
  line: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    opacity: 0.4,
  },
  profilePic: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
    borderRadius: 30,
    marginRight: 5,
  },
  persona: {
    color: 'black',
  },
  stars: {
    resizeMode: 'cover',
  },
  scrollCommentText: {
    height: height * 0.05,
    marginVertical: 5,
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeMoreText: {
    fontSize: 12,
    color: 'black',
  },
  sendMessageContainer: {
    width: '47.5%',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#C4C4C4',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contractContainer: {
    width: '47.5%',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#019CA4',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendMessageText: {
    color: 'black',
    marginRight: 10,
  },
  contractText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
