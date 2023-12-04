import {StyleSheet, Image, View} from 'react-native';
import {Color} from '../GlobalStyles';
import React,{useState,useEffect,useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { StarterContext } from '../store/StarterContext';


const Loading = () => {
  const [loadingProgress, setloadingProgress] = useState(0)
  const navigation = useNavigation();

    //나중에 없앨것
    const {isStarter,setIsStarter} = useContext(StarterContext)

    useEffect(() => {
    setIsStarter(true);
    }, [])
    //나중에 없앨것

  let progressInterval = null

  useEffect(() => {
    progressInterval = setInterval(increaseProgress, 10);
  }, [])

  function increaseProgress() {
    setloadingProgress((prevProgress) => {
      const newProgress = prevProgress + 1;
  
      if (newProgress >= 100) {
        clearInterval(progressInterval);
        navigation.navigate("Login");
      }
  
      return newProgress;
    });
}

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
    backgroundColor: Color.white(1),
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
