import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = ({ title, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.push('ServiceDetail', {id: id, title: title})}
    style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const ServiceList = ({data}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item._id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



export { ServiceList };
