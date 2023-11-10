import React,{useState} from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
// import { format } from "date-fns";
// import ko from "date-fns/esm/locale/ko/index.js";
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
const Registration2 = ({buttonCallBack}) => {
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [isYear, setIsYear] = useState(false);

  const onPress = () => { // 날짜 클릭 시
    setVisible(true); // 모달 open
  };

  const onConfirm = (selectedDate) => { // 날짜 또는 시간 선택 시
    setVisible(false); // 모달 close
    onChangeDate(selectedDate); // 선택한 날짜 변경
    // buttonCallBack();
    setIsYear(true);
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
      </View>
      {/* <DateTimePickerModal
        isVisible={visible}
        mode={"date"}
        display={"spinner"}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date} /> */}
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
});

export default Registration2;