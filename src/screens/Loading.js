import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Color} from '../GlobalStyles';

const Loading = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.logo}
        source={require('../assets/img/logo.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.white,
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    position: 'relative',
    width: 130,
    height: 80,
  },
});

export default Loading;
