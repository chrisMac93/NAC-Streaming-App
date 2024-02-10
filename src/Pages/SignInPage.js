import React, { useState, useEffect, useRef } from "react";
import { auth } from "../../utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import loginBackground from "../../assets/loginSignup.jpg";
import logoImage from "../../assets/moneytree.png";
import styles from "../../styles/pages/LoginSignupPageStyles";

const SignInPage = ({ navigation }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setEmail("");
      setPassword("");
    });
    return unsubscribe;
  }, [navigation]);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("Logged in with:", userCredentials.user.email);
        navigation.navigate("Profiles");
      })
      .catch((error) => alert(error.message));
  };

  // const handleSignUp = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredentials) => {
  //       console.log("Registered with:", userCredentials.user.email);
  //       navigation.navigate("SubscriptionPage");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <ImageBackground
          source={loginBackground}
          style={styles.backgroundImage}
          onLoad={() => setImageLoaded(true)}
          onLoadStart={() => setImageLoaded(false)}
        >
          {isImageLoaded ? (
            <View style={styles.overlay}>
              <Image source={logoImage} style={styles.logo} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                onChangeText={handleEmailChange}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
              />
              <TextInput
                ref={passwordInputRef}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ccc"
                secureTextEntry
                onChangeText={handlePasswordChange}
                value={password}
                autoCapitalize="none"
                returnKeyType="go"
                onSubmitEditing={handleSignIn}
              />
              <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <View style={styles.signupPrompt}>
                <Text style={styles.signupText}>No account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpPage")}
                >
                  <Text style={styles.signupButton}> Sign up now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <ActivityIndicator size="large" color="#fff" />
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInPage;
