import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, View, Text, Easing } from "react-native";
import { Color, FontFamily,height } from "../GlobalStyles";
import Button1 from "../components/Button1";
import { ScreenNameContext } from "../store/ScreenNameContext";
import NavigationHeader from "../components/NavigationHeader";
import PlanComponent from "../components/PlanComponent";
import EmptyPlanComponent from "../components/EmptyPlanComponent";
import BackImage1 from "../assets/img/BackImage1.png"
import BackImage2 from "../assets/img/BackImage2.png"

//일일 트레이닝 리포트 화면

const DailyTrainingReport = () => {

  const { screenName, setScreenName } = useContext(ScreenNameContext);

  const navigation = useNavigation();

  useEffect(() => {
  setScreenName("플랜 변경")
  }, [])

  return (
    <View style={styles.view}>
        <NavigationHeader style={{marginTop: 41}}></NavigationHeader>
       <View style = {styles.planList}>
        <PlanComponent isActive={true} category={"풍부한 표정 만들기"} title = {"밝고 자신감 있는 표정 만들기"} season={1} startDuration={"2023.02.03"} endDuration={"2023.03.03"} backgroundImg={BackImage1}></PlanComponent>
        <PlanComponent isActive={false} category={"풍부한 표정 만들기"} title = {"자연스럽게 웃는 표정 만들기"} season={1} startDuration={"2023.02.03"} endDuration={"2023.03.03"} backgroundImg={BackImage2}></PlanComponent>
        <EmptyPlanComponent></EmptyPlanComponent>
       </View>
        <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"저장"}
          onPress={() => {
          }}
        ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  planList: {
    position: "relative",
    marginTop: 28,
    display: "flex",
    flexDirection: "column",
    gap:12
  },

  headerFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 326,
    height: 49,
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
    fontSize: 20 * height,
    color: Color.black(1),
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
    fontSize: 22 * height,
    color: Color.black(1),
    lineHeight: 34,
    width: "100%",
    textAlign: "left",
    marginBottom: 20,
    marginTop: 20,
  },

  imageCheck: {
    position: "relative",
    width: 327,
    height: 409,
    borderRadius: 10,
    transform: [{ scaleX: -1 }],
  },
});

export default DailyTrainingReport;
