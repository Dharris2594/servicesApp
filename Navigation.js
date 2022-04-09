import { NavigationContainer } from '@react-navigation/native';
import { Services } from './pages/Services/Services';
import { MyServices } from './pages/MyServices/MyServices';
import { Login } from './pages/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="MyServices" component={MyServices} />
      </Drawer.Navigator>
    );
}

export const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
          <Stack.Screen  name='Drawer' component={DrawerComponent} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>   
    );
}