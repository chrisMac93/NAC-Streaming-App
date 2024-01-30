import React from "react";
import { useUser } from "../Context/UserContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import profileImage from '../../assets/UserProfilePics/5.png';

const NavBar = () => {
  const { currentUser } = useUser();
  const navigation = useNavigation();
  const route = useRoute();

  const getTabColor = (tabName) =>
    route.name === tabName ? "rgba(0, 255, 0, 0.2)" : "#fff";

  return (
    <View style={styles.navBar}>
      {/* Home Button */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="home" size={25} color={getTabColor("Home")} />
        <Text style={[styles.navText, { color: getTabColor("Home") }]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* Categories Button */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("CategoriesPage")}
      >
        <Icon name="category" size={25} color={getTabColor("CategoriesPage")} />
        <Text
          style={[styles.navText, { color: getTabColor("CategoriesPage") }]}
        >
          Categories
        </Text>
      </TouchableOpacity>

      {/* Downloads Button */}
      <TouchableOpacity style={styles.navItem}>
        <Icon name="favorite" size={25} color={getTabColor("FavoritesPage")} />
        <Text style={[styles.navText, { color: getTabColor("FavoritesPage") }]}>
          Favorites
        </Text>
      </TouchableOpacity>

     {/* Profile Button */}
     <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <Image source={currentUser?.image ||profileImage} style={styles.profilePic} />
        <Text style={[styles.navText, { color: getTabColor("ProfilePage") }]}>
          {currentUser?.name || "You"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    height: 60,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
  },
  profilePic: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
    borderRadius: 15, // Half of width/height to make it circular
  },
});

export default NavBar;
