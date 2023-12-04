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

const SelectionList = ({ selections, style, onSelect,isMulti = false, resetIndex = null }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentIndexes, setCurrentIndexes] = useState([]);

  function handleSelect (index) {
    setCurrentIndex(index);

    if(isMulti){
      if(index == resetIndex){
        setCurrentIndexes([index]);
      }
     
      else{
        let newArray = [...currentIndexes];
        newArray =  newArray.filter(item => item !== resetIndex);
        if(currentIndexes.includes(index)){
          newArray =  newArray.filter(item => item !== index);
        }
        else{
          newArray.push(index);
        }
     setCurrentIndexes(newArray)
      }
     onSelect();
    }

    else{
     setCurrentIndexes([index]);
     onSelect();
    }
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
                  currentIndexes.includes(index)
                    ? Color.primary_700(1)
                    : Color.gray_100(1),
              },
            ]}
            onPress={() => handleSelect(index)}
          >
            <Text
              style={[
                styles.text,
                { color: currentIndexes.includes(index) ? Color.white(1) : Color.black(1) },
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
    backgroundColor: Color.gray_100(1),
  },

  selectionText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
  },
});

export default SelectionList;
