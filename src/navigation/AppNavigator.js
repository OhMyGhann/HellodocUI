// AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import PropertyList from '../screens/PropertyList';
import LoginScreen from '../screens/LoginScreen';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/HomeScreen'; // Pastikan Anda mengimpor HomeScreen
import Register from '../screens/Register'; // Pastikan Anda mengimpor Register
import AppointmentScreen from '../screens/Appointment'; // Pastikan Anda mengimpor AppointmentScreen
import ClientScreen from '../screens/Client'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PropertyList"
        component={PropertyList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointment" // Pastikan nama layar sesuai
        component={AppointmentScreen} // Pastikan komponen sesuai
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Client" // Pastikan nama layar sesuai
        component={ClientScreen} // Pastikan komponen sesuai
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
  );
};

export default AppNavigator;
