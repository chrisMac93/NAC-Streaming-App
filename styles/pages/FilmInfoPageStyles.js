import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoContainer: {
    width: "100%",
    height: 300,
    position: "relative", // This is important
  },
  backButton: {
    position: "absolute",
    top: 25,
    zIndex: 10, // Ensure the button is above other elements
    padding: 10,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  progressBarContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: 2,
    position: "absolute",
    bottom: 34,
  },
  progressBar: {
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    height: "100%",
  },
  volumeControl: {
    position: "absolute",
    bottom: 40,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 5,
    borderRadius: 15,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 10,
  },
  actionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "rgba(255,255,255,0.1)",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 5,
  },
  iconText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  synopsis: {
    color: "#ccc",
    marginBottom: 20,
  },
  additionalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "Center",
    padding: 10,
  },
  similarSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  similarSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  similarItem: {
    marginRight: 10,
  },
  similarItemImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
});
