import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
import {useNavigation} from '@react-navigation/native';
const Registration8 = () => {

  const navigation = useNavigation();

  function handleRegistration () {
    navigation.navigate("Registration9");
  }

  function handleRegistrationReady () {
    DeviceEventEmitter.emit('RegistrationReady', { data: 'Custom event data' });
  }

  useEffect(() => {
    DeviceEventEmitter.emit('RegistrationReset', { data: 'Custom event data' });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener('RegistrationEvent', handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeAllListeners('RegistrationEvent');
    };
  }, []);

  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'목표하는 하루 트레이닝\n시간은 얼마나 될까요?'}</Text>
      <RegistrationInfo
        text={'5분 이상을 추천드릴게요!.'}></RegistrationInfo>
      <View style={styles.contentFrame}>
      <SelectionList
          selections={[
            '5분 이하.',
            '5분 이상',
          ]}
          onSelect = {handleRegistrationReady}
          ></SelectionList>
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
});

export default Registration8;