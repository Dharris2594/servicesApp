import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';

export const ServiceListItem = ({ title, id, redirect }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.push(redirect, { id: id, title: title })}
      style={styles.item}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#4682B4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
