import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';

export const ServiceListItem = ({ item, redirect }) => {
  const navigation = useNavigation();
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
          <Text style={styles.subtitle}>Panamá, Panamá</Text>
        </View>
        <View style={styles.underView}>
          <Text style={styles.price}>{`$${item.price.toString()}`}</Text>
          <Text style={styles.subtitle}>{`57 contratos`}</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{ uri: `data:image;base64,${item.img}` }}
        />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 130,
    resizeMode: 'stretch',
  },
  description: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  underView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
});
