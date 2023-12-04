import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';
import Button1 from '../components/Button1';
import RegistrationInfo from '../components/RegistrationInfo';
const RegistrationFrame = () => {

  return (
    <View style={styles.view}>
      <View style={styles.frame}>
        <View style={styles.headerFrame}>
          <Image style={styles.backButton} source={require("../assets/img/backButton.png")}></Image>
          <Text style={styles.headerTitle}>{"이름 선택"}</Text>
          <View style={styles.progressbarOut}>
            <View style={styles.progressbarIn}></View>
          </View>
        </View>
        <View style={styles.contentFrame}>
          <Text style={styles.title}>{"웰리비에서 사용할\n닉네임을 알려주세요"}</Text>
          <RegistrationInfo style = {{marginTop : 26}} text={"언제든 변경할 수 있어요"}></RegistrationInfo>
          <View style={styles.inputfieldFrame}>
            <Text style={styles.inputfieldText}>웰리</Text>
          </View>
          <Text style={styles.subtext}>수정을 원하시면 탭하여 주세요.</Text>
        </View>
        <Button1 text = {"다움"}></Button1>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white(1),
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  frame: {
    position: "relative",
    width: 334,
    height: 751,
    display: 'flex',
    flexDirection: "column",
    zIndex: 1
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
    height: 14.24
  },

  headerTitle: {
    position: "relative",
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 20,
    color: Color.black(1)
  },

  progressbarOut: {
    width: 326,
    height: 3,
    marginTop: 12,
    borderRadius: 500,
    backgroundColor: Color.gray_200(1)
  },

  progressbarIn: {
    width: 76,
    height: 3,
    borderRadius: 500,
    backgroundColor: Color.primary_700(1)
  },

  contentFrame: {
    position: "relative",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    width: 329,
    height: 613,
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black(1),
    lineHeight: 34,
    width: "100%",
    textAlign : "left",
    marginBottom: 20,
  },

  inputfieldFrame: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 52,
    borderRadius: 12,
    backgroundColor: Color.gray_200(1),
    marginTop : 27
  },

  inputfieldText: {
    fontFamily: FontFamily.PretendardSemiBold,
    fontSize: 18,
    color: Color.black(1)
  },

  subtext: {
    fontFamily: FontFamily.PretendardLight,
    color: Color.gray_500(1),
    width: "100%",
    fontSize: 12,
    marginTop: 14,
    textAlign: "center"
  }

});

export default RegistrationFrame;
