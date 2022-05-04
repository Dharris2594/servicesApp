import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './AddUpdateServiceStyles';
import { Picker } from '@react-native-picker/picker';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const imgDefault = require('../../assets/resources/img_default.png');

const categories = [
  'Salud',
  'Turismo',
  'Legales',
  'Tecnológico',
  'Mantenimiento',
  'Construcción',
  'Transporte',
  'Educación',
  'Entretenimiento',
  'Otros',
];

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
  selectedCategory,
  setSelectedCategory,
}) => {
  const input2 = useRef();
  const picker1 = useRef();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.globalContainer}>
      <ScrollView>
        <TouchableOpacity onPress={openGallery}>
          {image !== '' ? (
            <ImageBackground
              style={styles.image}
              source={
                image !== ''
                  ? { uri: `data:image;base64,${image}` }
                  : imgDefault
              }
            >
              <View style={styles.icon2}>
                <Icon color="white" name="edit" size={40} />
              </View>
              <Icon
                onPress={() => navigation.pop()}
                color="white"
                name="keyboard-arrow-left"
                size={40}
                style={styles.icon}
              />
            </ImageBackground>
          ) : (
            <View style={styles.imageContainer}>
              <View style={styles.imageFrame}>
                <Icon color="white" name="image" size={80} />
                <Text style={styles.imageText}>Insertar Imagen</Text>
              </View>
              <Icon
                onPress={() => navigation.pop()}
                color="white"
                name="keyboard-arrow-left"
                size={40}
                style={styles.icon}
              />
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.contenedor}>
          <Text style={styles.title}>Titulo</Text>
          <TextInput
            style={styles.textInput}
            value={title}
            returnKeyType="next"
            onChangeText={(t) => setTitle(t)}
            onSubmitEditing={() => picker1.current.focus()}
          />
          <Text style={styles.title}>Categoría</Text>
          <TouchableWithoutFeedback onPress={() => picker1.current.focus()}>
            <View style={styles.picker}>
              <Picker
                prompt="Categoría"
                ref={picker1}
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => {
                  setSelectedCategory(itemValue);
                  input2.current.focus();
                }}
              >
                <Picker.Item
                  label={'Seleccionar'}
                  style={styles.pickerItem}
                  value={null}
                  enabled={false}
                />
                {categories.map((item, i) => (
                  <Picker.Item
                    key={i}
                    style={styles.pickerItem}
                    label={item}
                    value={item}
                  />
                ))}
              </Picker>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.title}>Precio</Text>
          <TextInput
            style={styles.textInput}
            value={price}
            ref={input2}
            returnKeyType="done"
            onChangeText={(t) => setPrice(t)}
          />
          <Text style={styles.title}>Descripcion</Text>
          <TextInput
            multiline={true}
            style={styles.textArea}
            value={description}
            numberOfLines={6}
            onChangeText={(t) => setDescription(t)}
          />
          <View style={styles.finish}>
            {loading ? (
              <ActivityIndicator size="large" color="#019CA4" />
            ) : (
              <View style={styles.buttonsContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.pop()}>
                  <View style={styles.cancelContainer}>
                    <Text style={styles.cancelText}>Cancelar</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={addUpdateService}>
                  <View style={styles.addUpdateContainer}>
                    <Text style={styles.addUpdateText}>
                      {id ? 'Guardar' : 'Publicar'}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
