// src/components/ProfileSwitchModal.js
import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const screenHeight = Dimensions.get("window").height;

const ProfileSwitchModal = ({
  visible,
  onClose,
  profiles,
  onProfileSelect,
}) => {
  // Function to render each profile
  const renderProfile = ({ item }) => (
    <View style={styles.profileItem}>
      <TouchableOpacity onPress={() => onProfileSelect(item)}>
        <Image source={item.image} style={styles.profileImage} />
        <Text style={styles.profileName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        {/* Modal Title */}
        <Text style={styles.modalTitle}>Switch Profiles</Text>

        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Profiles Grid */}
        <FlatList
          data={profiles}
          renderItem={renderProfile}
          keyExtractor={(item) => item.id}
          numColumns={2} // Adjust number of columns
          contentContainerStyle={styles.profilesContainer}
        />

        {/* Add New Profile */}
        <TouchableOpacity style={styles.addNewProfile}>
          <Icon name="add" size={30} color="#fff" />
          <Text style={styles.addText}>Add Profile</Text>
        </TouchableOpacity>

        {/* Manage Profiles */}
        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageText}>Manage Profiles</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    bottom: 0, // Adjusted to bottom
    width: "100%",
    height: screenHeight / 2, // Adjust height
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 20,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  profilesContainer: {
    paddingHorizontal: 20,
  },
  profileItem: {
    alignItems: "center",
    margin: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    color: "#fff",
    marginTop: 5,
    textAlign: "center", // Center the text
  },
  addNewProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  addText: {
    marginLeft: 10,
    color: "#fff",
  },
  manageButton: {
    marginTop: 20,
    backgroundColor: "transparent",
  },
  manageText: {
    color: "#fff",
  },
});

export default ProfileSwitchModal;
