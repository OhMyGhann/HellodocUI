import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const ClientScreen = ({ navigation }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8000/api/client_account');
        setClients(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Client List</Text>
      <FlatList
        data={clients}
        renderItem={({ item }) => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#018BF7', '#00BAF7']}
            style={styles.appointmentCard}
          >
            <View style={styles.appointmentContent}>
              <Text style={styles.appointmentText}>Name: {item.first_name} {item.last_name}</Text>
              <Text style={styles.appointmentText}>Email: {item.email}</Text>
              <Text style={styles.appointmentText}>Phone: {item.contact_number}</Text>
            </View>
          </LinearGradient>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Feather name="home" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => navigation.navigate('Appointment')}
        >
          <Feather name="calendar" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => navigation.navigate('Client')}
        >
          <Feather name="users" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Client</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="user" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#018BF7',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  appointmentCard: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
  },
  appointmentContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  appointmentText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    elevation: 5,
    paddingVertical: 11,
  },
  bottomNavigationItem: {
    alignItems: 'center',
  },
  bottomNavigationText: {
    fontSize: 12,
    color: '#1877f2',
  },
});

export default ClientScreen;
