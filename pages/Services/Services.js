import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { ServiceList } from '../ServiceList/ServiceList';
import { useDispatch, useSelector } from 'react-redux';
import { loadServices } from '../../store/services/servicesSlice';
import { SelectServices } from '../../store/services/servicesSlice';
import { useFocusEffect } from '@react-navigation/native';


export const Services = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const services = useSelector(SelectServices);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [
      { text: 'Aceptar' },
  ]);
  };

  useFocusEffect(
    useCallback(() => {
        dispatch(loadServices()).unwrap()
        .then(result => setLoading(false))
        .catch(err => showErrorMessage(err));
    }, [dispatch])
  );

  return (
    <View style={{ ...styles.contenedor }}>
      {!loading ? <ServiceList data={services} /> : <Text>Cargando</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#4682B4',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
