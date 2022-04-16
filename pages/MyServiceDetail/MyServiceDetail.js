import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SelectMyService } from '../../store/services/servicesSlice';
import { deleteUserService } from '../../store/services/servicesSlice';

export const MyServiceDetail = ({navigation, route}) => {

    const { id } = route.params;
    const dispatch = useDispatch();
    const service = useSelector(SelectMyService(id));

    const navigateUpdateService = () => {
        navigation.push('AddUpdateService', {id: id});
      };

    const deleteService = () => {
      Alert.alert('Borrar Servicio', 'Estas seguro que deseas borrar este servicio? Esta accion no se puede deshacer!', [
        { text: 'Cancelar', style: 'cancel', onPress: () => {} },
        {
          text: 'Aceptar',
          style: 'destructive',
          onPress: () => {
            const data = {
              _id: service != null ? service._id : null,
              _rev: service != null ? service._rev : null,
              _deleted: true,
            };
            dispatch(deleteUserService(data))
            .unwrap()
            .then((response) => {
              navigation.pop();
            })
            .catch((error) => {
              console.log(error);
            });
          },
        },
      ]);
    };

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
            <View style={styles.buttons}>
                <Button onPress={deleteService} title="Eliminar" />
                <Button onPress={navigateUpdateService} title="Editar"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
