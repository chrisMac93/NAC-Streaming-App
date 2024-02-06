// src/pages/FilmInfoPage.js
import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/MaterialIcons";
import FilmData from "../../assets/Json/filmData.json";

const FilmInfoPage = () => {
  const [muted, setMuted] = useState(true);
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const navigation = useNavigation();

  const videoRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      // This function is called when the screen comes into focus
      const restartVideo = async () => {
        if (videoRef.current) {
          setMuted(true);
          await videoRef.current.playAsync(); // Ensure this method exists or use appropriate method to play video
        }
      };
  
      restartVideo();
  
    }, [])
  );

  const handlePlaybackStatusUpdate = (status) => {
    setPlaybackStatus(status);
  };

  const getProgress = () => {
    if (playbackStatus) {
      const progress =
        playbackStatus.positionMillis / playbackStatus.durationMillis;
      return isNaN(progress) ? 0 : progress;
    }
    return 0;
  };

  const stopVideoAndNavigate = async () => {
    await videoRef.current?.stopAsync(); // Stop the video
    navigation.navigate("FSVideoPlayer"); // Then navigate
  };

  return (
    <ScrollView style={styles.container}>
      {/* Video Player */}
      <View style={styles.videoContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={25} color="#FFF" />
        </TouchableOpacity>
        <Video
          ref={videoRef}
          source={require("../../assets/Films/VeracityTrailer.mp4")}
          style={styles.video}
          isMuted={muted}
          shouldPlay
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          resizeMode="cover"
          isLooping
        />
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, { width: `${getProgress() * 100}%` }]}
          />
        </View>
        <TouchableOpacity
          style={styles.volumeControl}
          onPress={() => setMuted(!muted)}
        >
          <Icon
            name={muted ? "volume-off" : "volume-up"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Film Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{FilmData.title}</Text>
        <Text
          style={styles.details}
        >{`${FilmData.year} | ${FilmData.rating} | ${FilmData.length} | ${FilmData.genre}`}</Text>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={stopVideoAndNavigate}
          >
            <Icon name="play-arrow" size={20} color="#fff" />
            <Text style={styles.buttonText}>Watch Now</Text>
          </TouchableOpacity>
        </View>

        {/* Synopsis */}
        <Text style={styles.synopsis}>{FilmData.synopsis}</Text>

        {/* Additional Actions */}
        <View style={styles.additionalActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="favorite-outline" size={25} color="#fff" />
            <Text style={styles.iconText}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="star-outline" size={25} color="#fff" />
            <Text style={styles.iconText}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share" size={25} color="#fff" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="download" size={25} color="#fff" />
            <Text style={styles.iconText}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Explore Similar Stories Section */}
      <View style={styles.similarSection}>
        <Text style={styles.similarSectionTitle}>Explore Similar Stories</Text>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5]} // Array to generate list
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.similarItem}>
              <Image
                source={{
                  uri: `https://source.unsplash.com/random/120x180?sig=${item}`,
                }}
                style={styles.similarItemImage}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default FilmInfoPage;
