import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ServiceList } from '../ServiceList/ServiceList';

export const Services = (props) => (
        <View style={{...styles.contenedor}}>
            <Text style={{fontSize: 40}}>Services</Text>
            <ServiceList/>
        </View>
);

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#4682B4',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
