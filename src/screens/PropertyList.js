import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sesuaikan dengan ikon yang ingin Anda gunakan

const PropertyList = ({ navigation }) => {
  const [propertyData, setPropertyData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8000/api/front/mobil');
        setPropertyData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('PropertyDetail', { property: item });
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        onError={(e) => {
          console.error('Error loading image:', e.nativeEvent.error);
          console.log('Image URL:', item.image);
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.address}>{item.brand} {item.model}</Text>
        <Text style={styles.squareMeters}>{item.color}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.beds}> Year {item.year}</Text>
        <Text style={styles.baths}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search properties..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.propertyListContainer}
        data={propertyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => navigation.navigate('PropertyList')}
        >
          <Icon name="home" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => {/* Handle action for search icon */}}
        >
          <Icon name="search" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => {/* Handle action for notification icon */}}
        >
          <Icon name="bell" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavigationItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="user" size={24} color="#1877f2" />
          <Text style={styles.bottomNavigationText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#1877f2', // Warna latar belakang biru
  },
  searchInputContainer: {
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  propertyListContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000', // Warna teks biru
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000', // Warna teks biru
  },
  squareMeters: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  cardFooter: {
    padding: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    justifyContent: 'space-between',
  },
  beds: {
    fontSize: 14,
    color: '#1877f2',
    fontWeight: 'bold',
  },
  baths: {
    fontSize: 14,
    color: '#1877f2',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12, // Sesuaikan dengan tinggi yang diinginkan
  },
  bottomNavigationItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Menambah properti flexDirection untuk mengatur ikon dan teks berdampingan
  },
  bottomNavigationText: {
    color: '#1877f2', // Warna teks biru
    marginTop: 5,
  },
});

export default PropertyList;
