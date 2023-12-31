import React,{useState,useEffect} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily,height} from '../GlobalStyles';
import ProgressBar from '../components/ProgressBar';
import {useNavigation} from '@react-navigation/native';
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';

//플랜 로딩 화면

const PlanLoading = () => {

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

  const [isButtonActive, setisButtonActive] = useState(false);

  useEffect(() => {
    if(loadingProgress >= 100){
      setisButtonActive(true);
    }
  
  }, [loadingProgress])

  const checkActiveEmoji = require("../assets/img/Check_Active.png");
  const checkUnActiveEmoji =require("../assets/img/Check_Unactive.png");

  return (
    <View style = {styles.view}>
      <RegistrationTooltip
        style = {{marginTop: 90}}
        title={"맞춤 트레이닝 플랜을\n구성 중 입니다"}
        message = {"매일 해야 효과가 금방 나타나요!"}
        ></RegistrationTooltip>
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
      <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"다음"}
          onPress={() =>
            {if (isButtonActive) {
              navigation.navigate("PlanCheck");
            }}
          }
          isActive={isButtonActive}
        ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Color.white(1),
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
    fontSize: 22 * height,
    color: Color.black(1),
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
    fontSize: 14 * height,
    color: Color.navy(1),
    opacity: 0.6
  },

  checkImg:{
    width: 20,
    height: 20
  }
  
});

export default PlanLoading;