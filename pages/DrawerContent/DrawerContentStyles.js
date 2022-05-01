import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  drawerContainer: {
    marginHorizontal: 25,
    marginVertical: 25,
    flex: 1,
    justifyContent: 'space-between',
  },
  nameContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
    marginTop: 20,
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#575757',
  },
  emptyContainer: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
    marginTop: 15,
    marginRight: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconSquare: {
    padding: 8,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    margin: 5,
  },
  drawerItemContainer: {
    marginTop: 35,
  },
  drawerElement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 13,
    marginBottom: 20,
  },
  logOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 13,
    marginBottom: 5,
  },
  drawerElementText: {
    marginLeft: 12,
    fontSize: 18,
    color: '#575757',
  },
  logOutView: {
    justifyContent: 'flex-end',
  },
});
