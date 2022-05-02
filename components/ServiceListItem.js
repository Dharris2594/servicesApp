import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Icon } from '@rneui/themed';

export const ServiceListItem = ({ item, redirect }) => {
  const navigation = useNavigation();
  const star = require('../assets/resources/grayStar.png');
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push(redirect, { id: item._id, title: item.title })
      }
      style={styles.item}
    >
      <View style={styles.description}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.rowContainer}>
            <Icon color="gray" name="place" size={14} />
            <Text style={styles.subtitle}>Panamá, Panamá</Text>
          </View>
        </View>
        <View style={styles.underView}>
          <Text style={styles.price}>{`$${item.price.toString()}`}</Text>
          <View style={styles.rowContainer}>
            <Icon
              color="gray"
              type="material-community"
              name="handshake"
              size={18}
              style={styles.handshake}
            />
            <Text style={styles.subtitle}>{`57 contratos`}</Text>
          </View>
        </View>
      </View>
      <View>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={styles.image}
          source={{ uri: `data:image;base64,${item.img}` }}
        >
          <View style={styles.imgContainer}>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{item.rating}</Text>
              <Image style={styles.star} source={star} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 8,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBackground: {
    width: 160,
    height: 120,
    resizeMode: 'cover',
  },
  image: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  description: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  underView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  imgContainer: {
    flex: 1,
  },
  ratingContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    color: 'white',
    fontSize: 16,
    transform: [{ translateX: 4 }, { translateY: -2 }],
  },
  star: {
    resizeMode: 'contain',
  },
  rowContainer: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  handshake: {
    marginRight: 2,
  },
});
