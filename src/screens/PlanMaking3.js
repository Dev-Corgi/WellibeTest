import React, { useState, useEffect,useContext } from "react";
import {
  DeviceEventEmitter,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import { Color, FontFamily ,height} from "../GlobalStyles";
import SelectionList from "../components/SelectionList";
import { useNavigation } from "@react-navigation/native";
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const PlanMaking3 = () => {
  const navigation = useNavigation();

  const [isButtonActive, setisButtonActive] = useState(false);
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { progress, setProgress } = useContext(ProgressContext);

  function handleRegistration () {
    navigation.navigate("PlanMaking4");
  }

  function handleRegistrationReady () {
    DeviceEventEmitter.emit('PlanReady', { data: 'Custom event data' });
  }

  useEffect(() => {
    DeviceEventEmitter.emit('PlanReset', { data: 'Custom event data' });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener('PlanEvent', handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeListener('PlanEvent', handleRegistration);
    };
  }, []);

  useEffect(() => {
    setScreenName("상태 체크")
    setProgress(75);
    }, [])

  return (
    <View style={styles.view}>
      <RegistrationTooltip
        title={"현재 해당하는\n상태에 체크해 주세요"}
        message={"중복 체크도 가능해요."}
      ></RegistrationTooltip>
        <SelectionList
         style={{marginTop: 32}}
          selections={[
            "눈에 힘이 없거나 눈꺼풀이 쳐져 있어요",
            "웃을 때 소극적으로 웃어요",
            "볼(입 옆의 피부)이 처져 있어요",
            "입꼬리가 처져 있거나 비뚤어져 있어요",
            "해당 없음",
          ]}
          onSelect={
            handleRegistration
          }
          isMulti = {true}
          resetIndex={4}
        ></SelectionList>
      {/* <Button1
        style={{ position: "absolute", bottom: 36 }}
        text={"다음"}
        onPress={() => {
          if (isButtonActive) {
            navigation.navigate("PlanMaking4");
          }
        }}
        isActive={isButtonActive}
      ></Button1> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center"
  },

  contentFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22 * height,
    color: Color.black(1),
    lineHeight: 34,
    width: "100%",
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default PlanMaking3;
