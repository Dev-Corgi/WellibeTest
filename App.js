import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Intro from "./src/screens/Intro";
import Loading from "./src/screens/Loading";
import Registration from "./src/screens/Registration";
import RegistrationDone from "./src/screens/RegistrationDone";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import PlanLoading from "./src/screens/PlanLoading";
import PlanMaking from "./src/screens/PlanMaking";
import PlanCheck from "./src/screens/PlanCheck";
import { ImageProvider } from "./src/store/ImageContext";
import { ScreenNameProvider } from "./src/store/ScreenNameContext";
import { NicknameProvider } from "./src/store/NicknameContext";
import { ProgressProvider } from "./src/store/ProgressContext";
import PhotoTakenScreen from "./src/screens/PhotoTakenScreen";
import PhotoAuth from "./src/screens/PhotoAuth";
import PhotoCheckScreen from "./src/screens/PhotoCheckScreen";
import PhotoReviewScreen from "./src/screens/PhotoReviewScreen";
import PhotoResultScreen from "./src/screens/PhotoResultScreen";
import TimerSetScreen from "./src/screens/TimerSetScreen";

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const update = "h11";

function App() {
  let [fontsLoaded] = useFonts({
    PretendardBold: require("./assets/fonts/Pretendard-Bold.otf"),
    PretendardRegular: require("./assets/fonts/Pretendard-Regular.otf"),
    PretendardSemiBold: require("./assets/fonts/Pretendard-SemiBold.otf"),
    PretendardLight: require("./assets/fonts/Pretendard-Light.otf"),
    PretendardMedium: require("./assets/fonts/Pretendard-Medium.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageProvider>
      <NicknameProvider>
        <ScreenNameProvider>
          <ProgressProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Loading"
                component={Loading}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Registration"
                component={Registration}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegistrationDone"
                component={RegistrationDone}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Intro"
                component={Intro}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanMaking"
                component={PlanMaking}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanLoading"
                component={PlanLoading}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlanCheck"
                component={PlanCheck}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoAuth"
                component={PhotoAuth}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoTakenScreen"
                component={PhotoTakenScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoCheckScreen"
                component={PhotoCheckScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoReviewScreen"
                component={PhotoReviewScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoResultScreen"
                component={PhotoResultScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TimerSetScreen"
                component={TimerSetScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          </ProgressProvider>
        </ScreenNameProvider>
      </NicknameProvider>
    </ImageProvider>
  );
}

export default App;
