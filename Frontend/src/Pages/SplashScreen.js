import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import logoImage from "../../assets/moneytree.png"; // Adjust the path as necessary

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
  },
});

export default SplashScreen;
