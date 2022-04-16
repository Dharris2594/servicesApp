import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Button } from '@rneui/base';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './AddUpdateServiceStyles';

const imgDefault = require('../../assets/resources/img_default.png');

export const AddUpdateServiceUI = ({
  image,
  openGallery,
  title,
  setTitle,
  price,
  setPrice,
  description,
  setDescription,
  loading,
  id,
  addUpdateService,
}) => {
  return (
    <View style={styles.contenedor}>
      <TouchableOpacity onPress={openGallery}>
        <Image
          style={styles.image}
          source={
            image !== '' ? { uri: `data:image;base64,${image}` } : imgDefault
          }
        />
      </TouchableOpacity>
      <Text>Titulo</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(t) => setTitle(t)}
      />
      <Text>Precio</Text>
      <TextInput
        style={styles.textInput}
        value={price}
        onChangeText={(t) => setPrice(t)}
      />
      <Text>Descripcion</Text>
      <TextInput
        multiline={true}
        style={styles.textArea}
        value={description}
        numberOfLines={4}
        onChangeText={(t) => setDescription(t)}
      />
      <View style={styles.loading}>
        {loading ? (
          <ActivityIndicator size="large" color="#CCC" />
        ) : (
          <Button
            onPress={addUpdateService}
            title={id ? 'Guardar Cambios' : 'Publicar Anuncio +'}
          />
        )}
      </View>
    </View>
  );
};
