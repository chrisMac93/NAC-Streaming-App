import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
