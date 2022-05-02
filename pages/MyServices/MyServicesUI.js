import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { ServiceList } from '../../components/ServiceList';
import { styles } from './MyServicesStyles';
import { AppHeader } from '../../components/AppHeader';
import { Icon } from '@rneui/themed';

export const MyServicesUI = ({ loading, myServices, navigateAddService }) => {
  if (!loading) {
    return (
      <View style={styles.contenedor}>
        <AppHeader />
        <View style={styles.row}>
          <Text style={styles.title}>Mis Anuncios</Text>
          <Icon
            color="#C4C4C4"
            name="filter-list"
            size={40}
            style={styles.icon}
          />
        </View>
        <TouchableNativeFeedback onPress={navigateAddService}>
          <View style={styles.addServiceButton}>
            <Text style={styles.text}>Publicar Anuncio +</Text>
          </View>
        </TouchableNativeFeedback>
        <ServiceList data={myServices} redirect="MyServiceDetail" />
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
