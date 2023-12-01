import React, { useState } from "react";
import { StyleSheet, View,Image,Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import Ic_Check from "../assets/img/Ic_Check.png";
import Ic_Reload from "../assets/img/Ic_Reload.png";
import Ic_Gear2 from "../assets/img/Ic_Gear2.png";
const fullWidth = 326;

const PlanComponent = ({ isActive, category, title, season, startDuration, endDuration,backgroundImg}) => {
  return (
    <View style={styles.view}>
        <Image style = {styles.backgroundImg} source = {backgroundImg}></Image>
        <View style = {styles.planStateFrame}>
            <Image style = {styles.checkIcon} source = {isActive ? Ic_Check : Ic_Reload}></Image>
            <Text style = {styles.planText}>{isActive ? "현재 플랜" : "플랜 변경"}</Text>
        </View>
        <Image style = {styles.settingIcon} source = {Ic_Gear2}></Image>
        <Text style = {styles.text1}>{category}</Text>
        <Text style = {styles.text2}>{title}</Text>
        <View style = {styles.bottomFrame}>
            <View style = {styles.bottomTextFrame}>
                <Text style = {styles.seasonText}>{season+"차 시즌"}</Text>
                <Text style = {styles.durationText}>{startDuration + "~" + endDuration}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    view:{
      position: "relative",
      width: 325,
      height: 170,
      borderRadius: 10,
      overflow: "hidden"
    },

    backgroundImg:{
        position: "absolute",
        width: "100%",
        height: "100%"
    },

    planStateFrame:{
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      left: 16,
      top: 15,
      width: 72,
      height: 23,
      borderRadius: 6,
      backgroundColor: Color.colorKhaki
    },

    checkIcon:{
        position: "relative",
        width: 12,
        height: 12
    },

    planText:{
        position: "relative",
       fontSize: 12,
       fontFamily: FontFamily.PretendardSemiBold,
       color: Color.white
    },

    settingIcon:{
       position: "absolute",
       right: 19,
       top: 11,
       width: 21,
       height: 21
    },

    text1:{
        position: "absolute",
        right: 44,
        top: 174,
       fontSize: 14,
       fontFamily: FontFamily.PretendardRegular,
       color: Color.white
    },

    text2:{
        position: "absolute",
        right: 44,
        top: 195,
       fontSize: 20,
       fontFamily: FontFamily.PretendardBold,
       color: Color.white
    },

    bottomFrame:{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 33,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.2)"
    },

    bottomTextFrame:{
       position: "relative",
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       width: 278,
    },

    seasonText:{
        position: "relative",
       fontSize: 12,
       fontFamily: FontFamily.PretendardBold,
       color: Color.white
    },

    durationText:{
        position: "relative",
       fontSize: 12,
       fontFamily: FontFamily.PretendardRegular,
       color: Color.white
    }
});

export default PlanComponent;
