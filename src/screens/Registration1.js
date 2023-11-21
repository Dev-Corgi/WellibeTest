import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text,TextInput} from 'react-native';
import {Color,FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import {useNavigation} from '@react-navigation/native';
const Registration1 = () => {

  const navigation = useNavigation();

  const [nickName, setnickName] = useState('');

  function handleRegistration () {
    navigation.navigate("Registration2");
  }

  function handleRegistrationReady (nickName) {
    if(nickName != ''){
    DeviceEventEmitter.emit('RegistrationReady', { data: 'Custom event data' });
    }
  }

  useEffect(() => {
    DeviceEventEmitter.emit('RegistrationReset', { data: 'Custom event data' });

    DeviceEventEmitter.addListener('RegistrationEvent', handleRegistration);

    return () => {
      DeviceEventEmitter.removeListener('RegistrationEvent', handleRegistration);
    };
  }, []);


  return (
    <View style = {styles.view}>
      <Text style={styles.title}>
        {'웰리비에서 사용할\n닉네임을 알려주세요'}
      </Text>
      <RegistrationInfo
        style={{marginTop: 26}}
        text={'언제든 변경할 수 있어요'}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <TextInput style={styles.inputfieldFrame} placeholder='이름을 입력해 주세요' onChangeText={(inputText) => setnickName(inputText)} onEndEditing={handleRegistrationReady}>
        </TextInput>
        <Text style={styles.subtext}>수정을 원하시면 탭하여 주세요.</Text>
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

  inputfieldFrame: {
    position: 'relative',
    width: 327,
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
    color: Color.black,
    textAlign: 'center'
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.grey,
    width: '100%',
    fontSize: 12,
    marginTop: 14,
    textAlign: 'center',
  },
});

export default Registration1;