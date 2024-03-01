import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AppointmentScreen from '../screens/AppointmentScreen'; // Pastikan impor yang benar
import ClientScreen from '../screens/ClientScreen'; // Pastikan impor yang benar

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} /> {/* Pastikan nama layar sesuai */}
        <Stack.Screen name="Client" component={ClientScreen} /> {/* Tambahkan layar Client */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
