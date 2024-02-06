import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
