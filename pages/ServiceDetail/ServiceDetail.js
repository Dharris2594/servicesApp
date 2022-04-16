import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { SelectService } from '../../store/services/servicesSlice';

export const ServiceDetail = ({navigation, route}) => {

    const { id } = route.params;

    const service = useSelector(SelectService(id));

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: route.params.title});
      }, [navigation, route]);

    return (
        <View>
            <Text style={{fontSize: 20}}>{service._id}</Text>
            <Text style={{fontSize: 20}}>{service.title}</Text>
            <Text style={{fontSize: 20}}>{service._rev}</Text>
            <Text style={{fontSize: 20}}>{service.description}</Text>
            <Text style={{fontSize: 20}}>{service.rating}</Text>
            <Text style={{fontSize: 20}}>{service.price}</Text>
        </View>
    );
};
