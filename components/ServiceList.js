import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { ServiceListItem } from './ServiceListItem';

export const ServiceList = ({ data, redirect }) => {
  const renderItem = ({ item }) => (
    <ServiceListItem title={item.title} id={item._id} redirect={redirect} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
