import React, { useState,useContext } from "react";
import { StyleSheet, View,Text,Image, Pressable } from "react-native";
import { Color,FontFamily,height } from "../GlobalStyles";
import backButton from "../assets/img/backButton_White.png";
import backButton_Black from "../assets/img/backButton.png"
import {useNavigation} from '@react-navigation/native';
import { ScreenNameContext } from "../store/ScreenNameContext";
const NavigationHeader = ({ color = Color.black(1), style }) => {

  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const navigation = useNavigation();

    const styles = StyleSheet.create({
        headerFrame: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 340,
         height: 30,
        },
      
        backButtonFrame: {
          position: "absolute",
          top: 5,
          left: -5,
          width: 18.6*1.3,
          height: 18.6*1.3,
        },

        backButton:{
           width: "100%",
           height: "100%"
        },
      
        headerTitle: {
          position: "relative",
          fontFamily: FontFamily.PretendardSemiBold,
          fontSize: 20 * height,
          color: color,
        },
      });

  return (
    <View style={[styles.headerFrame,style]}>
      <Pressable style = {styles.backButtonFrame} onPress={() => navigation.goBack()}>
      <Image style={styles.backButton} source={color == Color.black(1) ? backButton_Black : backButton}>
      </Image>
      </Pressable>
      <Text style={styles.headerTitle}>{screenName}</Text>
    </View>
  );
};



export default NavigationHeader;
