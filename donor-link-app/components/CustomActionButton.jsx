import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomActionButton = ({handlePress, text}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 360,
        height: 40,
        backgroundColor: "#87A7AE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 12, color: "#FFF", fontWeight: 700 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomActionButton;
