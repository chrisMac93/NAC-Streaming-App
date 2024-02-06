import React, { useEffect, useRef } from "react";
import { View, Image, Animated } from "react-native";
import logoImage from "../../assets/moneytree.png"; 

import styles from '../../styles/pages/SplashScreenStyles';

const SplashScreen = ({ navigation }) => {
  const logoFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    // Start the logo fade-in animation
    Animated.timing(logoFadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // After logo fades in, start fade-out animation
      Animated.timing(logoFadeAnim, {
        toValue: 0, // Fade out to 0
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        // Navigate to LoginSignup page after animations
        navigation.navigate("LoginSignup");
      });
    });
  }, [logoFadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.logoContainer, opacity: logoFadeAnim }}>
        <Image source={logoImage} style={styles.logo} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
