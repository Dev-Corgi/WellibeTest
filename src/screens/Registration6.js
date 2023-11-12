import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
const Registration6 = () => {
  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'어떤 목적으로\n웰리비를 찾아주셨나요?'}</Text>
      <RegistrationInfo
        text={'적절한 트레이닝 추천에 필요해요!'}></RegistrationInfo>
      <View style={styles.contentFrame}>
          <View style = {styles.imageSelection}>
            <Image style = {styles.imageframe} source= {require("../assets/img/goalSelection1.png")}></Image>
            <Image style = {styles.imageframe} source= {require("../assets/img/goalSelection2.png")}></Image>
            <Image style = {styles.imageframe} source= {require("../assets/img/goalSelection3.png")}></Image>
            <Image style = {styles.imageframe} source= {require("../assets/img/goalSelection4.png")}></Image>
          </View>
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

  imageSelection:{
    position: 'relative',
    display : 'flex',
    flexDirection : "row",
    gap: 11,
    flexWrap: "wrap"
  },

  imageframe:{
    position: "relative",
    width: 158,
    height: 215
  }
});

export default Registration6;