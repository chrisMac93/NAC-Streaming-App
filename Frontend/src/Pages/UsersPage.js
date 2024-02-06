import React from "react";
import { useUser } from "../Context/UserContext";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from '../../styles/pages/UsersPageStyles';

const UsersPage = ({ navigation }) => {
  const { setCurrentUser } = useUser();

  const selectProfile = (profile) => {
    setCurrentUser(profile);
    navigation.navigate("Home");
  };

  // Dummy data for user profiles
  const profiles = [
    { id: "1", name: "Mom", image: require("../../assets/UserProfilePics/1.png") },
    { id: "2", name: "Dad", image: require("../../assets/UserProfilePics/2.png") },
    {
      id: "3",
      name: "Bobby",
      image: require("../../assets/UserProfilePics/3.png"),
    },
    {
      id: "4",
      name: "Johnny",
      image: require("../../assets/UserProfilePics/4.png"),
    },
    {
      id: "5",
      name: "Sarah",
      image: require("../../assets/UserProfilePics/5.png"),
    },
    // Add more profiles as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Profile</Text>
      <View style={styles.profileContainer}>
        {profiles.map((profile) => (
          <TouchableOpacity
            key={profile.id}
            style={styles.profile}
            onPress={() => selectProfile(profile)}
          >
            <Image source={profile.image} style={styles.profileImage} />
            <Text style={styles.profileName}>{profile.name}</Text>
          </TouchableOpacity>
        ))}

        {/* Add new profile */}
        <TouchableOpacity
          style={styles.profile}
          onPress={() => {
            /* Implement profile selection functionality */
          }}
        >
          <View style={styles.addNewProfile}>
            <Icon name="add" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsersPage;
