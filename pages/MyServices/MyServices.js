import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { ServiceList } from '../ServiceList/ServiceList';
import { useDispatch, useSelector } from 'react-redux';
import { loadMyServices } from '../../store/myServices/myServicesSlice';
import { SelectmyServices } from '../../store/myServices/myServicesSlice';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import PouchDB from '../../pouchdb.js';

const remoteDb = new PouchDB('http://admin:1111@152.67.46.150:5984/services');
const localDb = new PouchDB('myServices', { adapter: 'react-native-sqlite' });

export const MyServices = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const myServices = useSelector(SelectmyServices);
  const username = useSelector(SelectCurrentUsername);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [
      { text: 'Aceptar' },
  ]);
  };

  useEffect(() => {
    setLoading(true);
    const syncHandler = PouchDB.sync(remoteDb, localDb, {
      live: true,
      retry: true,
      selector: {
        'userId': `org.couchdb.user:${username.toLowerCase().trim()}`,
      },
    }).on('paused', () => {
      setLoading(true);
      dispatch(loadMyServices(username)).unwrap()
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
