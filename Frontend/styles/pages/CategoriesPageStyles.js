import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  film: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },
  placeholder: {
    backgroundColor: "transparent", // or any other styling you want for placeholders
  },
  row: {
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalView: {
    marginTop: 200,
    marginLeft: 50,
    width: "75%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 5,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItem: {
    padding: 10,
  },
  modalText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
