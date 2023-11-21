import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const SelectionList = ({ selections, style, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  function handleSelect (index) {
    setCurrentIndex(index);
    onSelect();
  }

  return (
    <View style={[styles.view, style]}>
      {selections.map((selection, index) => {
        return (
          <Pressable
            key={index}
            style={[
              styles.selectionBox,
              {
                backgroundColor:
                  currentIndex == index
                    ? Color.colorKhaki
                    : Color.colorWhitesmoke_100,
              },
            ]}
            onPress={() => handleSelect(index)}
          >
            <Text
              style={[
                styles.text,
                { color: currentIndex == index ? Color.white : Color.black },
              ]}
            >
              {selection}
            </Text>
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
    width: 327,
    gap: 10
  },

  selectionBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    height: 52,
    backgroundColor: Color.colorWhitesmoke_100,
  },

  selectionText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
  },
});

export default SelectionList;
