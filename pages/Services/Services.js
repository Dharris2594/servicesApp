import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadServices } from '../../store/services/servicesSlice';
import { SelectServices } from '../../store/services/servicesSlice';
import { ServicesUI } from './ServicesUI';
import { SelectLoggedIn } from '../../store/auth/authSlice';
import { useFocusEffect } from '@react-navigation/native';

export const Services = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const services = useSelector(SelectServices);
  const loggedIn = useSelector(SelectLoggedIn);

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
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (loggedIn) {
        e.preventDefault();
      }
    });

    return unsubscribe;
  }, [navigation, loggedIn]);

  return <ServicesUI loading={loading} services={services} />;
};
