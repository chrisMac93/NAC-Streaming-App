import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
