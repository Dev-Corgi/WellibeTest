import React,{useState,useEffect,useRef} from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import Button1 from '../components/Button1';
import { AutoFocus, Camera, CameraType } from 'expo-camera';

const PhotoTakenScreen = () => {


  const cameraRef = useRef(null);

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

  ////
  //  camera permissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  // Screen Ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState('4:3');  // default is 4:3
  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] =  useState(false);

  // on screen  load, ask for permission to use the camera
  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status == 'granted');
    }
    getCameraStatus();
  }, []);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = '4:3';  // Start with the system default
    // This issue only affects Android
    if (Platform.OS === 'android') {
      const ratios = await camera.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(':');
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio; 
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this 
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async() => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  return (
    <View style = {styles.view}>
      <Camera
      onCameraReady={setCameraReady}
      ref={cameraRef}
      ratio = {ratio}
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