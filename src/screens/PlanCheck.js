import React from 'react';
import {StyleSheet, Image, View, Text,TextInput, Pressable,ScrollView} from 'react-native';
import {Color,FontFamily} from '../GlobalStyles';
import Button1 from '../components/Button1';
import {useNavigation} from '@react-navigation/native';


const PlanCheck = () => {
  const navigation = useNavigation();
  return (
    <View style = {styles.view}>
    <View style = {styles.banner}>
        <Image style = {styles.bannerImage} source={require("../assets/img/PlanCheck.png")}></Image>
        <Text style = {{position: "relative", marginLeft : 31 ,marginTop: 147, fontFamily: "PretendardRegular", color: Color.white, fontSize: 16}}>
            풍부한 표정 만들기
        </Text>
        <Text style = {{position: "relative", marginLeft : 31 ,marginTop: 2, fontFamily: "PretendardBold", color: Color.white, fontSize: 22}}>
            밝고 자신감있는 표정 만들기
        </Text>
        <View style = {styles.bannerForeground}>
            <Text style = {{fontFamily : "PretendardBold", fontSize:14, color: Color.white}}>1차 시즌</Text>
            <Text style = {{fontFamily : "PretendardRegular", fontSize:14, color: Color.white}}>{"2023.02.03~2023.03.03"}</Text>
        </View>
    </View>
    <Text style = {{fontFamily : "PretendardBold", fontSize:22, color: Color.black,marginTop:35,marginLeft:29}}>{"웰리님만을 위한\n시즌 트레이닝 플랜이에요"}</Text>
    <View style = {styles.trainingTagsFrame}>
      <View style = {styles.trainingTag}>
        <Text style = {styles.trainingTagTitle}>트레이닝 수</Text>
        <View style = {[styles.trainingTagInfo,{backgroundColor: "rgba(245,212,96,0.1)"}]}>
          <Text style = {[styles.trainingTagInfoText,{color: Color.colorKhaki}]}>6개</Text>
        </View>
      </View>
      <View style = {styles.trainingTag}>
        <Text style = {styles.trainingTagTitle}>트레이닝 시간</Text>
        <View style = {[styles.trainingTagInfo,{backgroundColor: "rgba(0,153,255,0.1)"}]}>
          <Text style = {[styles.trainingTagInfoText,{color: Color.subBlue}]}>4분 21초</Text>
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
          onPress={() =>navigation.navigate("PhotoTakenSceen")}
         ></Button1>
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
    backgroundColor: "rgba(0,0,0,0.2)",
    gap: 120
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

  trainingTagsFrame:{
    marginTop: 31,
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
     fontSize: 14,
     color: Color.colorGray_400
  },

  trainingTagInfo:{
    paddingVertical: 4,
    paddingHorizontal:6,
    borderRadius: 6,
 },
 
 trainingTagInfoText:{
  fontFamily: "PretendardBold",
  fontSize: 12,
  opacity: 1
 },

 trainingTable:{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 19,
 },

 trainingSetFrame:{
  position: "relative",
  width: 330,
  height: 54,
  marginLeft: 27
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
  fontSize: 16,
  color: Color.black
 },

 trainingSetContent:{
  position: "absolute",
  left: 57,
  top: 25.5,
  fontFamily: "PretendardSemiBold",
  fontSize: 12,
  color: Color.colorGray_500
 },

 trainingSetDetailButton:{
  position: "absolute", 
  right: 0,
  top: 0,
  borderRadius:8,
  paddingHorizontal: 12,
  paddingVertical: 9,
  backgroundColor: "rgba(245,212,96,0.1)"
 },

 trainingSetDetailButtonText:{
  fontFamily: "PretendardMedium",
  fontSize: 12,
  color: Color.orange,
 },
 trainingSetBottomLine:{
     position: "absolute",
     width: "100%",
     height:1,
     bottom: 0,
     backgroundColor: Color.colorWhitesmoke_100
 },

 scrollRect:{
  width: "100%",
  height: 346,
  overflow: "hidden",
  marginTop: 25,
 }

  

});

export default PlanCheck;