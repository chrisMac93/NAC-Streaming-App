import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import Icon from "react-native-vector-icons/MaterialIcons";
import VeracityFilm from "../../assets/Films/Veracity_ShortFilm.mp4";

const FullScreenVideoPlayer = ({ navigation }) => {
  const [status, setStatus] = useState({});
  const [controlsVisible, setControlsVisible] = useState(true);

  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (evt) => {
        ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
        );
        StatusBar.setHidden(true);
      }
    );

    const timer = setTimeout(() => setControlsVisible(false), 5000);

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
      StatusBar.setHidden(false);
      clearTimeout(timer);
    };
  }, []);

  const handlePlayPause = () => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      shouldPlay: !prevStatus.shouldPlay,
    }));
  };

  const handleRewind = () => {
    // Logic to rewind the video by 10 seconds
  };

  const handleFastForward = () => {
    // Logic to fast-forward the video by 10 seconds
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const toggleControls = () => setControlsVisible(!controlsVisible);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoTouchable} onPress={toggleControls}>
        <Video
          source={VeracityFilm}
          style={styles.video}
          resizeMode="contain"
          shouldPlay
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableOpacity>
      {controlsVisible && (
        <>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Icon name="close" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.castButton}>
            <Icon name="cast" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePlayPause}
            style={styles.playPauseButton}
          >
            <Icon
              name={status.isPlaying ? "pause" : "play-arrow"}
              size={35}
              color="#FFF"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRewind} style={styles.rewindButton}>
            <Icon name="replay-10" size={35} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFastForward}
            style={styles.fastForwardButton}
          >
            <Icon name="forward-10" size={35} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Icon name="settings" size={25} color="#FFF" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "cover",
  },
  videoTouchable: {
    flex: 1,
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  castButton: {
    position: "absolute",
    top: 10,
    right: 10,
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
    bottom: 20,
    right: 20,
  },
});

export default FullScreenVideoPlayer;
