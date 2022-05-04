import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './MyServiceDetailStyles';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export const MyServiceDetailUI = ({
  service,
  deleteService,
  navigateUpdateService,
}) => {
  const date = new Date(service.updated_at);
  const serviceFormatedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  const profilePic = require('../../assets/resources/profilePic.jpg');
  const stars = require('../../assets/resources/stars.png');
  const star = require('../../assets/resources/star.png');
  const navigation = useNavigation();
  return (
    <View style={styles.globalContainer}>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.imageStyle}
        source={{ uri: `data:image;base64,${service.img}` }}
      >
        <View style={styles.imgContainer}>
          <Icon
            onPress={() => navigation.pop()}
            color="white"
            name="keyboard-arrow-left"
            size={40}
            style={styles.icon}
          />
          <Text style={styles.onetofive}>1/5</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{service.rating}</Text>
            <Image style={styles.stars} source={star} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.title}>{service.title}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.price}>{`$${service.price}`}</Text>
            <Text style={styles.date}>{serviceFormatedDate}</Text>
          </View>
          <ScrollView style={styles.scrollText}>
            <Text style={styles.description}>{service.description}</Text>
          </ScrollView>
          <View style={styles.seeContracts}>
            <View style={styles.rowContracts}>
              <Icon color="black" name="person" size={20} />
              <Text style={styles.miniText}>Ver contratos</Text>
            </View>
            <Text style={styles.miniText}>
              57 personas han contratado este servicio
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.comments}>COMENTARIOS</Text>
            </View>
            <View>
              <Icon
                color="black"
                name="filter-list"
                size={20}
                style={styles.icon}
              />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.rowContainer}>
            <View style={styles.rowContainer}>
              <Image style={styles.profilePic} source={profilePic} />
              <Text style={styles.persona}>Persona_1</Text>
            </View>
            <View>
              <Image style={styles.stars} source={stars} />
            </View>
          </View>
          <ScrollView style={styles.scrollCommentText}>
            <Text style={styles.miniText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </Text>
          </ScrollView>
          <View style={styles.seeMoreContainer}>
            <Text style={styles.seeMoreText}>VER MÁS</Text>
            <Icon color="black" name="keyboard-arrow-down" size={20} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableWithoutFeedback onPress={deleteService}>
            <View style={styles.deleteContainer}>
              <Text style={styles.deleteText}>Eliminar</Text>
              <Icon size={20} type="material" name="delete" color="red" />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={navigateUpdateService}>
            <View style={styles.editContainer}>
              <Text style={styles.editText}>Editar</Text>
              <Icon size={20} name="edit" color="white" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};
