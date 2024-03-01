// Profile.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
  // Ganti dengan data pengguna yang sesuai
  const user = {
    username: 'Abdul Ghani',
    email: 'email@example.com',
    profileImage: 'URL_FOTO_PROFIL_ANDA', // Ganti dengan URL foto profil Anda
  };

  const handleLogout = () => {
    // Tambahkan logika logout di sini
    Alert.alert('Logout', 'Anda yakin ingin keluar?', [
      {
        text: 'Batal',
        style: 'cancel',
      },
      {
        text: 'Ya',
        onPress: () => {
          // Implementasi logout, seperti menghapus token atau membersihkan data sesi
          // Navigasi kembali ke layar login atau layar awal aplikasi
          navigation.replace('Login');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            // Tambahkan logika untuk navigasi ke layar pengaturan atau layar lainnya
          }}
        >
          <Icon name="cog" size={20} color="#333" />
          <Text style={styles.optionText}>Pengaturan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Icon name="sign-out" size={20} color="#333" />
          <Text style={styles.optionText}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
