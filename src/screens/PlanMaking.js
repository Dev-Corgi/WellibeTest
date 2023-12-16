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
