import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
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
