import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import axios from 'axios';

export default function Appointment({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8000/api/appointment');
        setAppointments(response.data.data); // Adjusted to access the 'data' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment List</Text>
      <FlatList
        data={appointments}
        renderItem={({ item }) => (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#018BF7", "#00BAF7"]}
            style={styles.appointmentCard}
          >
            <View style={styles.appointmentContent}>
              <Text style={styles.appointmentText}>Office: {item.office}</Text>
              <Text style={styles.appointmentText}>Probable Start Time: {item.probable_start_time}</Text>
              <Text style={styles.appointmentText}>Actual End Time: {item.actual_end_time}</Text>
              <Text style={styles.appointmentText}>Status: {item.status}</Text>
              <Text style={styles.appointmentText}>Appointment Taken Date: {item.appointment_taken_date}</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#018BF7"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF" // Text color changed to white
  },
  appointmentCard: {
    borderRadius: 10,
    marginBottom: 15,
    padding: 15
  },
  appointmentContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  appointmentText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF", // Background color changed to match Home
    elevation: 5,
    paddingVertical: 11
  },
  bottomNavigationItem: {
    alignItems: "center"
  },
  bottomNavigationText: {
    fontSize: 12,
    color: "#1877f2"
  }
});

