import { useState } from "react";
import { View, TextInput } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      addNewCountable(name);
      setName("");
    }
  };

  return (
    <View style={[CommonStyles.row, CommonStyles.container]}>
      <TextInput
        style={[CommonStyles.input, CommonStyles.input]}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <CountableButton label="Add" submit={handleSubmit} />
    </View>
  );
};
