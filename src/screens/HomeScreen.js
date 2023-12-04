import React,{useState,useEffect} from 'react';
import { StyleSheet, Image, View,Text, Pressable } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Button1 from '../components/Button1';      
import {useNavigation} from '@react-navigation/native';
import MessageBubble from '../components/MessageBubble';
import ic_flag from "../assets/img/ic_flag.png";
import ic_gear from "../assets/img/ic_gear.png";
import textLogo_Grey from "../assets/img/textLogo_Grey.png";
const HomeScreen = () => {

    const [remainTime, setRemainTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
      const targetTime = new Date();
      targetTime.setDate(targetTime.getDate() + 6); // 1주일 후의 시간 설정
  
      const calculateTimeDifference = () => {
        const currentTime = new Date();
      const difference = new Date(targetTime - currentTime);
  
        const days = difference.getDate()
        const hours = difference.getHours()
        const minutes = difference.getMinutes()
        const seconds = difference.getSeconds()
  
        setRemainTime({ days, hours, minutes, seconds });
      };
  
      const intervalId = setInterval(calculateTimeDifference, 1000);
  
      // 컴포넌트가 언마운트되면 인터벌 클리어
      return () => clearInterval(intervalId);
    }, []); // 최초 렌더링 시에만 실행

  const navigation = useNavigation();

  return (
    <View style={styles.view}>
    <Image style = {styles.background} source={require("../assets/img/introBackground.png")}/>
    <LinearGradient
      colors={['#ffffff00', '#ffffffff']}
      style={styles.foreground}
    />
    <View style = {styles.headerFrame}>
        <Image style = {styles.textLogo} source={textLogo_Grey}></Image>
        <Image style = {styles.settingButton} source={ic_gear}></Image>
    </View>
    <View style = {styles.recordFrame}>
        <Image style = {styles.flagLogo} source={ic_flag}></Image>
        <View style = {styles.textFrame}>
        <Text style = {styles.recordTitle}>다음 변화 기록까지</Text>
        <Text style = {styles.recordContent}>{`${remainTime.days}일 ${remainTime.hours}시간  ${remainTime.minutes}분 ${remainTime.seconds}초`}</Text>
        </View>
    </View>
      <View style = {styles.messageFrame}>
        <MessageBubble message = {"안녕하세요,웰리닙"}></MessageBubble>
        <MessageBubble message = {"오늘도 힘차게 트레이닝 해봐요"}></MessageBubble>
      </View>
    <Pressable style = {styles.bottomFrame} onPress={() => navigation.navigate("TodayTraining")}>
        <Text style ={styles.bottomText}>오늘의 트레이닝</Text>
    </Pressable>
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
    marginTop: 199,
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
  },

  headerFrame:{
    pasition: "relative",
    width: 312,
    height: 20,
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
  },
  
  textLogo:{
   position: "relative",
   width: 113.8,
   height: 20
  },

  settingButton:{
    position: "relative",
    width:20,
    height:20
  },

  recordFrame:{
     position: "relative",
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     marginTop: 26,
     width: 334,
     height: 47,
     backgroundColor: Color.black(0.1),
     borderRadius: 10
  },

  flagLogo:{
    position: "relative",
    width: 18,
    height: 18,
    marginLeft: 14
  },

  recordTitle:{
     fontFamily: FontFamily.PretendardBold,
     fontSize: 14,
     color: Color.white(1),
  },

  recordContent:{
    fontFamily: FontFamily.PretendardBold,
    fontSize: 14,
    color: Color.white(1),
  },

  bottomFrame:{
    position: "absolute",
    display: "flex",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    height: 87,
    backgroundColor: Color.black(1)
  },

  bottomText:{
    fontFamily: FontFamily.PretendardBold,
    fontSize: 18,
    color: Color.primary_700(1),
    marginTop: 30
  },

  textFrame:{
    position:"relative",
    width: 277,
    flexDirection: 'row',
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 6
  }

  

});

export default HomeScreen;
