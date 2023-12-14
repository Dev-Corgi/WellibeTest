import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Color, FontFamily,height } from "../GlobalStyles";

const ImageSelectionList = ({ images, style, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  function handleSelect(index) {
    setCurrentIndex(index);
    onSelect();
  }

  return (
    <View style={[styles.view, style]}>
      {images.map((image, index) => {
        return (
          <Pressable
            key={index}
            style={[styles.selectionBox]}
            onPress={() => handleSelect(index)}
          >
            <Image style={styles.selectionImage} source={image}></Image>
            {currentIndex == index &&
              <Image
              style={styles.checkEmoji}
              source={require("../assets/img/Check_Unactive.png")}
            ></Image>}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    gap: 13,
    flexWrap: "wrap",
    width: 340,
    justifyContent: "space-between",
  },

  selectionBox: {
    position: "relative",
    borderRadius: 12,
    width: 163,
    height: 215,
    overflow: "hidden"
  },

  checkEmoji: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 20,
    height: 20,
  },

  selectionImage: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSelectionList;
