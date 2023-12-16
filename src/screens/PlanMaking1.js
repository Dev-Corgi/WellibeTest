import React, { useState, useEffect,useContext } from "react";
import {
  DeviceEventEmitter,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import { Color, FontFamily ,height} from "../GlobalStyles";
import RegistrationInfo from "../components/RegistrationInfo";
import SelectionList from "../components/SelectionList";
import { useNavigation } from "@react-navigation/native";
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from '../components/Button1';
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const PlanMaking1 = () => {
  const navigation = useNavigation();

  const [isButtonActive, setisButtonActive] = useState(false);
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { progress, setProgress } = useContext(ProgressContext);

  function handleRegistration () {
    navigation.navigate("PlanMaking2");
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
    setScreenName("목적 선택")
    setProgress(25);
    }, [])

  return (
    <View style={styles.view}>
      <RegistrationTooltip
        title={"어떤 목적으로\n웰리비를 찾아주셨나요?"}
        message={"적절한 트레이닝 추천에 필요해요!"}
      ></RegistrationTooltip>
        <SelectionList
        style={{marginTop: 32}}
          selections={[
            "풍부한 표정을 만들고 싶어요",
            "얼굴 비대칭이 고민이에요",
            "작고 갸름한 얼굴을 만들고 싶어요",
            "주름을 예방/개선하고 싶어요",
            "피부 처짐을 예방/개선하고 싶어요",
          ]}
          onSelect={handleRegistrationReady}
        ></SelectionList>
      {/* <Button1
        style={{ position: "absolute", bottom: 36 }}
        text={"다음"}
        onPress={() =>
          {if (isButtonActive) {
            navigation.navigate("PlanMaking2");
          }}
        }
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

export default PlanMaking1;
