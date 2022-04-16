import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { ServiceList } from '../../components/ServiceList';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserServices } from '../../store/services/servicesSlice';
import { SelectUserServices } from '../../store/services/servicesSlice';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { remoteDb, localDb } from '../../dbs.js';
import PouchDB from '../../pouchdb.js';
import { Button } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';


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

  const navigateAddService = () => {
    navigation.push('AddUpdateService', {id: null});
  };

  useEffect(() => {
    console.log(username);
    const syncHandler = PouchDB.sync(remoteDb, localDb, {
      live: true,
      retry: true,
      filter: function (doc) {
        return doc.author === username;
      },
    }).on('paused', () => {
      dispatch(loadUserServices({user: username, page: 1})).unwrap()
      .then(result => setLoading(false))
      .catch(err => {
        setLoading(false);
        showErrorMessage(err.message);
      });
    });

    return () => syncHandler.cancel();
  }, [dispatch, username]);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      dispatch(loadUserServices({user: username, page: 1})).unwrap()
      .then(result => setLoading(false))
      .catch(err => {
        setLoading(false);
        showErrorMessage(err.message);
      });
    }, [dispatch, username])
  );

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{ ...styles.contenedor }}>
      {!loading ? <ServiceList data={myServices} redirect="MyServiceDetail" /> : <ActivityIndicator size="large" color="#4682B4" />}
      </View>
      <View style={{marginVertical: 20, marginRight: 20, flex: 1, alignItems: "flex-end", justifyContent: "flex-end"}}>
        <Button onPress={navigateAddService} title="Publicar Anuncio +"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
