import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  activityContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#575757',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  addServiceButton: {
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 8,
    elevation: 10,
    backgroundColor: '#019CA4',
    alignItems: 'center',
  },
});
