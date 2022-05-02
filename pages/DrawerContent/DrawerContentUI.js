import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { SelectCurrentUsername } from '../../store/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './DrawerContentStyles';
import { Icon } from '@rneui/base';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const DrawerContentUI = ({ logOutMessage }) => {
  const userName = useSelector(SelectCurrentUsername);
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{`Bienvenido ${userName.replace(
            'org.couchdb.user:',
            ''
          )}`}</Text>
        </View>
        <View style={styles.emptyContainer} />
        <View style={styles.iconContainer}>
          <View style={styles.iconSquare}>
            <Icon size={30} name="person" color="#C4C4C4" />
          </View>
          <View style={styles.iconSquare}>
            <Icon size={30} name="notifications" color="#C4C4C4" />
          </View>
          <View style={styles.iconSquare}>
            <Icon
              size={30}
              type="material"
              name="chat-bubble"
              color="#C4C4C4"
            />
          </View>
          <View style={styles.iconSquare}>
            <Icon size={30} type="material" name="settings" color="#C4C4C4" />
          </View>
        </View>
        <View style={styles.drawerItemContainer}>
          <TouchableWithoutFeedback
            style={styles.drawerElement}
            onPress={() => navigation.navigate('ServicesStack')}
          >
            <Icon size={30} type="material" name="event-note" color="#575757" />
            <Text style={styles.drawerElementText}>Anuncios</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.drawerElement}
            onPress={() => navigation.navigate('MyServicesStack')}
          >
            <Icon
              type="material-community"
              size={30}
              name="calendar-edit"
              color="#575757"
            />
            <Text style={styles.drawerElementText}>Mis Anuncios</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.drawerElement}>
            <Icon
              size={30}
              type="material-community"
              name="handshake"
              color="#575757"
            />
            <Text style={styles.drawerElementText}>Contratos</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.logOutView}>
        <TouchableWithoutFeedback
          onPress={logOutMessage}
          style={styles.logOutContainer}
        >
          <Icon
            size={30}
            type="material-community"
            name="logout"
            color="#575757"
          />
          <Text style={styles.drawerElementText}>Cerrar Sesión</Text>
        </TouchableWithoutFeedback>
      </View>
    </DrawerContentScrollView>
  );
};
