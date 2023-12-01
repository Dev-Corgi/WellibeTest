import React, { useState } from "react";
import { StyleSheet, View,Image,Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import Ic_Check from "../assets/img/Ic_Check.png";
import Ic_Reload from "../assets/img/Ic_Reload.png";
import Ic_Gear2 from "../assets/img/Ic_Gear2.png";
const fullWidth = 326;

const EmptyPlanComponent = ({}) => {
  return (
    <View style={styles.view}>
        <View style = {styles.addButton}>
            <Text style = {styles.buttonText}>플랜 추가하기</Text>
        </View>
        <Text style = {styles.subtext}>또 다른 플랜을 추가해 보세요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    view:{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 325,
      height: 170,
      borderWidth: 1,  // 외각선의 너비
      borderStyle: 'dashed',  // 점선 스타일
      borderColor: Color.colorGray_400,  // 외각선 색상
      borderRadius: 10,
      overflow: "hidden"
    },

    addButton:{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 61,
      width: 115,
      height: 32,
      backgroundColor: "rgba(244,183,17,0.1)"
    },

    buttonText:{
        position: "relative",
        fontFamily: FontFamily.PretendardMedium,
        color: Color.orange,
        fontSize:14
    },

    subtext:{
        position: "relative",
        fontFamily: FontFamily.PretendardMedium,
        color: Color.colorGray_400,
        marginTop: 15,
        fontSize:14
    }
});

export default EmptyPlanComponent;
