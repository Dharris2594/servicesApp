import { Services } from "../pages/Services/Services";
import { MyServices } from "../pages/MyServices/MyServices";
import { RequestedServices } from "../pages/RequestedServices/RequestedServices";
import { createDrawerNavigator, DrawerItem} from "@react-navigation/drawer";
import { useCallback } from "react";
import { Alert, BackHandler } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, SelectCurrentUsername } from "../store/auth/authSlice";
import { DrawerActions } from '@react-navigation/native';
import { useFocusEffect } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export const MainDrawer = ({navigation}) => {
  const userName = useSelector(SelectCurrentUsername);
  const dispatch = useDispatch();

  const logOutMessage = () => {
    Alert.alert("Cerrar Sesión", "Deseas Cerrar esta Sesión?", [
      { text: "Cancelar", style: "cancel", onPress: () => {} },
      {
        text: "Aceptar",
        style: "destructive",
        onPress: () => {
          dispatch(logOutUser())
            .unwrap()
            .then((response) => {
              navigation.dispatch(DrawerActions.closeDrawer())
              navigation.pop();
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );


  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Header text={`Hola ${userName}`} size={75} />
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar Sesión" onPress={logOutMessage} />
      </DrawerContentScrollView>
    );
  }0

  return (
    <Drawer.Navigator
      drawerContent={(props) => CustomDrawerContent(props)}
      initialRouteName="Services"
    >
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="MyServices" component={MyServices} />
      <Drawer.Screen name="RequestedServices" component={RequestedServices} />
    </Drawer.Navigator>
  );
};
