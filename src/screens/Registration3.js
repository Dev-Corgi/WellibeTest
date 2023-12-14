import React, { useState, useEffect,useContext } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Color, FontFamily ,height} from "../GlobalStyles";
import SelectionList from "../components/SelectionList";
import { useNavigation } from "@react-navigation/native";
import RegistrationTooltip from '../components/RegistrationTooltip';
import Button1 from "../components/Button1";
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const Registration3 = ({ buttonCallBack }) => {
  const navigation = useNavigation();

  const [isButtonActive, setisButtonActive] = useState(false)
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { progress, setProgress } = useContext(ProgressContext);

  useEffect(() => {
    setScreenName("성별 선택")
    setProgress(75);
    }, [])

  return (
    <View style={styles.view}>
      <RegistrationTooltip
        title={"성별이\n어떻게 되시나요?"}
        message={"서비스 고도화를 위해 저희만 알고 있을게요"}
      ></RegistrationTooltip>
        <SelectionList style={{marginTop: 32}}
          selections={["남성", "여성", "기타"]}
          onSelect={() => setisButtonActive(true)}
        ></SelectionList>
      <Button1
        style={{ position: "absolute", bottom: 36 }}
        text={"다음"}
        onPress={() =>
          {if (isButtonActive) {
            navigation.navigate("Registration4");
          }}
        }
        isActive={isButtonActive}
      ></Button1>
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
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Registration3;
