import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const fullWidth = 326;

const ProgressBar = ({ style, progress = 0 }) => {
  return (
    <View style={[styles.progressbarOut, style]}>
      <View
        style={[styles.progressbarIn, { width: (fullWidth / 100) * progress }]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbarOut: {
    width: fullWidth,
    height: 3,
    borderRadius: 500,
    backgroundColor: Color.colorWhitesmoke_100,
  },

  progressbarIn: {
    height: 3,
    borderRadius: 500,
    backgroundColor: Color.colorKhaki,
  },
});

export default ProgressBar;
