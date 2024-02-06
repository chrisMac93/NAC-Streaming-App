import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    height: 60,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
  },
  profilePic: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
    borderRadius: 15, // Half of width/height to make it circular
  },
});
