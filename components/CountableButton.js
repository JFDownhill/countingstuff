import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";

export const CountableButton = ({ label, submit, type }) => {
  const getButtonStyle = () => {
    switch (type) {
      case "remove":
        return { backgroundColor: "#ff6b6b" };
      case "add":
        return { backgroundColor: "lightgreen" };
      case "subtract":
        return { backgroundColor: "#ffcc00" };
      default:
        return { backgroundColor: "lightblue" };
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={submit}
    >
      <Text style={CommonStyles.textItem}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    padding: 10,
  },
});
