import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
import {useNavigation} from '@react-navigation/native';
const Registration5 = () => {

  const navigation = useNavigation();

  function handleRegistration () {
    navigation.navigate("Registration6");
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
      DeviceEventEmitter.removeListener('RegistrationEvent', handleRegistration);
    };
  }, []);

  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'어떤 목적으로\n웰리비를 찾아주셨나요?'}</Text>
      <RegistrationInfo
        text={'적절한 트레이닝 추천에 필요해요!'}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <SelectionList
          selections={[
            '풍부한 표정을 만들고 싶어요',
            '얼굴 비대칭이 고민이에요',
            '작고 갸름한 얼굴을 만들고 싶어요',
            '주름을 예방/개선하고 싶어요',
            '피부 처짐을 예방/개선하고 싶어요',
          ]}
          onSelect={handleRegistrationReady}
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

export default Registration5;