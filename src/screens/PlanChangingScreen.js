import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Text
} from "react-native";
import { Color, FontFamily, FontSize,height } from "../GlobalStyles";
import Button1 from "../components/Button1";
import { useNavigation } from "@react-navigation/native";
import TextTabMenu from "../components/TextTabMenu";
import Calender from "../assets/img/CalenderImage.png";
import PlanTable from "../assets/img/PlanTable.png";
import AlarmTimer from "../components/AlarmTimer";
import { Switch } from 'tamagui' // or '@tamagui/switch'
const PlanChangingScreen = () => {
  const navigation = useNavigation();
  const [tabState, setTabState] = useState(0);
  const [isModal, setisModal] = useState(false)
  return (
    <View style={styles.view}>
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require("../assets/img/PlanCheck.png")}
        ></Image>
        <Text
          style={{
            position: "relative",
            marginLeft: 31,
            marginTop: 147,
            fontFamily: "PretendardRegular",
            color: Color.white(1),
            fontSize: 16 * height,
          }}
        >
          풍부한 표정 만들기
        </Text>
        <Text
          style={{
            position: "relative",
            marginLeft: 31,
            marginTop: 2,
            fontFamily: "PretendardBold",
            color: Color.white(1),
            fontSize: 22 * height,
          }}
        >
          밝고 자신감있는 표정 만들기
        </Text>
        <View style={styles.bannerForeground}>
          <Text
            style={{
              fontFamily: "PretendardBold",
              fontSize: 14 * height,
              color: Color.white(1),
            }}
          >
            1차 시즌
          </Text>
          <Text
            style={{
              fontFamily: "PretendardRegular",
              fontSize: 14 * height,
              color: Color.white(1),
            }}
          >
            {"2023.02.03~2023.03.03"}
          </Text>
        </View>
      </View>
      <View style={styles.contentFrame}>
        <Text style={styles.alartTitle}>알림 설정</Text>
        <View style={styles.alarmFrame}>
          <Text style={styles.alartsubTitle}>푸시 알림</Text>
          <Switch backgroundColor={Color.primary_700()}>
            <Switch.Thumb animation="bouncy" backgroundColor={Color.white()} />
          </Switch>
        </View>
        <AlarmTimer style={{ marginTop: 40 }}></AlarmTimer>
      </View>

      <Button1
        style={{
          position: "absolute",
          bottom: 36,
          marginLeft: 27,
          backgroundColor: Color.system_400(),
        }}
        text={"플랜 삭제"}
        onPress={() => setisModal(true)}
      ></Button1>

{isModal &&
  <View style = {styles.modalLayer}>
      <View style = {styles.modalFrame}>
        <Text style = {styles.modalText1}>해당 플랜에서 진행한</Text>
        <Text style = {styles.modalText2}>모든 데이터가 사라집니다</Text>
        <Text style = {styles.modalText3}>정말 플랜을 삭제하시겠어요?</Text>
        <Pressable style = {styles.modalButton1} onPress={() => setisModal(false)}>
          <Text style = {styles.modalButton1Text}>삭제할게요</Text>
          </Pressable>
        <Pressable  style = {styles.modalButton2} onPress={() => setisModal(false)}>
        <Text style = {styles.modalButton2Text}>취소</Text>
        </Pressable>
      </View>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    width: "100%",
    height: "100%",
  },

  banner: {
    position: "relative",
    width: "100%",
    height: 261,
  },

  bannerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  bannerForeground: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.black(0.2),
    gap: 120,
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

  trainingTagsFrame: {
    marginTop: 31,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginLeft: 29,
  },

  trainingTag: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  trainingTagTitle: {
    fontFamily: "PretendardRegular",
    fontSize: 14 * height,
    color: Color.gray_500(1),
  },

  trainingTagInfo: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 6,
  },

  trainingTagInfoText: {
    fontFamily: "PretendardBold",
    fontSize: 12 * height,
    opacity: 1,
  },

  trainingTable: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 19,
  },

  trainingSetFrame: {
    position: "relative",
    width: 330,
    height: 54,
    marginLeft: 27,
  },

  trainingSetImoji: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 36,
    height: 36,
  },

  trainingSetTitle: {
    position: "absolute",
    left: 57,
    top: 2.5,
    fontFamily: "PretendardSemiBold",
    fontSize: 16 * height,
    color: Color.black(1),
  },

  trainingSetContent: {
    position: "absolute",
    left: 57,
    top: 25.5,
    fontFamily: "PretendardSemiBold",
    fontSize: 12 * height,
    color: Color.gray_400(1),
  },

  trainingSetDetailButton: {
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: Color.primary_500(0.1),
  },

  trainingSetDetailButtonText: {
    fontFamily: "PretendardMedium",
    fontSize: 12 * height,
    color: Color.primary_700(1),
  },
  trainingSetBottomLine: {
    position: "absolute",
    width: "100%",
    height: 1,
    bottom: 0,
    backgroundColor: Color.gray_100(1),
  },

  scrollRect: {
    width: "100%",
    height: 346,
    overflow: "hidden",
    marginTop: 25,
  },

  contentFrame: {
    display: "flex",
    flexDirection: "column",
    marginTop: 35.5,
    alignItems: "center",
  },

  alartTitle: {
    width: 310,
    fontFamily: FontFamily.PretendardBold,
    color: Color.black(),
    fontSize: 18 * height,
  },

  alarmFrame: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 23,
    width: 311,
    height: 28,
  },

  alartsubTitle: {
    fontFamily: FontFamily.PretendardRegular,
    color: Color.gray_400,
    fontSize: 16 * height,
  },

  switch: {},

  modalLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: Color.black(0.6),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  modalFrame: {
    backgroundColor: Color.white(),
    width: 278,
    height: 296,
    display: "flex",
    alignItems: "center",
    borderRadius: 16
  },

  modalText1: {
    fontFamily: FontFamily.PretendardRegular,
    fontSize: 18 * height,
    color : Color.black(),
    marginTop: 48
  },

  modalText2: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 18 * height,
    color : Color.black(),
    marginTop: 0
  },

  modalText3: {
    fontFamily: FontFamily.PretendardRegular,
    fontSize: 14 * height,
    color : Color.gray_400(),
    marginTop: 10
  },

  modalButton1: {
    width : 236,
    height : 49,
    backgroundColor: Color.system_400(),
    color: Color.white(),
    borderRadius: 10,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },

  modalButton1Text:{
    fontFamily : FontFamily.PretendardBold,
    fontSize: 14 * height,
    color: Color.white()
  },

  modalButton2Text:{
    fontFamily : FontFamily.PretendardBold,
    fontSize: 14 * height,
    color: Color.black()
  },

  modalButton2: {
    width : 236,
    height : 49,
    backgroundColor: Color.gray_100(),
    borderRadius: 10,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13
  },
});

export default PlanChangingScreen;
