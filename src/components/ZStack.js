import React from "react";
import {View} from "react-native";

const ZStack = ({ children, style }) => {
  return (
    <View style={style}>
      {children.map((child, index) => {
        <View
          key={index}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          {child}
        </View>;
      })}
    </View>
  );
};

export default ZStack;
