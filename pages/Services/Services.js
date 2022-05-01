import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadServices } from '../../store/services/servicesSlice';
import { SelectServices } from '../../store/services/servicesSlice';
import { useFocusEffect } from '@react-navigation/native';
import { ServicesUI } from './ServicesUI';
import NetInfo from '@react-native-community/netinfo';

export const Services = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const services = useSelector(SelectServices);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      dispatch(loadServices(1))
        .unwrap()
        .then((result) => setLoading(false))
        .catch(() => {
          setLoading(false);
        });
    }, [dispatch])
  );

  useEffect(() => {
    const onBackPress = () => {
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  return <ServicesUI loading={loading} services={services} />;
};
