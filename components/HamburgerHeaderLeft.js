import React from 'react';
import { Icon } from '@rneui/themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const HamburgerHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <Icon
      name="menu"
      size={30}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: { marginRight: 25 },
});
