import React,{useState,useEffect,useRef} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text, Pressable,Alert} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import {useNavigation} from '@react-navigation/native';
import { AutoFocus, Camera, CameraType } from 'expo-camera';
const Registration10 = () => {

  const navigation = useNavigation();

  const openCameraHandler = async () => { 
    const { status } = await Camera.requestCameraPermissionsAsync();
 
    if (status === 'granted') {
      navigation.navigate("PhotoTakenScreen");
    } else {
      Alert.alert('카메라 접근 허용은 필수입니다.');
    }
};

  async function handleRegistration () {
    openCameraHandler();
  }

  useEffect(() => {
    DeviceEventEmitter.emit('RegistrationReset', { data: 'Custom event data' });
    DeviceEventEmitter.emit('RegistrationReady', { data: 'Custom event data' });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener('RegistrationEvent', handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeAllListeners('RegistrationEvent');
    };
  }, []);


  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'더나은 서비스 이용을 위해서는\n사진 촬영이 필요해요'}</Text>
      <RegistrationInfo
        text={'변화 확인을 위해서는 사진 촬영이 필요해요.'}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <Image style = {styles.img} source={require("../assets/img/AllowcationSplashImage.png")}></Image>
        <View style = {styles.guideTable}>
          <View style = {styles.guideLine}>
            <Image style = {styles.guideCheckEmoji} source={require("../assets/img/CheckAllowcation.png")}></Image>
            <Text style = {styles.guideText}>카메라 접근을 허용해 주세요</Text>
          </View>
          <View style = {styles.guideLine}>
            <Image style = {styles.guideCheckEmoji} source={require("../assets/img/CheckAllowcation.png")}></Image>
            <Text style = {styles.guideText}>안경을 쓰셨으면 안경을 벗어주세요</Text>
          </View>
          <View style = {styles.guideLine}>
            <Image style = {styles.guideCheckEmoji} source={require("../assets/img/CheckAllowcation.png")}></Image>
            <Text style = {styles.guideText}>제시된 가이드에 얼굴을 맞춰주세요</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    width: '100%',
    height: '100%',
  },

  contentFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black,
    lineHeight: 34,
    width: '100%',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },

  img:{
    marginTop: 26,
    width:180,
    height: 192
  },

  guideTable:{
    display: "flex",
    gap: 17,
    marginTop: 31
  },

  guideLine:{
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center"
  },

  guideCheckEmoji:{
    width: 20,
    height: 20
  },

  guideText:{
    fontFamily: "PretendardRegular",
    fontSize: 14,
    color: Color.navy,
    opacity: 0.6
  }
  
});

export default Registration10;