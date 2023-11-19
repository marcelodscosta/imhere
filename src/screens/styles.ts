import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  eventName: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 32,
    marginLeft: 18
  },
  dateName: {
    color: 'white',
    paddingLeft: 18
  },

  form: {
    flexDirection: "row",
    margin: 18,
  },
  textInput: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    height: 56,
    color: "#fff",
    fontSize: 16,
    padding: 12,
    flex: 1
  },

  buttonText: {
    color: "white",
    fontWeight: "400",
    fontSize: 18
  },

  button: {
    backgroundColor: "green",
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 1
  }
});