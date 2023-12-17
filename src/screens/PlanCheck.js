import React,{useContext} from 'react';
import {StyleSheet, Image, View, Text,TextInput, Pressable,ScrollView} from 'react-native';
import {Color,FontFamily,height} from '../GlobalStyles';
import Button1 from '../components/Button1';
import {useNavigation} from '@react-navigation/native';
import { StarterContext } from '../store/StarterContext';

//플랜 확인 화면

const PlanCheck = () => {

//플랜 화면을 그대로 이후 플랜 변경 시 재사용 할지,
//같은 코드로 다른 파일을 만들지 고민하다 임시로 같은 화면에서 루트에 따라 다르게 접근하는 파트인데
//구현 방식에 따라 없애시면 됩니다
//현재는 앱이 첫 실행이면 사진 촬영 파트로, 아니면 플랜 변경으로 넘어갈 겁니다

  const navigation = useNavigation();
//나중에 없앨것
  const {isStarter,setIsStarter} = useContext(StarterContext)
//나중에 없앨것

  return (
    <View style = {styles.view}>
    <View style = {styles.banner}>
        <Image style = {styles.bannerImage} source={require("../assets/img/PlanCheck.png")}></Image>
        <Text style = {{position: "relative", width: 340 ,marginTop: 147, fontFamily: "PretendardRegular", color: Color.white(1), fontSize: 16 * height}}>
            풍부한 표정 만들기
        </Text>
        <Text style = {{position: "relative", width: 340 , marginTop: 2, fontFamily: "PretendardBold", color: Color.white(1), fontSize: 22 * height}}>
            밝고 자신감있는 표정 만들기
        </Text>
        <View style = {styles.bannerForeground}>
          <View style = {styles.bannerInner}>
            <Text style = {{fontFamily : "PretendardBold", fontSize:14, color: Color.white(1)}}>1차 시즌</Text>
            <Text style = {{fontFamily : "PretendardRegular", fontSize:14, color: Color.white(1)}}>{"2023.02.03~2023.03.03"}</Text>
          </View>
        </View>
    </View>
    <Text style = {{fontFamily : "PretendardBold", fontSize:22, color: Color.black(1),marginTop:25,marginLeft:29}}>{"웰리님만을 위한\n시즌 트레이닝 플랜이에요"}</Text>
    <View style = {styles.trainingTagsFrame}>
      <View style = {styles.trainingTag}>
        <Text style = {styles.trainingTagTitle}>트레이닝 수</Text>
        <View style = {[styles.trainingTagInfo,{backgroundColor: Color.primary_500(0.1)}]}>
          <Text style = {[styles.trainingTagInfoText,{color: Color.primary_700(1)}]}>6개</Text>
        </View>
      </View>
      <View style = {styles.trainingTag}>
        <Text style = {styles.trainingTagTitle}>트레이닝 시간</Text>
        <View style = {[styles.trainingTagInfo,{backgroundColor: Color.system_300(0.1)}]}>
          <Text style = {[styles.trainingTagInfoText,{color: Color.system_300(1)}]}>4분 21초</Text>
        </View>
      </View>
    </View>
    <ScrollView style = {styles.scrollRect}>
    <View style = {styles.trainingTable}>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
      <View style = {styles.trainingSetFrame}>
        <Image style = {styles.trainingSetImoji} source={require("../assets/img/imogi_eye.png")}></Image>
        <Text style = {styles.trainingSetTitle}>안륜근 트레이닝</Text>
        <Text style = {styles.trainingSetContent}>5회 X 2세트</Text>
        <Pressable style = {styles.trainingSetDetailButton}>
          <Text style = {styles.trainingSetDetailButtonText}>가이드 보기</Text>
        </Pressable>
        <View style = {styles.trainingSetBottomLine}></View>
      </View>
    </View>
    </ScrollView>
    <Button1
          style={{position: 'absolute', bottom: 36, marginLeft: 27}}
          text={'다음'}
          onPress={() =>{if(isStarter){ navigation.navigate("PhotoAuth"); setIsStarter(false)} else{ navigation.navigate("DailyTrainingReport")}}}
         ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    width: '100%',
    height: '100%',
  },

  banner:{
    position: "relative",
    display: "flex",
    alignItems: "center",
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
    backgroundColor: Color.black(0.2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  bannerInner:{
    position: "relative",
    width: 340,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22 * height,
    color: Color.black(1),
    lineHeight: 34,
    width: '100%',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 20,
  },

  trainingTagsFrame:{
    marginTop: 21,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginLeft: 29
  },

  trainingTag:{
     display: "flex",
     flexDirection: "row",
     gap:4,
     alignItems: "center"
  },

  trainingTagTitle:{
     fontFamily: "PretendardRegular",
     fontSize: 14 * height,
     color: Color.gray_500(1)
  },

  trainingTagInfo:{
    paddingVertical: 4,
    paddingHorizontal:6,
    borderRadius: 6,
 },
 
 trainingTagInfoText:{
  fontFamily: "PretendardBold",
  fontSize: 12 * height,
  opacity: 1
 },

 trainingTable:{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: 19,
 },

 trainingSetFrame:{
  position: "relative",
  width: 330,
  height: 54,
 },

 trainingSetImoji:{
  position: "absolute",
  left: 0,
  top: 0,
  width: 36,
  height: 36
 },

 trainingSetTitle:{
  position: "absolute",
  left: 57,
  top: 2.5,
  fontFamily: "PretendardSemiBold",
  fontSize: 16 * height,
  color: Color.black(1)
 },

 trainingSetContent:{
  position: "absolute",
  left: 57,
  top: 25.5,
  fontFamily: "PretendardSemiBold",
  fontSize: 12 * height,
  color: Color.gray_400(1)
 },

 trainingSetDetailButton:{
  position: "absolute", 
  right: 0,
  top: 0,
  borderRadius:8,
  paddingHorizontal: 12,
  paddingVertical: 9,
  backgroundColor: Color.primary_500(0.1)
 },

 trainingSetDetailButtonText:{
  fontFamily: "PretendardMedium",
  fontSize: 12 * height,
  color: Color.primary_700(1),
 },
 trainingSetBottomLine:{
     position: "absolute",
     width: "100%",
     height:1,
     bottom: 0,
     backgroundColor: Color.gray_100(1)
 },

 scrollRect:{
  width: "100%",
  height: 346,
  overflow: "hidden",
  marginTop: 25,
 }

  

});

export default PlanCheck;