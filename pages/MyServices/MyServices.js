import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from '../Card/Card';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loadMyServices, syncMyServices, cancelMyServicesSync } from '../../store/myServices/myServicesSlice';
import { SelectmyServices, SelectMyServicesLoading } from '../../store/myServices/myServicesSlice';
import { SelectCurrentUsername } from '../../store/auth/authSlice';

export const MyServices = (props) => {
    const dispatch = useDispatch();

    const myServices = useSelector(SelectmyServices);
    const myServicesLoading = useSelector(SelectMyServicesLoading)
    const username = useSelector(SelectCurrentUsername);

    useEffect(() => {
        console.log('HOLA');
        dispatch(syncMyServices(username));

        return dispatch(cancelMyServicesSync());
    }, []);

    return (
        <View style={{...styles.contenedor}}>
            {!myServicesLoading ? 
            <Card data={myServices}/> : <Text>Cargando</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#4682B4",
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
