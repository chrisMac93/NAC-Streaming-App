// src/components/ProfilePage.js

import { useState } from "react";
import { useUser } from "../Context/UserContext";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import NavBar from "../components/NavBar";
import profileImage from "../../assets/UserProfilePics/5.png";
import ProfileSwitchModal from "../components/ProfileSwitchModal";

const ProfilePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { currentUser, setCurrentUser, clearCurrentUser, profiles } = useUser();
  const navigation = useNavigation();

  // Dummy data for downloads
  const downloads = new Array(5).fill(null).map((_, index) => ({
    id: String(index),
    imageUrl: `https://source.unsplash.com/random/120x180?sig=${index}`,
  }));

  const handleModalClose = () => setModalVisible(false);

  const handleProfileSelect = (profile) => {
    setCurrentUser(profile);
    handleModalClose();
  };

  const handleSignOut = () => {
    clearCurrentUser();
    navigation.navigate("LoginSignup");
  };

  const handleUsernameClick = () => {
    setModalVisible(!modalVisible);
  };

  const options = [
    { name: "Manage Profile", icon: "person" },
    { name: "Settings", icon: "settings" },
    { name: "Account", icon: "account-circle" },
    { name: "Help", icon: "help" },
    { name: "Sign Out", icon: "exit-to-app", action: handleSignOut },
  ];

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={currentUser?.image || profileImage}
          style={styles.profilePic}
        />
        <TouchableOpacity
          onPress={handleUsernameClick}
          style={styles.usernameContainer}
        >
          <Text style={styles.profileName}>{currentUser?.name || "You"}</Text>
          <Icon name="arrow-drop-down" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Downloads Section */}
      <Text style={styles.sectionTitle}>Downloads</Text>
      <FlatList
        data={downloads}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.downloadImage} />
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Options */}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={option.action}
        >
          <Icon name={option.icon} size={20} color="#fff" />
          <Text style={styles.optionText}>{option.name}</Text>
          <Icon
            name="keyboard-arrow-right"
            size={25}
            color="#fff"
            style={styles.optionArrow}
          />
        </TouchableOpacity>
      ))}
      <NavBar />
      <ProfileSwitchModal
        visible={modalVisible}
        onClose={handleModalClose}
        profiles={profiles} // Pass your profiles data
        onProfileSelect={handleProfileSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  profileHeader: {
    alignItems: "center", // Center items vertically and horizontally
    justifyContent: "center",
    paddingVertical: 20, // Padding on top and bottom
    paddingHorizontal: 20,
    marginTop: 25, // Padding on sides (optional, adjust as needed)
  },
  profilePic: {
    width: 100, // Increase the width
    height: 100, // Increase the height
    borderRadius: 50, // Make it circular (half of width/height)
    marginBottom: 10, // Space between image and name
  },
  profileName: {
    fontSize: 24, // Increase font size
    color: "#fff",
    textAlign: "center", // Center the text
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 20,
    marginTop: 10,
  },
  downloadImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginLeft: 15,
    marginTop: 10,
  },
  usernameContainer: {
    flexDirection: "row", // Align username and arrow icon horizontally
    alignItems: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent", // Transparent background
    width: "100%", // Full width of the screen
  },
  optionText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
    flex: 1, // Take up remaining space
  },
  optionArrow: {
    // Style for the right arrow icon
  },
});

export default ProfilePage;
