import { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import logoImage from "../../assets/moneytree.png"; // Adjust the path as necessary

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

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20, // Adjust as needed for status bar height
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  iconsContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flex: 0,
  },
  logo: {
    flex: 0,
    resizeMode: "contain",
    width: 150, // Adjust the width as necessary
    height: 150, // Adjust the height as necessary
    alignSelf: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  filterButton: {
    alignItems: "center", // Center text and underline
  },
  filterText: {
    color: "rgba(255,255,255, 0.5)",
    fontSize: 16,
  },
  selectedFilterText: {
    color: "#fff", // Change text color for selected filter
  },
  underline: {
    height: 2,
    width: "100%",
    backgroundColor: "rgba(0, 255, 0, 0.2)", // Underline color
    marginTop: 2, // Adjust space between text and underline
  },
});

export default ToolBar;
