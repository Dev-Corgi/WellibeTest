import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import Button1 from "../components/Button1";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import { ImageContext } from "../store/ImageContext";
import { useNavigation } from "@react-navigation/native";
import NavigationHeader from "../components/NavigationHeader";
import Slider from "@react-native-community/slider";
import { ScreenNameContext } from "../store/ScreenNameContext";
const PhotoReviewScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const { imageUri, setImageUri } = useContext(ImageContext);
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const navigation = useNavigation();

  useEffect(() => {
    setScreenName("사진 평가")
    }, [])

  const styles = StyleSheet.create({
    view: {
      backgroundColor: Color.black(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },

    pictureBackground: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },

    sliderOutFrame: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 467,
      width: 327,
      height: 52,
      borderRadius: 12,
      overflow: "hidden",
    },

    sliderFrame: {
      position: "absolute",
      backgroundColor: Color.black(0.2),
      width: 327,
      // height: 52,
      transform: [{ scaleY: 26 }],
    },

    sliderBackground: {
      position: "absolute",
      left: 0,
      backgroundColor: Color.black(0.2),
      width: 327,
      height: 52,
    },

    sliderInner: {
      position: "absolute",
      left: 0,
      width: sliderValue+"%",
      height: "100%",
      backgroundColor: Color.primary_700(1),
    },

    sliderValueText: {
      fontFamily: FontFamily.PretendardSemiBold,
      color: Color.white(1),
      fontSize: 18,
    },

    header: {
      position: "relative",
      marginTop: 49,
      // height: 20,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible",
    },

    backbutton: {
      position: "absolute",
      left: 20,
      width: 7.53,
      height: 14,
    },

    headerTitle: {
      position: "relative",
      fontFamily: "PretendardSemiBold",
      fontSize: 20,
      color: Color.white(1),
    },

    guidetext: {
      position: "relative",
      marginTop: 52,
      fontFamily: "PretendardBold",
      fontSize: 22,
      color: Color.white(1),
    },

    guideSquareLayer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    guideSquare: {
      position: "relative",
      width: 236,
      height: 325,
    },

    guideGridFrame: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    guideGrid: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 29,
    },

    guideGridLine: {
      height: "100%",
      width: 1.5,
      backgroundColor: Color.white(1),
      opacity: 0.1,
    },

    img_exc: {},

    cameraPreview: {
      position: "relative",
      width: "122%",
      height: "100%",
    },

    cameraLayer: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },

    contentLayer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.view}>
      <Image style={styles.pictureBackground} source={imageUri}></Image>
      <View style={styles.guideGridFrame}>
        <View style={styles.guideGrid}>
          <View style={styles.guideGridLine}></View>
          <View style={styles.guideGridLine}></View>
          <View style={styles.guideGridLine}></View>
          <View style={styles.guideGridLine}></View>
          <View style={styles.guideGridLine}></View>
          <View style={styles.guideGridLine}></View>
        </View>
      </View>
      <View style={styles.contentLayer}>
        <NavigationHeader
          style={{ marginTop: 35 }}
          color={Color.white(1)}
          title="사진 촬영"
        ></NavigationHeader>
        <Text style={styles.guidetext}>현재 만족도는 어떻게 되나요?</Text>
        <View style={styles.sliderOutFrame}>
          <Slider
            style={styles.sliderFrame}
            value={sliderValue}
            onValueChange={(e) => setSliderValue(e)}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor= {Color.black(0)}
            maximumTrackTintColor= {Color.black(0)}
            thumbTintColor= {Color.black(0)}
            step={1}
          ></Slider>
          <View style={styles.sliderBackground} pointerEvents="box-none"></View>
          <View style={styles.sliderInner} pointerEvents="box-none"></View>
          <Text style={styles.sliderValueText}>{sliderValue + "%"}</Text>
        </View>
        <Text
          style={{
            marginTop: 14,
            fontFamily: FontFamily.PretendardMedium,
            fontSize: 14,
            color: Color.white(1),
          }}
        >
          드래그하여 퍼센트로 나타내주세요
        </Text>
      </View>
      <Button1
        style={{ position: "absolute", bottom: 36 }}
        text={"다음"}
        onPress={            
          () =>
          navigation.navigate("PhotoResultScreen")
        }
      ></Button1>
    </View>
  );
};

export default PhotoReviewScreen;
