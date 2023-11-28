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
import { Color, FontFamily } from "../GlobalStyles";
import RegistrationInfo from "../components/RegistrationInfo";
import { useNavigation } from "@react-navigation/native";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import Button1 from "../components/Button1";
import AlarmExample from "../assets/img/AlarmExample.png";
import WheelPickerExpo from "react-native-wheel-picker-expo";
const Registration12 = () => {

  const hours= Array.from({ length: 25 }, (_, index) => 0 + index);
  const minutes= Array.from({ length: 61 }, (_, index) => 0 + index);

  const navigation = useNavigation();

  const openCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      navigation.navigate("PhotoTakenScreen");
    } else {
      Alert.alert("카메라 접근 허용은 필수입니다.");
    }
  };

  async function handleRegistration() {
    openCameraHandler();
  }

  useEffect(() => {
    DeviceEventEmitter.emit("RegistrationReset", { data: "Custom event data" });
    DeviceEventEmitter.emit("RegistrationReady", { data: "Custom event data" });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener("RegistrationEvent", handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeAllListeners("RegistrationEvent");
    };
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {"작심삼일\n벗어날 수 있도록 도와드려요"}
      </Text>
      <RegistrationInfo text={"언제든 변경할 수 있어요"}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <Image style={styles.alarmImage} source={AlarmExample}></Image>
        <View style={styles.wheelSectionFrame}>
          <WheelPickerExpo
            height={350}
            width={112}
            initialSelectedIndex={12}
            items={hours.map((name) => ({ label: name, value: "" }))}
            onChange={({ item }) => {
              // onConfirm(item.label);
            }}
            renderItem={(props) => {
              return <Text style={styles.wheelLabel}>{props.label}</Text>;
            }}
          />
          <Text style = {styles.middle}>:</Text>
          <WheelPickerExpo
            height={350}
            width={112}
            initialSelectedIndex={30}
            items={minutes.map((name) => ({ label: name, value: "" }))}
            onChange={({ item }) => {
              // onConfirm(item.label);
            }}
            renderItem={(props) => {
              return <Text style={styles.wheelLabel}>{props.label}</Text>;
            }}
          />
        </View>
      </View>
      <Button1
        style={{ position: "absolute", bottom: 70, backgroundColor: "#FF705C" }}
        text={"다음에 할게요"}
        onPress={() => {}}
      ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
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
    color: Color.black,
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
    color: Color.navy,
    opacity: 0.6,
  },

  alarmImage: {
    position: "relative",
    width: 326,
    height: 109,
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
    overflow: "hidden"
  },

  middle: {
    position: "relative",
    width: 66,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: FontFamily.PretendardBold,
    fontSize: 40,
    color: Color.black,
  },

  wheelLabel:{
    fontFamily: FontFamily.PretendardBold,
    fontSize: 40,
    color: Color.black,
  }
});

export default Registration12;
