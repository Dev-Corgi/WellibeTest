import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
const Registration5 = () => {
  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'어떤 목적으로\n웰리비를 찾아주셨나요?'}</Text>
      <RegistrationInfo
        text={'적절한 트레이닝 추천에 필요해요!'}></RegistrationInfo>
      <View style={styles.contentFrame}>
        <SelectionList
        style={{gap : 10}}
          selections={[
            '풍부한 표정을 만들고 싶어요',
            '얼굴 비대칭이 고민이에요',
            '작고 갸름한 얼굴을 만들고 싶어요',
            '주름을 예방/개선하고 싶어요',
            '피부 처짐을 예방/개선하고 싶어요',
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

export default Registration5;