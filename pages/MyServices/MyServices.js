import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { ServiceList } from '../ServiceList/ServiceList';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserServices } from '../../store/services/servicesSlice';
import { SelectUserServices } from '../../store/services/servicesSlice';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { remoteDb, localDb } from '../../dbs.js';
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
    console.log(username);
    const syncHandler = PouchDB.sync(remoteDb, localDb, {
      live: true,
      retry: true,
      selector: {
        'author': `org.couchdb.user:${username}`,
      },
    }).on('paused', () => {
      dispatch(loadUserServices(username)).unwrap()
      .then(result => setLoading(false))
      .catch(err => showErrorMessage(err.message));
    });

    return () => syncHandler.cancel();
  }, [dispatch, username]);

  return (
    <View style={{ ...styles.contenedor }}>
      {!loading ? <ServiceList data={myServices} /> : <ActivityIndicator size="large" color="#4682B4" />}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFF',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
