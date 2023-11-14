import React from 'react';
import {StyleSheet, Image, View, Text,TextInput} from 'react-native';
import {Color,FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
const PlanCheck = () => {
  return (
    <View style = {styles.view}>
    <View style = {styles.banner}>
        <Image style = {styles.bannerImage} source={require("../assets/img/PlanCheck.png")}></Image>
        <Text style = {{position: "relative", marginLeft : 31 ,marginTop: 147, fontFamily: "PretendardRegular", color: Color.white, fontSize: 16}}>
            풍부한 표정 만들기
        </Text>
        <Text style = {{position: "relative", marginLeft : 31 ,marginTop: 16, fontFamily: "PretendardRegular", color: Color.white, fontSize: 16}}>
            밝고 자신감있는 표정 만들기
        </Text>
        <View style = {styles.bannerForeground}>
            <Text style = {{fontFamily : "PretendardBold", fontSize:14, color: Color.white}}>1차 시즌</Text>
            <Text style = {{fontFamily : "PretendardRegular", fontSize:14, color: Color.white}}>{"2023.02.03~2023.03.03"}</Text>
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

  banner:{
    position: "relative",
    width: "100%",
    height:261,
  },

  bannerImage:{
    position:"absolute",
    width: "100%",
    height: "100%"
  },

  bannerForeground:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: Color.black,
    opacity: 0.2,
    gap: 156
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

});

export default PlanCheck;