import React, { useState, useEffect,useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack 네비게이션
import {
  StyleSheet,
  View,
} from "react-native";
import { Color, FontFamily ,height} from "../GlobalStyles";
import ProgressBar from "../components/ProgressBar";
import NavigationHeader from "../components/NavigationHeader";

import Registration1 from "./Registration1";
import Registration2 from "./Registration2";
import Registration3 from "./Registration3";
import Registration4 from "./Registration4";

import { ProgressContext } from "../store/ProgressContext";

const Registration = () => {
  const Stack = createNativeStackNavigator();
  const { progress, setProgress } = useContext(ProgressContext);

  const screenList = [
    { name: "Registration1", screen: Registration1 },
    { name: "Registration2", screen: Registration2 },
    { name: "Registration3", screen: Registration3 },
    { name: "Registration4", screen: Registration4 },
  ];

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
    marginTop : 20,
    width: 340,
    height: 681,
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
    fontSize: 20 * height,
    color: Color.black(1),
  },
});

export default Registration;
