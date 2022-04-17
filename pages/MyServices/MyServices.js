import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserServices } from '../../store/services/servicesSlice';
import { SelectUserServices } from '../../store/services/servicesSlice';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { remoteDb, localDb } from '../../dbs.js';
import PouchDB from '../../pouchdb.js';
import { useFocusEffect } from '@react-navigation/native';
import { MyServicesUI } from './MyServicesUI';

export const MyServices = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const myServices = useSelector(SelectUserServices);
  const username = useSelector(SelectCurrentUsername);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [{ text: 'Aceptar' }]);
  };

  const navigateAddService = () => {
    navigation.push('AddUpdateService', { id: null });
  };

  useEffect(() => {
    const syncHandler = PouchDB.sync(remoteDb, localDb, {
      live: true,
      retry: true,
      selector: {
        $or: [{ author: username }, { _deleted: true }],
      },
    }).on('paused', () => {
      dispatch(loadUserServices({ user: username, page: 1 }))
        .unwrap()
        .then((result) => setLoading(false))
        .catch((err) => {
          setLoading(false);
          showErrorMessage(err.message);
        });
    });

    return () => syncHandler.cancel();
  }, [dispatch, username]);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      dispatch(loadUserServices({ user: username, page: 1 }))
        .unwrap()
        .then((result) => setLoading(false))
        .catch((err) => {
          setLoading(false);
          showErrorMessage(err.message);
        });
    }, [dispatch, username])
  );

  return (
    <MyServicesUI
      loading={loading}
      navigateAddService={navigateAddService}
      myServices={myServices}
    />
  );
};
