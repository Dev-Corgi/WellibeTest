import React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import Button1 from '../components/Button1';      
import {useNavigation} from '@react-navigation/native';
import CheckVid from "@images/vid_checkAnimation.png"
const PhotoResultScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style = {styles.message}>{"사진과 정보가\n"}<Text style = {{fontFamily: FontFamily.PretendardBold}}>{"리포트에 저장되었어요"}</Text></Text>
      <Image style = {styles.img_checkmark} source = {CheckVid}></Image>
      <Button1 style={{position: "absolute", bottom: 36}} text = {"확인"} onPress={() => navigation.navigate("TimerSetScreen")}></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    display: 'flex',
    flexDirection: "column",
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },

  message:{
     position: "relative",
     marginTop: 254,
     fontSize: 22,
     fontFamily: FontFamily.PretendardRegular,
     lineHeight: 34,
     textAlign: "center",
     color: Color.black(1)
  },

  img_checkmark:{
     position: "relative",
     marginTop: 43,
     width: 203,
     height: 141
  }

});

export default PhotoResultScreen;
