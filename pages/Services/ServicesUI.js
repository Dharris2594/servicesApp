import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { ServiceList } from '../../components/ServiceList';
import { styles } from './ServicesStyles';
import { AppHeader } from '../../components/AppHeader';
import { Icon } from '@rneui/themed';

export const ServicesUI = ({ loading, services }) => {
  if (!loading) {
    return (
      <View style={styles.contenedor}>
        <AppHeader />
        <View style={styles.row}>
          <Text style={styles.title}>Anuncios</Text>
          <Icon
            color="#C4C4C4"
            name="filter-list"
            size={40}
            style={styles.icon}
          />
        </View>
        <ServiceList data={services} redirect="ServiceDetail" />
      </View>
    );
  } else {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" color="#019CA4" />
      </View>
    );
  }
};
