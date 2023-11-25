import React, { useState, useEffect,useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack 네비게이션
import {
  StyleSheet,
  Image,
  View,
  Text,
  Easing,
} from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import ProgressBar from "../components/ProgressBar";
import Button1 from "../components/Button1";
import { ImageContext } from "../store/ImageContext";
import RegistrationInfo from '../components/RegistrationInfo';
import { AutoFocus, Camera, CameraType } from 'expo-camera';
const PhotoCheckScreen = () => {
  const { imageUri, setImageUri } = useContext(ImageContext);

  const navigation = useNavigation();

  const [progress, setprogress] = useState(0);

  const openCameraHandler = async () => { 
    const { status } = await Camera.requestCameraPermissionsAsync();
 
    if (status === 'granted') {
      navigation.navigate("PhotoTakenScreen");
    } else {
      Alert.alert('카메라 접근 허용은 필수입니다.');
    }
};

  return (
    <View style={styles.view}>
      <View style={styles.frame}>
        <View style={styles.headerFrame}>
          <Image
            style={styles.backButton}
            source={require("../assets/img/backButton.png")}
          ></Image>
          <Text style={styles.headerTitle}>{"사진 확인"}</Text>
          <ProgressBar
            style={{ marginTop: 12 }}
            progress={progress}
          ></ProgressBar>
        </View>
        <Text style={styles.title}>{"사진 촬영이\n잘 되었나요?"}</Text>
        <RegistrationInfo
          style={{ marginTop: 26 }}
          text={"이목구비가 잘 보이는지 확인해 주세요"}
        ></RegistrationInfo>
        <View style={styles.contentFrame}>
          <Image style={styles.imageCheck} source={imageUri}></Image>
        </View>
        <Button1
          style={{ position: "absolute", bottom: 70, backgroundColor: "#FF705C" }}
          text={"다시 촬영할래요"}
          onPress={() =>{
           openCameraHandler();
          }
          }
        ></Button1>
        <Button1
          style={{ position: "absolute", bottom: 0 }}
          text={"잘 되었어요"}
          onPress={() =>
            {
              navigation.navigate("PhotoReviewScreen.js")
            }
          }
        ></Button1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  frame: {
    position: "relative",
    width: 334,
    height: 751,
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
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
    fontSize: 20,
    color: Color.black,
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

export default PhotoCheckScreen;
