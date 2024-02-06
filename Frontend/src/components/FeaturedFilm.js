import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import featureImage from "../../assets/Main.jpg";

import styles from '../../styles/components/FeaturedFilmStyles';

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


export default FeaturedFilm;
