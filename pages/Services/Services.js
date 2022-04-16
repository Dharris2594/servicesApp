import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadServices } from '../../store/services/servicesSlice';
import { SelectServices } from '../../store/services/servicesSlice';
import { useFocusEffect } from '@react-navigation/native';
import { ServicesUI } from './ServicesUI';

export const Services = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const services = useSelector(SelectServices);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [{ text: 'Aceptar' }]);
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      dispatch(loadServices(1))
        .unwrap()
        .then((result) => setLoading(false))
        .catch((err) => {
          setLoading(false);
          showErrorMessage(err.message);
        });
    }, [dispatch])
  );

  return <ServicesUI loading={loading} services={services} />;
};
