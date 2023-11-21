import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
import {useNavigation} from '@react-navigation/native';
const Registration3 = ({buttonCallBack}) => {

  const navigation = useNavigation();

  function handleRegistration () {
    navigation.navigate("Registration4");
  }

  function handleRegistrationReady (nickName) {
    DeviceEventEmitter.emit('RegistrationReady', { data: 'Custom event data' });
  }

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
      <Text style={styles.title}>{'성별이\n어떻게 되시나요?'}</Text>
      <RegistrationInfo
        style={{marginTop: 26}}
        text={'서비스 고도화를 위해 저희만 알고 있을게요'}></RegistrationInfo>
      <View style={styles.contentFrame}>
          <SelectionList selections={['남성', '여성', '기타']} onSelect={handleRegistrationReady}></SelectionList>
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
    marginBottom: 20,
    marginTop: 20,
  },

});

export default Registration3;