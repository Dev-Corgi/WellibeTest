import React,{useState} from 'react';
import { StyleSheet, Image, View,Text,Pressable } from 'react-native';
import { Color, FontFamily ,height} from '../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';      
import {useNavigation} from '@react-navigation/native';
import MessageBubble from '../components/MessageBubble';
import ic_alert_red from "../assets/img/ic_alert_red.png"
const PlanStartingScreen = () => { 

  const [isModal, setisModal] = useState(false)
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
    <Image style = {styles.background} source={require("../assets/img/introBackground.png")}/>
    <Text style = {styles.text}></Text>
    <Button1 style={{position: "relative", marginTop: 17, backgroundColor : Color.system_400()}} text = {"끝내기"} onPress={() => navigation.navigate("HomeScreen")}></Button1>
    <Button1 style={{position: "relative", marginTop: 14}} text = {"촬영 및 기록하기"} onPress={() => setisModal(true)}></Button1>
    {isModal &&
  <View style = {styles.modalLayer}>
      <View style = {styles.modalFrame}>
        <Image style = {styles.ic_alert} source={ic_alert_red}></Image>
        <Text style = {styles.modalText1}>해당 기능은</Text>
        <Text style = {styles.modalText2}>서비스 준비 중 입니다</Text>
        <Pressable style = {styles.modalButton1} onPress={() => setisModal(false)}>
          <Text style = {styles.modalButton1Text}>확인</Text>
          </Pressable>
      </View>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text:{
    marginTop: 623,
   fontFamily : FontFamily.PretendardRegular,
   color : Color.white(),
   fontSize: 14 * height
  },

  background:{
    position: "absolute",
    width: "100%",
    height : "100%",
    resizeMode: "cover"
  },

  modalLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: Color.black(0.6),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  modalFrame: {
    backgroundColor: Color.white(),
    width: 278,
    height: 253,
    display: "flex",
    alignItems: "center",
    borderRadius: 16
  },

  ic_alert:{
    marginTop : 45,
    width : 31,
    height : 27
  },

  modalText1: {
    fontFamily: FontFamily.PretendardRegular,
    fontSize: 20 * height,
    color : Color.black(),
    marginTop: 25
  },

  modalText2: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 20 * height,
    color : Color.black(),
  },


  modalButton1: {
    width : 236,
    height : 49,
    backgroundColor: Color.black(),
    color: Color.white(),
    borderRadius: 10,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 42
  },

  modalButton1Text:{
    fontFamily : FontFamily.PretendardBold,
    fontSize: 14 * height,
    color: Color.white()
  },

});

export default PlanStartingScreen;
