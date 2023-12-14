import React,{useState,useEffect,useContext} from 'react';
import {DeviceEventEmitter,StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily,height} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import {useNavigation} from '@react-navigation/native';
import ImageSelectionList from '../components/ImageSelectionList';
import GoalSelection1 from "../assets/img/goalSelection1.png"
import GoalSelection2 from "../assets/img/goalSelection2.png"
import GoalSelection3 from "../assets/img/goalSelection3.png"
import GoalSelection4 from "../assets/img/goalSelection4.png"
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const PlanMaking2 = () => {

  const navigation = useNavigation();

  const [isButtonActive, setisButtonActive] = useState(false);
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { progress, setProgress } = useContext(ProgressContext);

  useEffect(() => {
    setScreenName("목표 선택")
    setProgress(50);
    }, [])

  return (
    <View style = {styles.view}>
              <RegistrationTooltip
        title={"어떤 목적으로\n웰리비를 찾아주셨나요?"}
        message={"적절한 트레이닝 추천에 필요해요!"}
      ></RegistrationTooltip>
          <ImageSelectionList  style={{marginTop: 32}} images={[GoalSelection1,GoalSelection2,GoalSelection3,GoalSelection4]} onSelect={() =>setisButtonActive(true)}></ImageSelectionList>
      <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"다음"}
          onPress={() =>
            {if (isButtonActive) {
              navigation.navigate("PlanMaking3");
            }}
          }
          isActive={isButtonActive}
        ></Button1>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "relative",
    backgroundColor: Color.white(1),
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  imageSelection:{
    position: 'relative',
    display : 'flex',
    flexDirection : "row",
    gap: 11,
    flexWrap: "wrap"
  },

  imageframe:{
    position: "relative",
    width: 158,
    height: 215
  }
});

export default PlanMaking2;