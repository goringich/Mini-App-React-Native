import { Animated, Easing } from "react-native";

export const createAnimatedValues = () => ({
  translateY: new Animated.Value(16),
  titleOpacity: new Animated.Value(1),
  overlayOpacity: new Animated.Value(0),
  swipeIndicatorOpacity: new Animated.Value(1),
  imageTranslateY: new Animated.Value(0),
  paramTranslateY: new Animated.Value(1),
});

export const showLoginFormAnimation = (
  translateY: Animated.Value,
  paramTranslateY: Animated.Value,
  swipeIndicatorOpacity: Animated.Value,
  titleOpacity: Animated.Value,
  setIsLoginVisible: (visible: boolean) => void
) => {
  Animated.sequence([
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -400,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(paramTranslateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(swipeIndicatorOpacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(titleOpacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]),
  ]).start(() => {
    setIsLoginVisible(true);
  });
};

export const hideLoginFormAnimation = (
  translateY: Animated.Value,
  paramTranslateY: Animated.Value,
  swipeIndicatorOpacity: Animated.Value,
  titleOpacity: Animated.Value,
  setIsLoginVisible: (visible: boolean) => void
) => {
  Animated.sequence([
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 16,
        duration: 700,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(paramTranslateY, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(swipeIndicatorOpacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]),
  ]).start(() => {
    setIsLoginVisible(false);
  });
};
