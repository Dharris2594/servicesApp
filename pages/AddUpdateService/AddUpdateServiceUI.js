import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Button } from '@rneui/base';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './AddUpdateServiceStyles';
import { Picker } from '@react-native-picker/picker';

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

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          returnKeyType="next"
          onChangeText={(t) => setTitle(t)}
          onSubmitEditing={() => picker1.current.focus()}
        />
        <Text style={styles.text}>Categoría</Text>
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
              <Picker.Item label={'Seleccionar'} value={null} enabled={false} />
              {categories.map((item, i) => (
                <Picker.Item key={i} label={item} value={item} />
              ))}
            </Picker>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>Precio</Text>
        <TextInput
          style={styles.textInput}
          value={price}
          ref={input2}
          returnKeyType="done"
          onChangeText={(t) => setPrice(t)}
        />
        <Text style={styles.text}>Descripcion</Text>
        <TextInput
          multiline={true}
          style={styles.textArea}
          value={description}
          numberOfLines={4}
          onChangeText={(t) => setDescription(t)}
        />
        <View style={styles.loading}>
          {loading ? (
            <ActivityIndicator size="large" color="#019CA4" />
          ) : (
            <Button
              onPress={addUpdateService}
              title={id ? 'Guardar Cambios' : 'Publicar Anuncio +'}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
