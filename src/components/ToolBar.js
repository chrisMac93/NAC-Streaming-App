import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import logoImage from "../../assets/moneytree.png"; 

import styles from '../../styles/components/ToolBarStyles';

const ToolBar = () => {
  const [selectedFilter, setSelectedFilter] = useState("Movies");

  const FilterButton = ({ label }) => {
    const isSelected = selectedFilter === label;

    return (
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setSelectedFilter(label)}
      >
        <Text
          style={[styles.filterText, isSelected && styles.selectedFilterText]}
        >
          {label}
        </Text>
        {isSelected && <View style={styles.underline} />}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.topBar}>
        <View style={styles.iconsContainer}>
          {/* Cast Icon */}
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="cast" size={30} color="#fff" />
          </TouchableOpacity>

          {/* Company Logo */}
          <Image source={logoImage} style={styles.logo} />

          {/* Search Icon */}
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="search" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          <FilterButton label="Series" />
          <FilterButton label="Movies" />
          <FilterButton label="Shorts" />
        </View>
      </View>
    </>
  );
};

export default ToolBar;
