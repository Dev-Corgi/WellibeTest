import React, { useState, useEffect, useRef } from "react";
import {
  DeviceEventEmitter,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";
import { Color, FontFamily ,height} from "../GlobalStyles";
import RegistrationInfo from "../components/RegistrationInfo";
import { useNavigation } from "@react-navigation/native";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';
const PhotoAuth = () => {
  const navigation = useNavigation();

  const openCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      navigation.navigate("PhotoTakenScreen");
    } else {
      Alert.alert("카메라 접근 허용은 필수입니다.");
    }
  };

  return (
    <View style={styles.view}>
            <RegistrationTooltip
        style = {{marginTop: 90}}
        title={"더나은 서비스 이용을 위해서는\n사진 촬영이 필요해요"}
        message = {"변화 확인을 위해서는 사진 촬영이 필요해요."}
        ></RegistrationTooltip>
        <Image
          style={styles.img}
          source={require("../assets/img/AllowcationSplashImage.png")}
        ></Image>
        <View style={styles.guideTable}>
          <View style={styles.guideLine}>
            <Image
              style={styles.guideCheckEmoji}
              source={require("../assets/img/CheckAllowcation.png")}
            ></Image>
            <Text style={styles.guideText}>카메라 접근을 허용해 주세요</Text>
          </View>
          <View style={styles.guideLine}>
            <Image
              style={styles.guideCheckEmoji}
              source={require("../assets/img/CheckAllowcation.png")}
            ></Image>
            <Text style={styles.guideText}>
              안경을 쓰셨으면 안경을 벗어주세요
            </Text>
          </View>
          <View style={styles.guideLine}>
            <Image
              style={styles.guideCheckEmoji}
              source={require("../assets/img/CheckAllowcation.png")}
            ></Image>
            <Text style={styles.guideText}>
              제시된 가이드에 얼굴을 맞춰주세요
            </Text>
          </View>
        </View>
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
        onPress={() => openCameraHandler()}
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
    fontSize: 22 * height,
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
    fontSize: 14 * height,
    color: Color.navy(1),
    opacity: 0.6,
  },
});

export default PhotoAuth;
