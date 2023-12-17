import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Color, FontFamily,height } from "../GlobalStyles";

//채팅 부분에 있는 메세지 버블 컴포넌트

const MessageBubble = ({message}) => {
  return (
    <View style={styles.message}>
      <View style={[styles.cloud]}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    flexDirection: "row",
  },
  
  cloud: {
    maxWidth: 270,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: Color.white(1),
  },

  text: {
    fontSize: 14 * height,
    fontFamily: FontFamily.PretendardRegular,
    lineHeight: 18,
    color: Color.black(1),
  },
});

export default MessageBubble;
