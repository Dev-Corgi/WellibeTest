import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { Color, FontFamily,height } from '../GlobalStyles';
import WheelPickerExpo from "react-native-wheel-picker-expo";
//알람 시간 설정 부에 있는 타이머 설정 코드
//react-native-wheel-picker-expo 라이브러리로 구현하였습니다
const AlarmTimer = ({style}) => {

  //타임 테이블 초기화
    const hours= Array.from({ length: 25 }, (_, index) => 0 + index);
    const minutes= Array.from({ length: 61 }, (_, index) => 0 + index);

    return (
<View style={[styles.wheelSectionFrame,style]}>
<WheelPickerExpo
  height={350}
  width={112}
  initialSelectedIndex={12}
  items={hours.map((name) => ({ label: name, value: "" }))}
  onChange={({ item }) => {
    // onConfirm(item.label);
    //차후 서버 연동시 시간 전달 부분 작성
  }}
  renderItem={(props) => {
    return <Text style={styles.wheelLabel}>{props.label}</Text>;
  }}
/>
<Text style = {styles.middle}>:</Text>
<WheelPickerExpo
  height={350}
  width={112}
  initialSelectedIndex={30}
  items={minutes.map((name) => ({ label: name, value: "" }))}
  onChange={({ item }) => {
    // onConfirm(item.label);
  }}
  renderItem={(props) => {
    return <Text style={styles.wheelLabel}>{props.label}</Text>;
  }}
/>
</View>
    );
};

const styles = StyleSheet.create({
    wheelSectionFrame: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems : "center",
        width: 290,
        height: 176,
        overflow: "hidden",
      },
    
      middle: {
        position: "relative",
        width: 66,
        textAlign: "center",
        fontFamily: FontFamily.PretendardBold,
        fontSize: 40 * height,
        color: Color.black(1),
      },
    
      wheelLabel:{
        fontFamily: FontFamily.PretendardBold,
        fontSize: 40 * height,
        color: Color.black(1),
      }

});

export default AlarmTimer;
