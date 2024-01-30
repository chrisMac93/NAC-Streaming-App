import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import loginBackground from "../../assets/loginSignup.jpg";
import logoImage from "../../assets/moneytree.png";

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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for better text visibility
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    width: "80%",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  signupPrompt: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
  },
  signupButton: {
    color: "rgba(0, 255, 0, 0.7)",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginSignupPage;
