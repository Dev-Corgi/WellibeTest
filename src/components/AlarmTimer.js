import React from 'react';
import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { Color, FontFamily,height } from '../GlobalStyles';
import WheelPickerExpo from "react-native-wheel-picker-expo";
const AlarmTimer = ({style}) => {

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
        // marginTop: 39,
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
