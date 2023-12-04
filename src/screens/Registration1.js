import React,{useState,useEffect,useContext} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text,TextInput} from 'react-native';
import {Color,FontFamily} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';
import { ScreenNameContext } from "../store/ScreenNameContext";
import { NicknameContext } from '../store/NicknameContext';
import { ProgressContext } from "../store/ProgressContext";
const Registration1 = () => {

  const navigation = useNavigation();

  // const [nickName, setnickName] = useState('');

  const [isButtonActive, setisButtonActive] = useState(false)
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { nickName, setNickName } = useContext(NicknameContext);
  const { progress, setProgress } = useContext(ProgressContext);

  useEffect(() => {
    setScreenName("이름 선택")
    setProgress(25);
    }, [])

  return (
    <View style = {styles.view}>
        <RegistrationTooltip
        title={"웰리비에서 사용할\n닉네임을 알려주세요"}
        message = {"언제든 변경할 수 있어요"}
        ></RegistrationTooltip>
        <TextInput style={styles.inputfieldFrame} placeholder='이름을 입력해 주세요' onChangeText={(inputText) => setNickName(inputText)} onEndEditing={() => setisButtonActive(true)}>
        </TextInput>
        <Text style={styles.subtext}>수정을 원하시면 탭하여 주세요.</Text>
      <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"다음"}
          onPress={() =>
            {
              if(isButtonActive) {navigation.navigate("Registration2")}}
          }
          isActive={isButtonActive}
        ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
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
    color: Color.black(1),
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
    marginTop: 32,
    borderRadius: 12,
    backgroundColor: Color.gray_100(1),
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
    color: Color.black(1),
    textAlign: 'center'
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.gray_500(1),
    width: '100%',
    fontSize: 12,
    marginTop: 14,
    textAlign: 'center',
  },
});

export default Registration1;