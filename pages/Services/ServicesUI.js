import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ServiceList } from '../../components/ServiceList';
import { styles } from './ServicesStyles';

export const ServicesUI = ({ loading, services }) => {
  return (
    <View style={{ ...styles.contenedor }}>
      {!loading ? (
        <ServiceList data={services} redirect="ServiceDetail" />
      ) : (
        <ActivityIndicator size="large" color="#4682B4" />
      )}
    </View>
  );
};
