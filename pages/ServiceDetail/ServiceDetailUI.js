import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ServiceDetailStyles';

export const ServiceDetailUI = ({ service }) => {
  return (
    <View>
      <Text style={styles.text}>{service._id}</Text>
      <Text style={styles.text}>{service.title}</Text>
      <Text style={styles.text}>{service._rev}</Text>
      <Text style={styles.text}>{service.description}</Text>
      <Text style={styles.text}>{service.rating}</Text>
      <Text style={styles.text}>{service.price}</Text>
    </View>
  );
};
