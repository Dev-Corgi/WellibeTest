import * as React from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import RegistrationInfo from '../components/RegistrationInfo';
import SelectionList from '../components/SelectionList';
const Registration8 = () => {
  return (
    <View style = {styles.view}>
      <Text style={styles.title}>{'목표하는 하루 트레이닝\n시간은 얼마나 될까요?'}</Text>
      <RegistrationInfo
        text={'5분 이상을 추천드릴게요!.'}></RegistrationInfo>
      <View style={styles.contentFrame}>
      <SelectionList
         style={{gap:8,flexDirection: "row", justifyContent: "space-between"}}
          selections={[
            '5분 이하.',
            '5분 이상',
          ]}></SelectionList>
     <View style = {styles.selectionframe}>
      <Pressable style = {styles.selection}></Pressable>
      <Pressable style = {styles.selection}></Pressable>
     </View>
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

export default Registration8;