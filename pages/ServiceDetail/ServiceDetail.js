import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectService } from '../../store/services/servicesSlice';
import { ServiceDetailUI } from './ServiceDetailUI';

export const ServiceDetail = ({ navigation, route }) => {
  const { id } = route.params;

  const service = useSelector(SelectService(id));

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: route.params.title });
  }, [navigation, route]);

  return <ServiceDetailUI service={service} />;
};
