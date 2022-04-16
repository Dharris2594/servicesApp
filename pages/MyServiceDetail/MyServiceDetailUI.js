import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './MyServiceDetailStyles';

export const MyServiceDetailUI = ({
  service,
  deleteService,
  navigateUpdateService,
}) => {
  return (
    <View>
      <Text style={styles.text}>{service._id}</Text>
      <Text style={styles.text}>{service.title}</Text>
      <Text style={styles.text}>{service._rev}</Text>
      <Text style={styles.text}>{service.description}</Text>
      <Text style={styles.text}>{service.rating}</Text>
      <Text style={styles.text}>{service.price}</Text>
      <View style={styles.buttons}>
        <Button onPress={deleteService} title="Eliminar" />
        <Button onPress={navigateUpdateService} title="Editar" />
      </View>
    </View>
  );
};
