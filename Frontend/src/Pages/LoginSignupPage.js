import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import loginBackground from "../../assets/loginSignup.jpg";
import logoImage from "../../assets/moneytree.png";

import styles from '../../styles/pages/LoginSignupPageStyles';

const LoginSignupPage = ({ navigation }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Set initial background to black */}
      <ImageBackground
        source={loginBackground}
        style={styles.backgroundImage}
        onLoad={() => setImageLoaded(true)}
        onLoadStart={() => setImageLoaded(false)}
      >
        {isImageLoaded ? (
          <View style={styles.overlay}>
            {/* Logo Image */}
            <Image source={logoImage} style={styles.logo} />

            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Users")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Google Login Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                /* Google login functionality */
              }}
            >
              <Text style={styles.buttonText}>Login with Google</Text>
            </TouchableOpacity>

            {/* Signup Prompt */}
            <View style={styles.signupPrompt}>
              <Text style={styles.signupText}>No account? </Text>
              <TouchableOpacity
                onPress={() => {
                  /* Signup functionality */
                }}
              >
                <Text style={styles.signupButton}>Sign up now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#fff" /> // Optional: Activity Indicator
        )}
      </ImageBackground>
    </View>
  );
};

export default LoginSignupPage;
