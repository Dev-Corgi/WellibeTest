import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import {useNavigation} from '@react-navigation/native';
import ImageSelectionList from '../components/ImageSelectionList';

const Registration6 = () => {

  const navigation = useNavigation();

  function handleRegistration () {
    navigation.navigate("Registration7");
  }

  function handleRegistrationReady () {
    DeviceEventEmitter.emit('RegistrationReady', { data: 'Custom event data' });
  }
  
  const goalSelection1 = require("../assets/img/goalSelection1.png")
  const goalSelection2 = require("../assets/img/goalSelection2.png")
  const goalSelection3 = require("../assets/img/goalSelection3.png")
  const goalSelection4 = require("../assets/img/goalSelection4.png")

  useEffect(() => {
    DeviceEventEmitter.emit('RegistrationReset', { data: 'Custom event data' });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener('RegistrationEvent', handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeListener('RegistrationEvent', handleRegistration);
    };
  }, []);

  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'어떤 목적으로\n웰리비를 찾아주셨나요?'}</Text>
      <RegistrationInfo
        text={'적절한 트레이닝 추천에 필요해요!'}></RegistrationInfo>
      <View style={styles.contentFrame}>
          <ImageSelectionList images={[goalSelection1,goalSelection2,goalSelection3,goalSelection4]} onSelect={handleRegistrationReady}></ImageSelectionList>
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

  imageSelection:{
    position: 'relative',
    display : 'flex',
    flexDirection : "row",
    gap: 11,
    flexWrap: "wrap"
  },

  imageframe:{
    position: "relative",
    width: 158,
    height: 215
  }
});

export default Registration6;