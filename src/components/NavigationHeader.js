import React, { useState } from "react";
import { StyleSheet, View,Text,Image } from "react-native";
import { Color,FontFamily } from "../GlobalStyles";
import backButton from "../assets/img/backButton_White.png";

const NavigationHeader = ({ color = Color.white, title = "헤더", style }) => {

    const styles = StyleSheet.create({
        headerFrame: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 326,
        //   height: 16,
         height: 30,
          overflow: "visible"
        },
      
        backButton: {
          position: "absolute",
          top: 5,
          left: 0,
          width: 7.65,
          height: 14.24,
        },
      
        headerTitle: {
          position: "relative",
          fontFamily: FontFamily.PretendardSemiBold,
          fontSize: 20,
          color: color,
        },
      });

  return (
    <View style={[styles.headerFrame,style]}>
      {/* <View style={styles.backButton}>
        <backButton width = {7.65} height = {14.24} stroke={color}></backButton>
      </View> */}
      <Image style={styles.backButton} source={backButton}>
      </Image>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};



export default NavigationHeader;
