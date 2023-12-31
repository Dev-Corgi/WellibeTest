import React,{useState,useEffect,useContext} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily,height} from '../GlobalStyles';
import SelectionList from '../components/SelectionList';
import {useNavigation} from '@react-navigation/native';
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from "../components/Button1";
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const Registration4 = ({buttonCallBack}) => {

  const navigation = useNavigation();

  const [isButtonActive, setisButtonActive] = useState(false)

  const { screenName, setScreenName } = useContext(ScreenNameContext);

  const { progress, setProgress } = useContext(ProgressContext);

  function handleRegistration () {
    navigation.navigate("RegistrationDone");
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

  useEffect(() => {
    setScreenName("직업 선택")
    setProgress(100);
    }, [])

  return (
    <View style = {styles.view}>
              <RegistrationTooltip
        title={"현재 어떠한\n일을 하고 계신가요?"}
        message={"서비스 고도화를 위해 저희만 알고 있을게요"}
      ></RegistrationTooltip>
        <SelectionList
        style={{marginTop : 32}}
          selections={[
            '학생',
            '취업 준비생',
            '직장인',
            '주부',
            '기타',
          ]}
          onSelect={handleRegistrationReady}
          ></SelectionList>
      {/* <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"다음"}
          onPress={() =>
            {if (isButtonActive) {
              navigation.navigate("RegistrationDone");
            }}
          }
          isActive={isButtonActive}
        ></Button1> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    width: '100%',
    height: '100%',
    display: "flex",
    alignItems: "center"
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
    fontSize: 22 * height,
    color: Color.black(1),
    lineHeight: 34,
    width: '100%',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Registration4;