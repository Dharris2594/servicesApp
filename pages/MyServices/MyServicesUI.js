import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ServiceList } from '../../components/ServiceList';
import { Button } from '@rneui/base';
import { styles } from './MyServicesStyles';

export const MyServicesUI = ({ loading, myServices, navigateAddService }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={{ ...styles.contenedor }}>
        {!loading ? (
          <ServiceList data={myServices} redirect="MyServiceDetail" />
        ) : (
          <ActivityIndicator size="large" color="#4682B4" />
        )}
      </View>
      <View style={styles.button}>
        <Button onPress={navigateAddService} title="Publicar Anuncio +" />
      </View>
    </View>
  );
};
