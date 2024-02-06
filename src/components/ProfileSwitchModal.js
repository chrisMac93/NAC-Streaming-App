// src/components/ProfileSwitchModal.js
import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from '../../styles/components/ProfileSwitchModalStyles';

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

export default ProfileSwitchModal;
