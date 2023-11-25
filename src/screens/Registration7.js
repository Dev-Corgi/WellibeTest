import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
import {useNavigation} from '@react-navigation/native';
const Registration7 = () => {

  const navigation = useNavigation();

  function handleRegistration () {
    navigation.navigate("Registration8");
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
      <Text style={styles.title}>{'현재 해당하는\n상태에 체크해 주세요'}</Text>
      <RegistrationInfo
        text={'적절한 트레이닝 구성에 도움이 되요.'}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <SelectionList
          selections={[
            '눈에 힘이 없거나 눈꺼풀이 쳐져 있어요.',
            '웃을 때 소극적으로 웃어요',
            '볼(입 옆의 피부)이 처져 있어요',
            '입꼬리가 처져 있거나 비뚤어져 있어요',
            '해당 없음',
          ]}
          onSelect={handleRegistrationReady}
          isMulti = {true}
          resetIndex={4}
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

export default Registration7;