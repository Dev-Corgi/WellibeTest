import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
const Registration4 = ({buttonCallBack}) => {
  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'현재 어떠한\n일을 하고 계신가요?'}</Text>
      <RegistrationInfo
        text={'서비스 고도화를 위해 저희만 알고 있을게요'}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <SelectionList
        style={{gap : 10}}
          selections={[
            '학생',
            '취업 준비생',
            '직장인',
            '주부',
            '기타',
          ]}></SelectionList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    width: '100%',
    height: '100%',
  },

  contentFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 27,
  },

  title: {
    fontFamily: FontFamily.PretendardBold,
    fontSize: 22,
    color: Color.black,
    lineHeight: 34,
    width: '100%',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Registration4;