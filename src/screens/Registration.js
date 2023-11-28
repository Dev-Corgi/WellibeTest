import React, { useState, useEffect } from "react";
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
import { Color, FontFamily } from "../GlobalStyles";
import ProgressBar from "../components/ProgressBar";
import Button1 from "../components/Button1";

import Registration1 from "./Registration1";
import Registration2 from "./Registration2";
import Registration3 from "./Registration3";
import Registration4 from "./Registration4";
import Registration5 from "./Registration5";
import Registration6 from "./Registration6";
import Registration7 from "./Registration7";
import Registration8 from "./Registration8";
import Registration9 from "./Registration9";
import Registration10 from "./Registration10";
import Registration12 from "./Regustration12";

const Registration = () => {
  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();

  const [index, setindex] = useState(1);

  const [progress, setprogress] = useState(0);

  const [isButtonActive, setIsButtonActive] = useState(false);

  function handleActiveButton() {
    setIsButtonActive(true);
  }

  function handleResetButton() {
    setIsButtonActive(false);
  }

  useEffect(() => {
    DeviceEventEmitter.addListener("RegistrationReady", handleActiveButton);
    DeviceEventEmitter.addListener("RegistrationReset", handleResetButton);

    return () => {
      DeviceEventEmitter.removeAllListeners("RegistrationReady");
      DeviceEventEmitter.removeAllListeners("RegistrationReset");
    };
  }, []);

  const screenList = [
    // { name: "Registration1", screen: Registration1 },
    // { name: "Registration2", screen: Registration2 },
    // { name: "Registration3", screen: Registration3 },
    // { name: "Registration4", screen: Registration4 },
    // { name: "Registration5", screen: Registration5 },
    // { name: "Registration6", screen: Registration6 },
    // { name: "Registration7", screen: Registration7 },
    // { name: "Registration8", screen: Registration8 },
    // { name: "Registration9", screen: Registration9 },
    // { name: "Registration10", screen: Registration10 },
    { name: "Registration12", screen: Registration12 },
  ];

  const onPressHandler = () => {
    const maxIndex = screenList.length;
    if (index < maxIndex) {
      setindex((prev) => prev + 1);
      setprogress((index / maxIndex) * 100);
      navigation.navigate(screenList[index].name);
    } else {
      navigation.navigate("PlanCheck");
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.frame}>
        <View style={styles.headerFrame}>
          <Image
            style={styles.backButton}
            source={require("../assets/img/backButton.png")}
          ></Image>
          <Text style={styles.headerTitle}>{"이름 선택"}</Text>
          <ProgressBar
            style={{ marginTop: 12 }}
            progress={progress}
          ></ProgressBar>
        </View>
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
          style={{ position: "absolute", bottom: 0 }}
          text={"다음"}
          onPress={() =>
            DeviceEventEmitter.emit("RegistrationEvent", {
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
    backgroundColor: Color.white,
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  frame: {
    position: "relative",
    width: 340,
    height: 751,
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
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
    fontSize: 20,
    color: Color.black,
  },
});

export default Registration;
