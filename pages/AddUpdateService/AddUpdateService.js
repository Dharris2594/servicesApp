import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@rneui/base';
import { SelectService } from '../../store/services/servicesSlice';
import { TextInput } from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { addUpdateUserService } from '../../store/services/servicesSlice';

const imgDefault = require('../../assets/resources/img_default.png');

export const AddUpdateService = ({route, navigation}) => {
  const { id } = route.params;
  const service = useSelector(SelectService(id));
  const dispatch = useDispatch();
  const [title, setTitle] = useState(service != null ? service.title : '');
  const [description, setDescription] = useState(service != null ? service.description : '');
  const [price, setPrice] = useState(service != null ? service.price.toString() : '');
  const [image, setImage] = useState(service != null ? service.img : '');
  const username = useSelector(SelectCurrentUsername);
  const [loading, setLoading] = useState(false);

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [
      { text: 'Aceptar' },
  ]);
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({
        maxWidth: 200,
        maxHeight: 200,
        mediaType: 'photo',
        includeBase64: true,
      });

      setImage(result.assets[0].base64);
    }
    catch (error) {}
  };

  const addUpdateService = () => {
    if (title === '' || description === '' || price === '' || image === ''){
      showErrorMessage('Favor Rellene los campos');
      return;
    }

    setLoading(true);

    const data = {
      _id: service != null ? service._id : null,
      _rev: service != null ? service._rev : null,
      title: title,
      description: description,
      author: username,
      price: price,
      img: image,
    };

    dispatch(addUpdateUserService(data)).unwrap()
    .then(response => {
      Alert.alert(id ? 'Editar Publicacion' : 'Agregar Publicacion', 'Cambios realizados con exito', [
        { text: 'Aceptar', onPress: () => {
          setLoading(false);
          navigation.popToTop();
        }},
      ]);
    })
    .catch(err => {
      setLoading(false);
      showErrorMessage(err);
    });
  };

  return (
    <View style={styles.contenedor}>
      <TouchableOpacity
        onPress={openGallery}
      >
        <Image style={{
        width: '95%',
        height: 150,
        resizeMode: 'contain'
    }}
          source={image !== '' ? {uri: `data:image;base64,${image}`} : imgDefault}
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
      <View style={{marginTop: 20}}>
      {loading ? (
          <ActivityIndicator size="large" color="#CCC" />
        ) : (
          <Button
          onPress={addUpdateService}  title={id ? 'Guardar Cambios' : 'Publicar Anuncio +'}/>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    height: 250,
    margin: 30,
  },
  textInput: {
    borderBottomWidth: 1,
  },
  textArea: {
    marginTop: 10,
    borderWidth: 1,
  },
});
