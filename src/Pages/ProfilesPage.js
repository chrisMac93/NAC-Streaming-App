import React from "react";
import { useProfiles } from "../Context/ProfilesContext";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from '../../styles/pages/UsersPageStyles';

const ProfilesPage = ({ navigation }) => {
  const { setCurrentProfile, profiles } = useProfiles();

  const selectProfile = (profile) => {
    setCurrentProfile(profile);
    navigation.navigate("Home");
  };

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

export default ProfilesPage;
