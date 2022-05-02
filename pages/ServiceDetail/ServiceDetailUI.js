import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { styles } from './ServiceDetailStyles';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export const ServiceDetailUI = ({ service }) => {
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

          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.comments}>COMENTARIOS</Text>
              <Text style={styles.miniText}>
                57 personas han contratado este servicio
              </Text>
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
          <View style={styles.sendMessageContainer}>
            <Text style={styles.sendMessageText}>Enviar Mensaje</Text>
            <Icon
              size={20}
              type="material"
              name="chat-bubble"
              color="#C4C4C4"
            />
          </View>
          <View style={styles.contractContainer}>
            <Text style={styles.contractText}>Contratar</Text>
            <Icon
              size={20}
              type="material-community"
              name="handshake"
              color="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
