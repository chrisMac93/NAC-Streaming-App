import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import Icon from "react-native-vector-icons/MaterialIcons";
import VeracityFilm from "../../assets/Films/Veracity_ShortFilm.mp4";

const FullScreenVideoPlayer = ({ navigation }) => {
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };

    lockOrientation();
    StatusBar.setHidden(true);

    hideControlsAfterTimeout();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT); // Lock to portrait on unmount
      StatusBar.setHidden(false);
      clearTimeout(this.controlsTimer);
    };
  }, []);

  const hideControlsAfterTimeout = () => {
    clearTimeout(this.controlsTimer);
    this.controlsTimer = setTimeout(() => {
      setControlsVisible(false);
    }, 5000);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setStatus((prevStatus) => ({
      ...prevStatus,
      shouldPlay: !prevStatus.shouldPlay,
    }));
    hideControlsAfterTimeout();
  };

  const handleRewind = () => {
    const newPosition = (status.positionMillis || 0) - 10000; // Rewind by 10 seconds
    if (newPosition >= 0) {
      this.videoRef.setPositionAsync(newPosition);
    }
  };

  const handleFastForward = () => {
    const newPosition = (status.positionMillis || 0) + 10000; // Fast forward by 10 seconds
    if (newPosition <= status.playableDurationMillis) {
      this.videoRef.setPositionAsync(newPosition);
    }
  };

  const handleClose = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
    navigation.goBack();
  };

  const toggleControls = () => {
    if (controlsVisible) {
      setControlsVisible(false);
    } else {
      setControlsVisible(true);
      hideControlsAfterTimeout(); // Reset the timer when showing the controls
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoTouchable} onPress={toggleControls} activeOpacity={1}>
        <Video
          ref={(ref) => {
            this.videoRef = ref;
          }}
          source={VeracityFilm}
          style={styles.video}
          resizeMode="cover"
          shouldPlay={isPlaying}
          onPlaybackStatusUpdate={(statusUpdate) => setStatus(statusUpdate)}
        />
        {controlsVisible && (
          <View style={styles.overlay}>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Icon name="close" size={25} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.castButton}>
              <Icon name="cast" size={25} color="#FFF" />
            </TouchableOpacity>
            <View style={styles.controlGroup}>
              <TouchableOpacity
                onPress={handleRewind}
                style={styles.controlButton}
              >
                <Icon name="replay-10" size={45} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePlayPause}
                style={styles.controlButton}
              >
                <Icon
                  name={isPlaying ? "pause" : "play-arrow"}
                  size={45}
                  color="#FFF"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleFastForward}
                style={styles.controlButton}
              >
                <Icon name="forward-10" size={45} color="#FFF" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.settingsButton}>
              <Icon name="settings" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
      )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FullScreenVideoPlayer;
