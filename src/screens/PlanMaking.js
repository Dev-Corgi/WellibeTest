import React, { useState, useEffect,useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack 네비게이션
import {
  DeviceEventEmitter,
  StyleSheet,
  Image,
  View,
  Text,
  Easing,
} from "react-native";
import { Color, FontFamily ,height} from "../GlobalStyles";
import ProgressBar from "../components/ProgressBar";
import NavigationHeader from "../components/NavigationHeader";

import PlanMaking1 from "./PlanMaking1";
import PlanMaking2 from "./PlanMaking2";
import PlanMaking3 from "./PlanMaking3";
import PlanMaking4 from "./PlanMaking4";

import { ProgressContext } from "../store/ProgressContext";
import Button1 from "../components/Button1";

//플랜 만들기 화면
//이부분 화면은 조금 꼬여 있어서 재설계 하는게 나을 수도 있습니다
//애니메이션 적용 없이 급하게 옆으로 넘기는 파트를 구현하느라 겉화면과 안 화면을 분리하고,
//버튼을 따로 빼서 이벤트를 통해 다음으로 넘어가는 조건을 감지하는 식으로 구현했는데
//애니메이션 트랜지션을 적용할 여유가 된다면 그 방식대로 새로 구현하는게 나을것 같습니다

const PlanMaking = () => {
  const Stack = createNativeStackNavigator();
  const { progress, setProgress } = useContext(ProgressContext);



  const screenList = [
    { name: "PlanMaking1", screen: PlanMaking1 },
    { name: "PlanMaking2", screen: PlanMaking2 },
    { name: "PlanMaking3", screen: PlanMaking3 },
    { name: "PlanMaking4", screen: PlanMaking4 },
  ];

  const [isButtonActive, setIsButtonActive] = useState(false);

  function handleActiveButton() {
    setIsButtonActive(true);
  }

  function handleResetButton() {
    setIsButtonActive(false);
  }

  useEffect(() => {
    DeviceEventEmitter.removeAllListeners("PlanReady");
    DeviceEventEmitter.removeAllListeners("PlanReset");
    DeviceEventEmitter.addListener("PlanReady", handleActiveButton);
    DeviceEventEmitter.addListener("PlanReset", handleResetButton);

    return () => {
      DeviceEventEmitter.removeAllListeners("PlanReady");
      DeviceEventEmitter.removeAllListeners("PlanReset");
    };
  }, []);


  return (
    <View style={styles.view}>
        <NavigationHeader style={{marginTop: 41}}></NavigationHeader>
        <ProgressBar style={{marginTop : 16}} progress={progress}></ProgressBar>
        <View style={styles.frame}>
        <Stack.Navigator>
          {screenList.map((screen, index) => {
            return (
              <Stack.Screen
                key={index}
                name={screen.name}
                component={screen.screen}
                options={{headerShown: false}}
              />
            );
          })}
        </Stack.Navigator>
        <Button1
          style={{ position: "absolute", bottom: 36 }}
          text={"다음"}
          onPress={() =>
            DeviceEventEmitter.emit("PlanEvent", {
              data: "Custom event data",
            })
          }
          isActive={isButtonActive}
        ></Button1>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  frame: {
    position: "relative",
    width: 340,
    height: 681,
    display: "flex",
    flexDirection: "column",
    marginTop : 20,
  },

  headerFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 326,
    height: 49,
  },

  backButton: {
    position: "absolute",
    top: 5,
    left: 0,
    width: 7.65,
    height: 14.24,
  },

  headerTitle: {
    position: "relative",
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 20 * height,
    color: Color.black(1),
  },
});

export default PlanMaking;
