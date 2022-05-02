import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadServices } from '../../store/services/servicesSlice';
import { SelectServices } from '../../store/services/servicesSlice';
import { ServicesUI } from './ServicesUI';

export const Services = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const services = useSelector(SelectServices);

  useEffect(() => {
    setLoading(true);
    dispatch(loadServices(1))
      .unwrap()
      .then((result) => setLoading(false))
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation]
  );

  return <ServicesUI loading={loading} services={services} />;
};
