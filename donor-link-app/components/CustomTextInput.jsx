import React from "react";
import { Text, TextInput } from "react-native";

const CustomTextInput = ({ value, setValue, placeholder, label }) => {
  return (
    <>
      <Text style={{fontSize: 12}}>{label}</Text>
      <TextInput
        style={{
          height: 40,
          width: 360,
          borderColor: "gray",
          borderWidth: 1,
          placeholderTextColor: "gray",
          padding: 10,
          borderRadius: 10,
          marginTop: 5
        }}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomTextInput;
