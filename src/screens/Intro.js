import React,{useContext,useEffect} from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';
import { Color, FontFamily,height } from '../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';      
import {useNavigation} from '@react-navigation/native';
import MessageBubble from '../components/MessageBubble';

//인트로 화면

const Intro = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.view}>
    <Image style = {styles.background} source={require("../assets/img/introBackground.png")}/>
    <LinearGradient
      colors={['#ffffff00', '#ffffffff']}
      style={styles.foreground}
    />
      <View style = {styles.messageFrame}>
        <MessageBubble message = {"반갑습니다."}></MessageBubble>
        <MessageBubble message = {"저는 AI코치 웰리입니다."}></MessageBubble>
        <MessageBubble message = {"회원님께 필요한 트레이닝을 추천하기 위해 몇가지 질문을 드릴게요."}></MessageBubble>

      </View>
    <Button1 style={{position: "absolute", bottom: 36}} text = {"종아요"} onPress={() => navigation.navigate("PlanMaking")}></Button1>
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

  messageFrame: {
    marginTop: 342,
    position: "relative",
    height: 350,
    width: 344,
    display: 'flex',
    flexDirection: "column",
    overflow: "hidden",
    gap:11,
    paddingBottom: 16,
  },

  foreground:{
    position: "absolute",
    width: "100%",
    height: 402,
    bottom:0
  },

  background:{
    position: "absolute",
    width: "100%",
    height : "100%",
    resizeMode: "cover"
  }

});

export default Intro;
