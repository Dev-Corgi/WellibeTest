import React,{useState,useEffect,useRef} from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import Button1 from '../components/Button1';
import { AutoFocus, Camera, CameraType } from 'expo-camera';

const PhotoTakenScreen = () => {

  const takePictureHandler = async () => { 
    // cameraRef가 없으면 해당 함수가 실행되지 않게 가드
    if (!cameraRef.current) return;
    
    // takePictureAsync를 통해 사진을 찍습니다.
    // 찍은 사진은 base64 형식으로 저장합니다.
    await cameraRef.current
      .takePictureAsync({
        base64: true,
      })
      .then((data) => {
        setPreviewVisible(true);
        setCapturedImage(data);
      });
  };

  const cameraRef = useRef(null);

  return (
    <View style = {styles.view}>
      <Camera
        ref={cameraRef}
        type={CameraType.front}
        zoom={0}
        autoFocus={AutoFocus.on}
        style = {styles.camera}
      />
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
     <View style={styles.guideSquareLayer}>
      <Image style = {styles.guideSquare} source = {require("../assets/img/guideSquare.png")}></Image>
     </View>
     <View style={styles.header}>
      <Image style={styles.backbutton} source = {require("../assets/img/backButton_White.png")}></Image>
      <Text style={styles.headerTitle}>사진 촬영</Text>
     </View>
     <Text style = {styles.guidetext}>자연스럽게 표정을 지어주세요</Text>
     <Button1
          style={{position: 'absolute', bottom: 36}}
          Text={'촬영하기'}
          onPress={takePictureHandler}
          ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '100%',
    height: '100%',
  },

  
  header:{
    position: "relative",
    marginTop: 49,
    height: 20,
    width : '100%',
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },

   backbutton:{
   position: "absolute",
   left: 20,
   width: 7.53,
   height: 14,
   },

   headerTitle:{
    position: "relative",
    fontFamily: "PretendardSemiBold",
    fontSize: 20,
    color: Color.white
   },

  guidetext:{
    position: "relative",
    marginTop: 52,
    fontFamily: "PretendardBold",
    fontSize: 22,
    color: Color.white
  },

  guideSquareLayer:{
    position:"absolute",
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  
  guideSquare:{
    position: "relative",
    width: 236,
    height: 325
  },

  guideGridFrame:{
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  guideGrid:{
    position: "relative",
   display: "flex",
   flexDirection: "row",
   gap: 29
  },

  guideGridLine:{
    height: "100%",
    width: 1.5,
    backgroundColor: Color.white,
    opacity: 0.1
  },

  img_exc:{
    
  },

  camera:{
    position: "absolute",
    width: "100%",
    height: "100%"
  }
  
});

export default PhotoTakenScreen;