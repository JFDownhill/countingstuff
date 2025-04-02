import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  textItem: {
    fontSize: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "lightblue",
    borderWidth: 3,
    borderRadius: 5,
    margin: 5,
    paddingEnd: 20,
    paddingStart: 20,
  },
  container: {
    padding: 12,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  nameColumn: {
    flex: 0.8,
    alignItems: "center",
  },
  buttonColumn: {
    flex: 0.2,
    justifyContent: "space-around",
  },
  removeButton: {
    backgroundColor: "#ff6b6b",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  removeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
