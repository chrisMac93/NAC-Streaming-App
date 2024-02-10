import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [carouselCompleted, setCarouselCompleted] = useState(false);

  const handleTierSelection = (tier) => {
    console.log("Selected Tier:", tier);
    // Navigate to a different screen or perform sign-up logic
  };

  const handleScroll = (event) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide >= 2) {
      // Assuming there are 3 slides before the email input
      setCarouselCompleted(true);
    }
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.carousel}
    >
      <View style={[styles.slide, { width }]}>
        <Text>Welcome to Our App!</Text>
      </View>
      <View style={[styles.slide, { width }]}>
        <Text>Why You'll Love Our App</Text>
      </View>
      <View style={[styles.slide, { width }]}>
        <Text>Choose Your Subscription Tier</Text>
        <TouchableOpacity onPress={() => handleTierSelection("Free")}>
          <Text>Free Tier</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTierSelection("Premium")}>
          <Text>Premium Tier</Text>
        </TouchableOpacity>
      </View>
      {carouselCompleted && (
        <View style={[styles.slide, { width }]}>
          <Text>Get Started</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Proceed with email:", email)}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
});

export default SignUpPage;