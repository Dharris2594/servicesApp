import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { ServiceList } from '../ServiceList/ServiceList';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserServices } from '../../store/services/servicesSlice';
import { SelectUserServices } from '../../store/services/servicesSlice';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { remoteServiceDb, localServiceDb } from '../../constants.js';
import PouchDB from '../../pouchdb.js';


export const MyServices = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const myServices = useSelector(SelectUserServices);
  const username = useSelector(SelectCurrentUsername);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [
      { text: 'Aceptar' },
  ]);
  };

  useEffect(() => {
    const syncHandler = PouchDB.sync(remoteServiceDb, localServiceDb, {
      live: true,
      retry: true,
      selector: {
        'userId': `org.couchdb.user:${username.toLowerCase().trim()}`,
      },
    }).on('paused', () => {
      dispatch(loadUserServices(username)).unwrap()
      .then(result => setLoading(false))
      .catch(err => showErrorMessage(err));
    });

    return () => syncHandler.cancel();
  }, [dispatch, username]);

  return (
    <View style={{ ...styles.contenedor }}>
      {!loading ? <ServiceList data={myServices} /> : <Text>Cargando</Text>}
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
