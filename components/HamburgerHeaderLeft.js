import React from 'react';
import { Icon } from '@rneui/themed';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const HamburgerHeaderLeft = () => {
    const navigation = useNavigation();

    return (
      <Icon
        name="menu"
        size={25}
        onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
        style={{marginRight: 25}}
      />
    );
  };

