import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { ServiceListItem } from './ServiceListItem';

export const ServiceList = ({ data, redirect }) => {
  const renderItem = ({ item }) => (
    <ServiceListItem item={item} redirect={redirect} />
  );
  const keyExtractor = (item) => item._id;
  const ITEM_HEIGHT = 65;
  const getItemLayout = (d, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * d.length,
      index,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 30,
  },
});
