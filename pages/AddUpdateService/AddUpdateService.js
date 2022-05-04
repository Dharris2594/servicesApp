import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SelectMyService } from '../../store/services/servicesSlice';
import { launchImageLibrary } from 'react-native-image-picker';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { addUpdateUserService } from '../../store/services/servicesSlice';
import { AddUpdateServiceUI } from './AddUpdateServiceUI';

export const AddUpdateService = ({ route, navigation }) => {
  const { id } = route.params;
  const service = useSelector(SelectMyService(id));
  const dispatch = useDispatch();
  const username = useSelector(SelectCurrentUsername);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(service != null ? service.title : '');
  const [description, setDescription] = useState(
    service != null ? service.description : ''
  );
  const [price, setPrice] = useState(
    service != null ? service.price.toString() : ''
  );
  const [image, setImage] = useState(service != null ? service.img : '');
  const [selectedCategory, setSelectedCategory] = useState(
    service != null ? service.category : 'Seleccionar'
  );

  const showErrorMessage = (errorMessage) => {
    Alert.alert('Ha Ocurrido un Error', errorMessage, [{ text: 'Aceptar' }]);
  };

  const openGallery = useCallback(async () => {
    try {
      const result = await launchImageLibrary({
        maxWidth: 640,
        maxHeight: 360,
        quality: 0.5,
        mediaType: 'photo',
        includeBase64: true,
      });
      setImage(result.assets[0].base64);
    } catch (error) {}
  }, []);

  const addUpdateService = useCallback(() => {
    if (
      title === '' ||
      description === '' ||
      price === '' ||
      image === '' ||
      selectedCategory === 'Seleccionar'
    ) {
      showErrorMessage('Favor Rellene los campos');
      return;
    }

    setLoading(true);

    const data = {
      _id: service != null ? service._id : null,
      _rev: service != null ? service._rev : null,
      category: selectedCategory,
      title: title,
      description: description,
      author: username,
      price: price,
      img: image,
    };

    dispatch(addUpdateUserService(data))
      .unwrap()
      .then((response) => {
        setLoading(false);
        Alert.alert(
          id ? 'Editar Publicacion' : 'Agregar Publicacion',
          'Cambios realizados con exito',
          [
            {
              text: 'Aceptar',
              onPress: () => {
                navigation.popToTop();
              },
            },
          ]
        );
      })
      .catch((err) => {
        setLoading(false);
        showErrorMessage(err);
      });
  }, [
    description,
    dispatch,
    image,
    id,
    navigation,
    price,
    service,
    title,
    username,
    selectedCategory,
  ]);

  return (
    <AddUpdateServiceUI
      image={image}
      openGallery={openGallery}
      title={title}
      setTitle={setTitle}
      price={price}
      setPrice={setPrice}
      description={description}
      setDescription={setDescription}
      loading={loading}
      id={id}
      addUpdateService={addUpdateService}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};
