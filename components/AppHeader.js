import React from 'react';
import { Icon } from '@rneui/themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

const { height, width } = Dimensions.get('window');

export const AppHeader = () => {
  const navigation = useNavigation();
  const hamburger = require('../assets/resources/Hamburger.png');

  return (
    <View style={styles.headerContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Image style={styles.hamburger} source={hamburger} />
      </TouchableWithoutFeedback>
      <View style={styles.iconContainer}>
        <View style={styles.iconSquare}>
          <Icon size={30} name="notifications" color="#C4C4C4" />
        </View>
        <View style={styles.iconSquare}>
          <Icon size={30} type="material" name="chat-bubble" color="#C4C4C4" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: height * 0.1,
    width: width * 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  hamburger: {
    width: width * 0.07,
    height: height * 0.045,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  iconSquare: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    margin: 5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});
