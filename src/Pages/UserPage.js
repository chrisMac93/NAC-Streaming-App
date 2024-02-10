// src/components/ProfilePage.js

import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useProfiles } from "../Context/ProfilesContext";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import NavBar from "../components/NavBar";
import profileImage from "../../assets/UserProfilePics/5.png";
import ProfileSwitchModal from "../components/ProfileSwitchModal";

import styles from "../../styles/pages/ProfilePageStyles";

const UserPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { currentProfile, setCurrentProfile, profiles } = useProfiles();

  const navigation = useNavigation();
  const { logOut } = useAuth();

  // Dummy data for downloads
  const downloads = new Array(5).fill(null).map((_, index) => ({
    id: String(index),
    imageUrl: `https://source.unsplash.com/random/120x180?sig=${index}`,
  }));

  const handleModalClose = () => setModalVisible(false);

  const handleProfileSelect = (profile) => {
    setCurrentProfile(profile);
    handleModalClose();
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginSignup" }],
        });
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error:", error);
      });
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
          source={currentProfile?.image || profileImage}
          style={styles.profilePic}
        />
        <TouchableOpacity
          onPress={handleUsernameClick}
          style={styles.usernameContainer}
        >
          <Text style={styles.profileName}>{currentProfile?.name || "You"}</Text>
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

export default UserPage;
