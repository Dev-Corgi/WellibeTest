import { Easing, interpolate, Extrapolate } from 'react-native-reanimated';

const SlideMotion = ({ current, layouts }) => {
  const { progress } = getValues(current);

  const translateX = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [layouts.screen.width, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return { transform: [{ translateX }] };
};

export default SlideMotion;