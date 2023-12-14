import React,{useState,useEffect,useContext} from 'react';
import {StyleSheet, Image, View, Text,TextInput, Pressable,ScrollView} from 'react-native';
import {Color,FontFamily,height} from '../GlobalStyles';
import Button1 from '../components/Button1';
import {useNavigation} from '@react-navigation/native';
import TextTabMenu from '../components/TextTabMenu';
import Calender from "../assets/img/CalenderImage.png"
import PlanTable from "../assets/img/PlanTable.png"
import NavigationHeader from '../components/NavigationHeader';
import { ScreenNameContext } from '../store/ScreenNameContext';
const TodayTraining = () => {
  const navigation = useNavigation();
  const [tabState, setTabState] = useState(0)
  const { screenName, setScreenName } = useContext(ScreenNameContext);

  useEffect(() => {
  setScreenName("오늘의 트레이닝")
  }, [])
  return (
    <View style = {styles.view}>
    <View style = {styles.banner}>
        <Image style = {styles.bannerImage} source={require("../assets/img/PlanCheck.png")}></Image>
        <Text style = {{position: "relative", marginLeft : 31 ,marginTop: 147, fontFamily: "PretendardRegular", color: Color.white(1), fontSize: 16 * height}}>
            풍부한 표정 만들기
        </Text>
        <Text style = {{position: "relative", marginLeft : 31 ,marginTop: 2, fontFamily: "PretendardBold", color: Color.white(1), fontSize: 22 * height}}>
            밝고 자신감있는 표정 만들기
        </Text>
        <View style = {styles.bannerForeground}>
            <Text style = {{fontFamily : "PretendardBold", fontSize:14, color: Color.white(1)}}>1차 시즌</Text>
            <Text style = {{fontFamily : "PretendardRegular", fontSize:14, color: Color.white(1)}}>{"2023.02.03~2023.03.03"}</Text>
        </View>
    </View>
    <TextTabMenu style={{marginTop: 26, marginLeft:29}} list = {["트레이닝 구성","리포트"]} gap={24} activeStyle={styles.tabActiveTag} unActiveStyle={styles.tabUnactiveTag} currentIndex={tabState} setCurrentIndex={setTabState}></TextTabMenu>
    {
        tabState == 0 ?
        <View style = {styles.contentFrame}>
        <View style = {styles.statFrame}>
            <View style = {styles.statComp}>
                <Text style = {styles.statCompTitle}>트레이닝 수</Text>
                <View style = {[styles.statCompData,{backgroundColor : Color.primary_700(0.1), color : Color.primary_700(1)}]}>
                    <Text>6개</Text>
                </View>
            </View>
            <View style = {styles.statComp}>
                <Text style = {styles.statCompTitle}>트레이닝 시간</Text>
                <View style = {[styles.statCompData,{backgroundColor : Color.system_300(0.1), color : Color.system_300(1)}]}>
                    <Text>4분 21초</Text>
                </View>
            </View>
        </View>
        <Image style = {styles.trainingTable} source={PlanTable}></Image>
    </View>
    :
    
    <View style = {styles.contentFrame}>
    <View style = {styles.statFrame}>
        <View style = {styles.statComp}>
            <Text style = {styles.statCompTitle}>시즌 출석율</Text>
            <View style = {[styles.statCompData,{backgroundColor : Color.primary_700(0.1), color : Color.primary_700(1)}]}>
                <Text>5%</Text>
            </View>
        </View>
        <View style = {styles.statComp}>
            <Text style = {styles.statCompTitle}>시즌 종료까지</Text>
            <View style = {[styles.statCompData,{backgroundColor : Color.system_100(0.1), color : Color.system_100(1)}]}>
                <Text>21일</Text>
            </View>
        </View>
    </View>
    <Image style = {styles.calender} source={Calender}></Image>
</View>
    }
    {
      tabState == 0 ?
    <Button1
    style={{position: 'absolute', bottom: 36, marginLeft: 27}}
    text={'시작하기'}
    onPress={() =>navigation.navigate("PlanStartingScreen")}
   ></Button1>
   :
   <Button1
   style={{position: 'absolute', bottom: 36, marginLeft: 27}}
   text={'이번시즌 변화보기'}
   onPress={() => navigation.navigate("ReportScreen")}
  ></Button1>
    }

    <NavigationHeader style={{position: "absolute", left: 18, top:45}} color = {Color.white()}></NavigationHeader>
    <Pressable style ={styles.planChangeButton} onPress={() =>navigation.navigate("DailyTrainingReport")}>
      <Text style = {styles.planChangeButtonText}>플랜 변경</Text>
    </Pressable>
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
    backgroundColor: Color.black(0.2),
    gap: 120
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
 },

 tabUnactiveTag:{
    fontFamily: FontFamily.PretendardRegular,
    fontSize: 18 * height,
    color: Color.gray_400()
 },

 tabActiveTag:{
    fontFamily: FontFamily.PretendardBold,
    fontSize: 18 * height,
    color: Color.black()
 },

 contentFrame:{
    display: "flex",
    flexDirection: "column",
    marginTop: 35.5,
    alignItems: 'center'
 },

 statFrame:{
    display: "flex",
    flexDirection: "row",
    gap: 13
},

statComp:{
    display: "flex",
    flexDirection: "row",
    gap: 5
},

statCompTitle:{
   fontFamily: FontFamily.PretendardRegular,
   color: Color.gray_500(),
   fontSize: 14 * height
},

statCompData:{
  display: "flex",
  margin : 6,
  borderRadius: 4,
  alignItems: "center",
  justifyContent: "center",
  fontFamily: FontFamily.PretendardBold,
  fontSize: 12 * height
},

calender:{
 marginTop: 18,
 width: 331,
 height: 275
},

trainingTable:{
    marginTop: 18,
    width: 375,
    height: 387.9
},

planChangeButton:{
position: "absolute",
top: 51,
right: 26,
},

planChangeButtonText:{
fontFamily: FontFamily.PretendardRegular,
fontSize:16,
color: Color.primary_700()
}


 

  

});

export default TodayTraining;