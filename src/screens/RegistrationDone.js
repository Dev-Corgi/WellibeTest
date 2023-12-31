import {StyleSheet, Image, View,Text} from 'react-native';
import {Color, FontFamily,height} from '../GlobalStyles';
import React,{useState,useEffect,useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { NicknameContext } from '../store/NicknameContext';

//등록 절차 종료 화면

const RegistrationDone = () => {

    const [loadingProgress, setloadingProgress] = useState(0)
    const { nickName, setNickName } = useContext(NicknameContext);
    const navigation = useNavigation();

    let progressInterval = null
  
    useEffect(() => {
      progressInterval = setInterval(increaseProgress, 10);
    }, [])
  
    function increaseProgress() {
      setloadingProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
    
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          navigation.navigate("Intro");
        }
    
        return newProgress;
      });
  }

  return (
    <View style={styles.view}>
        <Text style = {styles.text1}>{"회원 가입 완료"}</Text>
        <Text style = {styles.text2}>{nickName+"님, 환영합니다"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    flex: 1,
    display: 'flex',
    flexDirection: "column",
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  text1: {
    position: 'relative',
    fontFamily: FontFamily.PretendardRegular,
    fontSize: 14 * height,
    color: Color.navy(1),
    opacity: 0.6,
    marginTop: 362
  },

  text2: {
    position: 'relative',
    fontFamily: FontFamily.PretendardBold,
    fontSize: 26 * height,
    color: Color.primary_700(1),
    marginTop: 21
  },
});

export default RegistrationDone;
