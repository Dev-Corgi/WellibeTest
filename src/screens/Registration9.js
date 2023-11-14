import * as React from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
import ProgressBar from '../components/ProgressBar';
const Registration9 = () => {
  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'목표하는 하루 트레이닝\n시간은 얼마나 될까요?'}</Text>
      <RegistrationInfo
        text={'5분 이상을 추천드릴게요!.'}></RegistrationInfo>
      <View style={styles.contentFrame}>
      <Image style = {styles.planImage} source={require("../assets/img/PlanLoading.png")}></Image>
      <View style = {styles.checkFrame}>
        <View style = {styles.checkRow}>
          <Image style = {styles.checkImg} source={require("../assets/img/Check_Active.png")}></Image>
          <Text style = {styles.loadingText}>표정근 정보를 분석하고 있어요.</Text>
        </View>
        <View style = {styles.checkRow}>
          <Image style = {styles.checkImg} source={require("../assets/img/Check_Unactive.png")}></Image>
          <Text style = {styles.loadingText}>사용자 정보를 분석하고 있어요.</Text>
        </View>
      </View>
      <ProgressBar progress={30} style={{marginTop:38.5}}></ProgressBar>
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