import React,{useState} from "react";
import {Pressable, View,Text} from "react-native";

//텍스트 탭 메뉴 컴포넌트

const TextTabMenu = ({ list, gap ,currentIndex,setCurrentIndex, unActiveStyle,activeStyle,style }) => {

  return (
    <View style={[{position: "relative", display: "flex", flexDirection: "row", gap: gap},style]}>
      {list.map((comp, index) => {
       return <Pressable
          key={index}
          onPress={() => setCurrentIndex(index)}
        >
       { index == currentIndex ?
          <Text style = {activeStyle}>{comp}</Text> :
          <Text style = {unActiveStyle}>{comp}</Text>
        }
        </Pressable>;
      })}
    </View>
  );
};

export default TextTabMenu;
