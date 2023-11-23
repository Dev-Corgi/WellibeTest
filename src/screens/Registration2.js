import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter, StyleSheet, Image, View, Text, Pressable,Modal } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
const Registration2 = ({buttonCallBack}) => {

  const navigation = useNavigation();
  const Years = '2000,2001,2002,2003,2004,2005'.split(',');

  function handleRegistration () {
    navigation.navigate("Registration3");
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

  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [isYear, setIsYear] = useState(false);

  const onPress = () => { // 날짜 클릭 시
    setVisible(true); // 모달 open
  };

  const onConfirm = (event, date) => { // 날짜 또는 시간 선택 시
    setVisible(false); // 모달 close
    onChangeDate(date); // 선택한 날짜 변경
    setIsYear(true);
    handleRegistrationReady();
  };

  const onCancel = () => { // 취소 시
    setVisible(false); // 모달 close
  };

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.title}>{'웰리님의\n출생연도를 알려주세요'}</Text>
        <RegistrationInfo
          style={{ marginTop: 26 }}
          text={'서비스 고도화를 위해 저희만 알고 있을게요'}></RegistrationInfo>
        <View style={styles.contentFrame}>
          <Pressable style={styles.inputfieldFrame} onPress={onPress}>
            <Text style={styles.inputfieldText}>{isYear ? date.getFullYear() : "출생연도를 선택해 주세요"}</Text>
          </Pressable>
          <Text style={styles.subtext}>수정을 원하시면 탭하여 주세요.</Text>
        </View>
        { visible &&
        <Modal style={{ backgroundColor: 'rgba(255, 255, 255, 0)'}}>
        <View style = {styles.bottomWheelFrame}>
        <WheelPickerExpo
        position = {"relative"}
          height={171}
          width={"100%"}
          initialSelectedIndex={3}
          backgroundColor='#333333'
          items={Years.map(name => ({ label: name, value: '' }))}
          onChange={({ item }) => setIsYear(item.label)} />
        </View>
        </Modal>
}
      </View>
      {/* {visible && <DateTimePicker
        mode={"date"}
        display={"spinner"}
        onChange={onConfirm}
        value={date} />
    } */}
    </>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.colorWhitesmoke_100,
  },

  inputfieldText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
    color: Color.black,
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.grey,
    width: '100%',
    fontSize: 12,
    marginTop: 14,
    textAlign: 'center',
  },

  bottomWheelFrame : {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 260,
    bottom: 0,
    backgroundColor: "#333333",
    borderTopRightRadius : 20,
    borderTopLeftRadius: 20
  }
});

export default Registration2;