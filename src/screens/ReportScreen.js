import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Color, FontFamily ,height} from '../GlobalStyles';
import NavigationHeader from '../components/NavigationHeader';
import PointFrame from "../assets/img/PointFrame.png"
import BackFullImage1 from "../assets/img/backFullImage1.png"
import BackFullImage2 from "../assets/img/backFullImage2.png"
import BackFullImage3 from "../assets/img/backFullImage3.png"
import BackFullImage4 from "../assets/img/backFullImage4.png"
import ic_heart_blue from "../assets/img/ic_HeartBlue.png"
import ic_heart_red from "../assets/img/ic_HeartRed.png"
import faceMask from "../assets/img/faceMask.png"
import ReportSlider from '../components/ReportSlider';
import { ScreenNameContext } from '../store/ScreenNameContext';
const ReportScreen = () => {

  const { screenName, setScreenName } = useContext(ScreenNameContext);

  const [sliderValue, setSliderValue] = useState(0)
  const [point, setPoint] = useState(0)
  const [diff, setDiff] = useState(0)
  const [backImage, setBackImage] = useState(BackFullImage1)

  const reportDatas = [
    {
      image : BackFullImage1,
      point: 6,
      diff : -6,
      date : "2023.3.7"
    },
    {
      image : BackFullImage2,
      point: 67,
      diff : 61,
      date : "2023.3.14"
    },
    {
      image : BackFullImage3,
      point: 80,
      diff : 13,
      date : "2023.3.21"
    },
    {
      image : BackFullImage4,
      point: 99,
      diff : 19,
      date : "2023.3.28"
    },
  ]
  
  
  useEffect(() => {
  if(sliderValue >=0 && sliderValue < 25){setReportData(0)}
  else if(sliderValue > 25 && sliderValue < 50){setReportData(1)}
  else if(sliderValue >=50 && sliderValue < 75){setReportData(2)}
  else if(sliderValue >=75 && sliderValue < 100){setReportData(3)}
  }, [sliderValue])

  const setReportData = (index) =>{
    setScreenName(reportDatas[index].date)
    setPoint(reportDatas[index].point)
    setDiff(reportDatas[index].diff)
    setBackImage(reportDatas[index].image)
  }

  return (
    <View style={styles.view}>
      <Image style = {styles.backgroundImage} source={backImage}></Image>
      <View style = {styles.reviewPointFrame}>
      <Image style = {styles.reviewPointImage} source = {PointFrame}></Image>
      <Text style = {styles.reviewPoint}>{point}</Text>
      </View>
      <NavigationHeader  style={{marginTop: 41}} color={Color.black()}></NavigationHeader>
      <Image style = {styles.faceMask} source={faceMask}></Image>
      <View style = {styles.statFrame}>
        <Text style = {[styles.statTitle,{marginLeft: 21}]}>지난 주 대비</Text>
        <Text style = {[styles.statTitle,{marginLeft: 99}]}>만족도</Text>
        <Image style = {styles.ic_heart} source = {diff < 0 ? ic_heart_blue : ic_heart_red}></Image>
        <Text style = {[styles.statPoint,{color : diff < 0 ? Color.system_300() : Color.system_400()}]}>{diff}% {diff < 0 ? "하락" : "상승"}</Text>
      </View>
      <ReportSlider style={{position: "relative", marginTop: 23}} sliderValue = {sliderValue} setSliderValue={setSliderValue}></ReportSlider>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },

  backgroundImage:{
     position: "absolute",
     width: "100%",
     height: "100%"
  },

  reviewPointFrame:{
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 130,
    right: 28,
    width: 76,
    height: 67
  },

  reviewPoint:{
   fontFamily: FontFamily.PretendardBold,
   fontSize: 24 * height,
   color: Color.system_400()
  },

  reviewPointImage:{
    position: "absolute",
    width: "100%",
    height: "100%"
  },

  faceMask:{
     marginTop: 168,
     width: 240,
     height: 322
  },

  statFrame:{
    marginTop : 82,
    display: "flex",
    flexDirection: "row",
   alignItems: "center",
    width: 333,
    height: 57,
    borderRadius: 10,
    backgroundColor: Color.black(0.2)
  },

  statTitle:{
    fontFamily: FontFamily.PretendardBold,
    color: Color.white(),
    fontSize: 14 * height,
    // marginLeft: 21
    // marginLeft: 99
  },

  ic_heart:{
    marginLeft : 9,
    width: 22,
    height: 18
  },

  statPoint:{
    marginLeft : 7.5,
    fontFamily: FontFamily.PretendardBold,
    color: Color.system_300(),
    fontSize: 14 * height,
  }

});

export default ReportScreen;
