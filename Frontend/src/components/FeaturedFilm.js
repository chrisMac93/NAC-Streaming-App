import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import featureImage from "../../assets/Main.jpg";
import FullScreenVideoPlayer from "../Pages/FullScreenVideoPlayer";

const windowWidth = Dimensions.get("window").width; // Get window width

const FeaturedFilm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
        <Image source={featureImage} style={styles.image} />
      <View style={styles.overlay}>
        {/* Left Button */}
        <View style={styles.buttonContainerLeft}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FilmInfo")}>
            <Icon name="info" size={20} color="#fff" />
            <Text style={styles.buttonText}>Info</Text>
          </TouchableOpacity>
        </View>
        {/* Right Button */}
        <View style={styles.buttonContainerRight}>
          <TouchableOpacity style={[styles.button, styles.playButton]} onPress={() => navigation.navigate("FSVideoPlayer")}>
            <Icon name="play-arrow" size={20} color="#fff" />
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.9, // 90% of the screen width
    height: windowWidth * 1.2, // Height relative to the width
    position: "relative",
    alignSelf: "center",
    borderRadius: 10, // Rounded corners
    overflow: "hidden", // Ensures the image corners are also rounded
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 40, // For Android shadow
    borderColor: "#fff", // Thin white border
    borderWidth: 0.5,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
  },
  buttonContainerLeft: {
    position: "absolute",
    bottom: 20,
    left: 0,
  },
  buttonContainerRight: {
    position: "absolute",
    bottom: 20,
    right: 0,
  },
  playButton: {
    backgroundColor: '#000',
    paddingHorizontal: 30.
  },
});

export default FeaturedFilm;
