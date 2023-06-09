import React from "react";
import { Text } from "react-native";

const TextComponent = ({text}) => {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
