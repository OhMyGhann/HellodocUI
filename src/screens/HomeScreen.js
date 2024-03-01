import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([
    { name: "Article" },
    { name: "Consultation" },
    { name: "Drug" },
    { name: "Healthy Tips" },
    { name: "News" },
    { name: "Doctor" }
  ]);

  const [article, setArticle] = useState([
    {
      title: "Resep Kebugaran Pria Dewasa",
      description: "Berikut tips untuk para pria supaya semakin tangguh ...",
      date: "1 minutes ago",
      doctor: "dr. Abror Nugroho",
      imageUrl:
        "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    },
    {
      title: "Menurunkan Berat Badan 3 Hari",
      description:
        "Pengen berat badan ideal? berikut tips yang perlu kalian coba ...",
      date: "5 minutes ago",
      doctor: "dr. Aslam Abdullah",
      imageUrl:
        "https://images.unsplash.com/photo-1634463278803-f9f71890e67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Cara Menghindari Stres Berat",
      description:
        "Keseringan stres bisa jadi penyakit loh, yuk simak saran dokter ...",
      date: "20 minutes ago",
      doctor: "dr. Ilham Hakim",
      imageUrl:
        "https://images.unsplash.com/photo-1621252179027-d18a5a36c109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Mengatasi Kantuk Berat Setiap Hari",
      description:
        "Sering merasa kantuk saat beraktifitas? Kalian harus coba ini ...",
      date: "40 minutes ago",
      doctor: "dr. Amin Mubarok",
      imageUrl:
        "https://images.unsplash.com/photo-1618517047922-d18a5a36c109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.title}>Dr. Abdul Ghani. 👋</Text>
        <Text style={styles.subtitle}>Inspection Schedule</Text>
        <Schedule />
        <Category category={category} />
        <Text style={styles.subtitle}>Articles</Text>
        <Article article={article} />
      </View>
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
  onPress={() => navigation.navigate('Appointment')} // change here
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

const Schedule = () => {
  return (
    <View style={styles.scheduleContainer}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#018BF7", "#00BAF7"]}
        style={styles.scheduleCard}
      >
        <TouchableOpacity style={styles.scheduleContent}>
          <Image
            style={styles.scheduleImage}
            source={{
              uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }}
          />
          <View style={styles.scheduleDetails}>
            <Text style={styles.doctorName}>Dr. Abdul Ghani</Text>
            <Text style={styles.doctorSpecialization}>Dokter Umum</Text>
            <View style={styles.scheduleInfo}>
              <Feather name="clock" size={15} color="white" />
              <Text style={styles.scheduleText}>19 April 2022</Text>
            </View>
            <View style={styles.scheduleInfo}>
              <Feather name="map-pin" size={15} color="white" />
              <Text style={styles.scheduleText}>Klinik Medika</Text>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};


const Category = ({ category }) => {
  return (
    <>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Category</Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryItem,
                { backgroundColor: item.name === "Article" ? "#018BF7" : "white" }
              ]}
            >
              <Text style={[styles.categoryText, { color: item.name === "Article" ? "white" : "black" }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const Article = ({ article }) => {
  return (
    <View style={styles.articleContainer}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={article}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.articleCard}>
            <Image style={styles.articleImage} source={{ uri: item.imageUrl }} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDescription}>{item.description}</Text>
              <View style={styles.articleInfo}>
                <View style={styles.articleInfoItem}>
                  <Feather name="user" size={11} color="gray" />
                  <Text style={styles.articleInfoText}>{item.doctor}</Text>
                </View>
                <View style={styles.articleInfoItem}>
                  <Feather name="clock" size={11} color="gray" />
                  <Text style={styles.articleInfoText}>{item.date}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#018BF7"
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50
  },
  title: {
    color: "white",
    fontSize: 15
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 20,
    color: "white"
  },
  scheduleContainer: {
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
    marginTop: 15
  },
  scheduleCard: {
    borderRadius: 10
  },
  scheduleContent: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  scheduleImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginLeft: 15
  },
  scheduleDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
    marginRight: 10
  },
  doctorName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  doctorSpecialization: {
    color: "#f4f4f4",
    fontSize: 12
  },
  scheduleInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scheduleText: {
    color: "white",
    fontSize: 12,
    marginLeft: 6
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "white"
  },
  seeMoreText: {
    fontSize: 13,
    color: "white"
  },
  categoryContainer: {
    marginTop: 5,
    marginBottom: 20
  },
  categoryItem: {
    marginVertical: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginRight: 5,
    elevation: 1
  },
  categoryText: {
    fontSize: 13
  },
  articleContainer: {
    marginTop: 14,
    flex: 1
  },
  articleCard: {
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 1
  },
  articleImage: {
    width: 84,
    height: 84,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  articleContent: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
    marginRight: 10
  },
  articleTitle: {
    fontWeight: "bold",
    color: "#018BF7",
    fontSize: 14
  },
  articleDescription: {
    fontSize: 12
  },
  articleInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  articleInfoItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  articleInfoText: {
    fontSize: 10,
    marginLeft: 4,
    color: "gray"
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
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
