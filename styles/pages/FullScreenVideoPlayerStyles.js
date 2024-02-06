import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullScreenTouchable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Ensure this is behind everything else
  },
  video: {
    width: "100%",
    height: "100%",
  },
  videoTouchable: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  castButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  playPauseButton: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
  },
  rewindButton: {
    position: "absolute",
    left: 20,
    bottom: 60,
  },
  fastForwardButton: {
    position: "absolute",
    right: 20,
    bottom: 60,
  },
  settingsButton: {
    position: "absolute",
    top: 20,
    right: 60,
  },

  controlGroup: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: "50%", // Adjust this value as needed
    left: "47%",
    transform: [{ translateX: -50 }, { translateY: 50 }], // Adjust for centering
  },
  controlButton: {
    marginHorizontal: 10, // Adjust the space between buttons
  },
});
