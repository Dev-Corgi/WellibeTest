import React, { useState } from "react";
import { StyleSheet, View,Image,Text, Pressable } from "react-native";
import { Color, FontFamily,height } from "../GlobalStyles";
import Ic_Check from "../assets/img/Ic_Check.png";
import Ic_Reload from "../assets/img/Ic_Reload.png";
import Ic_Gear2 from "../assets/img/Ic_Gear2.png";
import { useNavigation } from "@react-navigation/native";

//플랜 변경 화면에 있는 플랜 컴포넌트

const PlanComponent = ({ isActive, category, title, season, startDuration, endDuration,backgroundImg}) => {
  
  const navigation = useNavigation();
    return (
    <View style={styles.view}>
        <Image style = {styles.backgroundImg} source = {backgroundImg}></Image>
        <View style = {styles.planStateFrame}>
            <Image style = {styles.checkIcon} source = {isActive ? Ic_Check : Ic_Reload}></Image>
            <Text style = {styles.planText}>{isActive ? "현재 플랜" : "플랜 변경"}</Text>
        </View>
        <Pressable onPress={() =>navigation.navigate("PlanChangingScreen")}>
        <Image style = {styles.settingIcon} source = {Ic_Gear2}></Image>
        </Pressable>
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
      backgroundColor: Color.primary_700(1)
    },

    checkIcon:{
        position: "relative",
        width: 12,
        height: 12
    },

    planText:{
        position: "relative",
       fontSize: 12 * height,
       fontFamily: FontFamily.PretendardSemiBold,
       color: Color.white(1)
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
       fontSize: 14 * height,
       fontFamily: FontFamily.PretendardRegular,
       color: Color.white(1)
    },

    text2:{
        position: "absolute",
        right: 44,
        top: 195,
       fontSize: 20 * height,
       fontFamily: FontFamily.PretendardBold,
       color: Color.white(1)
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
        backgroundColor: Color.black(0.2)
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
       fontSize: 12 * height,
       fontFamily: FontFamily.PretendardBold,
       color: Color.white(1)
    },

    durationText:{
        position: "relative",
       fontSize: 12 * height,
       fontFamily: FontFamily.PretendardRegular,
       color: Color.white(1)
    }
});

export default PlanComponent;
