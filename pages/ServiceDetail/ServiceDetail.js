import React from 'react';
import { useSelector } from 'react-redux';
import { SelectService } from '../../store/services/servicesSlice';
import { ServiceDetailUI } from './ServiceDetailUI';

export const ServiceDetail = ({ navigation, route }) => {
  const { id } = route.params;

  const service = useSelector(SelectService(id));

  return <ServiceDetailUI service={service} />;
};
