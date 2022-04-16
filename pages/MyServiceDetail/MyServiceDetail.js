import React, { useCallback, useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SelectMyService } from '../../store/services/servicesSlice';
import { deleteUserService } from '../../store/services/servicesSlice';
import { MyServiceDetailUI } from './MyServiceDetailUI';

export const MyServiceDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const service = useSelector(SelectMyService(id));

  const navigateUpdateService = useCallback(() => {
    navigation.push('AddUpdateService', { id: id });
  }, [navigation, id]);

  const deleteService = useCallback(() => {
    Alert.alert(
      'Borrar Servicio',
      'Estas seguro que deseas borrar este servicio? Esta accion no se puede deshacer!',
      [
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
      ]
    );
  }, [dispatch, navigation, service]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: route.params.title });
  }, [navigation, route]);

  return (
    <MyServiceDetailUI
      service={service}
      deleteService={deleteService}
      navigateUpdateService={navigateUpdateService}
    />
  );
};
