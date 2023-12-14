
import  React, {useState} from 'react';
import { StyleSheet, Image, View, Text ,Pressable} from 'react-native';
import { Color, FontFamily,height } from '../GlobalStyles';
import Slider from "@react-native-community/slider";
import thumb from "../assets/img/thumb.png"

const ReportSlider = ({sliderValue, setSliderValue,style}) => {

    const styles = StyleSheet.create({
        sliderOutFrame: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 327,
            height: 35,
            borderRadius: 12,
            overflow: "hidden",
          },
      
          sliderFrame: {
            position: "absolute",
            backgroundColor: Color.black(0),
            width: 327,
            height: 22,
          },
      
          sliderBackground: {
            position: "absolute",
            left: 0,
            backgroundColor: Color.gray_100(),
            width: 327,
            height:5,
            borderRadius: 5
          },
      
          sliderInner: {
            position: "absolute",
            left: 0,
            width: sliderValue+"%",
            height: 5,
            borderRadius: 5,
            backgroundColor: Color.primary_600(1),
          }})

    return (
        <View style = {[styles.sliderOutFrame,style]}>
        <View style = {styles.sliderBackground}></View>
        <View style = {styles.sliderInner}></View>
        <Slider
        style={styles.sliderFrame}
        value={sliderValue}
        onValueChange={(e) => setSliderValue(e)}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor= {Color.black(0)}
        maximumTrackTintColor= {Color.black(0)}
        thumbImage = {thumb}
        thumbTintColor= {Color.black(0)}
        step={1}
      ></Slider>
      </View>
    );
};



export default ReportSlider;
