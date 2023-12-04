import React, { useState, useEffect, useRef,useContext } from "react";
import {
  DeviceEventEmitter,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import AlarmExample from "../assets/img/AlarmExample.png";
import RegistrationTooltip from '../components/RegistrationTooltip';
import NavigationHeader from "../components/NavigationHeader";
import AlarmTimer from "../components/AlarmTimer";
import { ScreenNameContext } from "../store/ScreenNameContext";
const TimerSetScreen = () => {

  const hours= Array.from({ length: 25 }, (_, index) => 0 + index);
  const minutes= Array.from({ length: 61 }, (_, index) => 0 + index);
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const navigation = useNavigation();

  useEffect(() => {
    setScreenName("알림 설정")
    }, [])

  return (
    <View style={styles.view}>
              <NavigationHeader style={{marginTop: 41, marginBottom:19}}></NavigationHeader>
      <RegistrationTooltip
        title={"작심삼일\n벗어날 수 있도록 도와드려요"}
        message = {"언제든 변경할 수 있어요"}
        ></RegistrationTooltip>
        <Image style={styles.alarmImage} source={AlarmExample}></Image>
     <AlarmTimer style={{marginTop: 39}}></AlarmTimer>
      <Button1
        style={{
          position: "absolute",
          bottom: 105,
          backgroundColor: "#FF705C",
        }}
        text={"다음에 할게요"}
        onPress={() => {}}
      ></Button1>
      <Button1
        style={{ position: "absolute", bottom: 36 }}
        text={"다음"}
        onPress={() => {navigation.navigate("HomeScreen")}}
      ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Color.white(1),
    width: "100%",
    height: "100%",
  },

  contentFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black(1),
    lineHeight: 34,
    width: "100%",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
  },

  img: {
    marginTop: 26,
    width: 180,
    height: 192,
  },

  guideTable: {
    display: "flex",
    gap: 17,
    marginTop: 31,
  },

  guideLine: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  guideCheckEmoji: {
    width: 20,
    height: 20,
  },

  guideText: {
    fontFamily: "PretendardRegular",
    fontSize: 14,
    color: Color.navy(1),
    opacity: 0.6,
  },

  alarmImage: {
    position: "relative",
    width: 326,
    height: 109,
    marginTop: 20
  },
  // 112,
  // 66
  wheelSectionFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems : "center",
    marginTop: 39,
    width: 290,
    height: 176,
    overflow: "hidden",
  },

  middle: {
    position: "relative",
    width: 66,
    textAlign: "center",
    fontFamily: FontFamily.PretendardBold,
    fontSize: 40,
    color: Color.black(1),
  },

  wheelLabel:{
    fontFamily: FontFamily.PretendardBold,
    fontSize: 40,
    color: Color.black(1),
  }
});

export default TimerSetScreen;
