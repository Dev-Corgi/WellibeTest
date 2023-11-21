import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import ProgressBar from '../components/ProgressBar';
import {useNavigation} from '@react-navigation/native';
const Registration9 = () => {

  const [loadingProgress, setloadingProgress] = useState(0)

  let progressInterval = null


  useEffect(() => {
    progressInterval = setInterval(increaseProgress, 20);
  }, [])

  function increaseProgress() {
    setloadingProgress((prevProgress) => {
      const newProgress = prevProgress + 1;
  
      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
  
      return newProgress;
    });
}



  const navigation = useNavigation();

  function handleRegistration () {
    navigation.navigate("Registration10");
  }

  function handleRegistrationReady () {
    DeviceEventEmitter.emit('RegistrationReady', { data: 'Custom event data' });
  }

  useEffect(() => {
    DeviceEventEmitter.emit('RegistrationReset', { data: 'Custom event data' });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener('RegistrationEvent', handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeAllListeners('RegistrationEvent');
    };
  });

  useEffect(() => {
    if(loadingProgress >= 100){
      // console.log(loadingProgress)
      navigation.navigate("Registration10");
    }
  
  }, [loadingProgress])

  const checkActiveEmoji = require("../assets/img/Check_Active.png");
  const checkUnActiveEmoji =require("../assets/img/Check_Unactive.png");

  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'목표하는 하루 트레이닝\n시간은 얼마나 될까요?'}</Text>
      <RegistrationInfo
        text={'5분 이상을 추천드릴게요!.'}></RegistrationInfo>
      <View style={styles.contentFrame}>
      <Image style = {styles.planImage} source={require("../assets/img/PlanLoading.png")}></Image>
      <View style = {styles.checkFrame}>
        <View style = {styles.checkRow}>
          <Image style = {styles.checkImg} source={loadingProgress < 30 ? checkUnActiveEmoji : checkActiveEmoji}></Image>
          <Text style = {styles.loadingText}>표정근 정보를 분석하고 있어요.</Text>
        </View>
        <View style = {styles.checkRow}>
            <Image style = {styles.checkImg} source={loadingProgress < 60 ? checkUnActiveEmoji : checkActiveEmoji}></Image>
          <Text style = {styles.loadingText}>사용자 정보를 분석하고 있어요.</Text>
        </View>
      </View>
      <ProgressBar progress={loadingProgress} style={{marginTop:38.5}}></ProgressBar>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    width: '100%',
    height: '100%',
    gap : 10
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

  planImage:{
    position: "relative",
    width : 255,
    height : 168,
    marginTop: 25
  },

  checkFrame:{
   width: 194,
   height: 57,
   gap: 17,
   marginTop: 52
  },

  checkRow:{
    display: "flex",
    flexDirection: "row",
    gap: 12
  },

  loadingText:{
    fontFamily: "PretendardRegular",
    fontSize: 14,
    color: Color.navy,
    opacity: 0.6
  },

  checkImg:{
    width: 20,
    height: 20
  }
  
});

export default Registration9;