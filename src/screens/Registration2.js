import React, { useState, useEffect, useRef, useContext } from "react";
import {
  DeviceEventEmitter,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
} from "react-native";
import { Color, FontFamily, height } from "../GlobalStyles";
// import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import RegistrationTooltip from "../components/RegistrationTooltip";
import Button1 from "../components/Button1";
import { ScreenNameContext } from "../store/ScreenNameContext";
import { ProgressContext } from "../store/ProgressContext";
const Registration2 = ({ buttonCallBack }) => {
  const { screenName, setScreenName } = useContext(ScreenNameContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const [date, onChangeDate] = useState("2023"); // 선택 날짜
  const [isYear, setIsYear] = useState(false);

  const navigation = useNavigation();

  const startYear = 1923;
  const endYear = 2023;

  function handleRegistration() {
    navigation.navigate("Registration3");
  }

  function handleRegistrationReady() {
    DeviceEventEmitter.emit("RegistrationReady", { data: "Custom event data" });
  }

  const Years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  useEffect(() => {
    setScreenName("출생 연도");
    setProgress(50);
  }, []);

  useEffect(() => {
    DeviceEventEmitter.emit("RegistrationReset", { data: "Custom event data" });
    // 커스텀 이벤트를 처리하는 함수 등록
    DeviceEventEmitter.addListener("RegistrationEvent", handleRegistration);

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      DeviceEventEmitter.removeListener(
        "RegistrationEvent",
        handleRegistration
      );
    };
  }, []);

  const onPress = () => {
    // 날짜 클릭 시
    setVisible(true); // 모달 open
  };

  const onConfirm = (date) => {
    // 날짜 또는 시간 선택 시
    onChangeDate(date); // 선택한 날짜 변경
    setIsYear(true);
    handleRegistrationReady();
  };

  return (
    <View style={styles.view}>
      <RegistrationTooltip
        title={"웰리님의\n출생연도를 알려주세요"}
        message={"서비스 고도화를 위해 저희만 알고 있을게요"}
      ></RegistrationTooltip>
      <Pressable style={styles.inputfieldFrame} onPress={onPress}>
        <Text style={styles.inputfieldText}>
          {isYear ? date : "출생연도를 선택해 주세요"}
        </Text>
      </Pressable>
      <Text style={styles.subtext}>수정을 원하시면 탭하여 주세요.</Text>
      {visible && (
        <Modal transparent={true}>
          <View style={styles.bottomWheelFrame}>
            <View
              style={{
                position: "relative",
                marginTop: -65,
                width: "100%",
                height: 171,
              }}
            >
              <WheelPickerExpo
                height={171}
                width={"100%"}
                initialSelectedIndex={100}
                backgroundColor="#333333"
                items={Years.map((name) => ({ label: name, value: "" }))}
                onChange={({ item }) => {
                  onConfirm(item.label);
                }}
                renderItem={(props) => {
                  return <Text style={styles.wheelitem}>{props.label}</Text>;
                }}
              />
            </View>
            <Pressable
              style={styles.wheelButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.wheelButtonText}>확인</Text>
            </Pressable>
          </View>
        </Modal>
      )}
      {/* <Button1
        style={{ position: "absolute", bottom: 36 }}
        text={"다음"}
        onPress={() => {
          if (isButtonActive) {
            navigation.navigate("Registration3");
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
    alignItems: "center",
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

  inputfieldFrame: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 52,
    borderRadius: 12,
    marginTop: 32,
    backgroundColor: Color.gray_100(1),
  },

  inputfieldText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18 * height,
    color: Color.black(1),
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.gray_600(1),
    width: "100%",
    fontSize: 12 * height,
    marginTop: 14,
    textAlign: "center",
  },

  bottomWheelFrame: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 260,
    bottom: 0,
    backgroundColor: "#333333",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  wheelButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: Color.black(0.2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  wheelButtonText: {
    position: "relative",
    fontSize: 16 * height,
    FontFamily: FontFamily.PretendardSemiBold,
    color: Color.gray_100(1),
  },

  wheelitem: {
    fontSize: 19 * height,
    fontFamily: FontFamily.PretendardLight,
    color: Color.white(1),
  },
});

export default Registration2;
