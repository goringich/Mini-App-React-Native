import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";
import muscleImage from "../../assets/images/login/react-logo.png";
import SwipeIndicator from "./components/SwipeIndicator/SwipeIndicator";
import Title from "./components/Title";
import ImageWrapper from "./components/ImageWrapper";
import { Colors } from "@colors";

interface WelcomeScreenProps {
  translateY: Animated.Value;
  paramTranslateY: Animated.Value;
  imageTranslateY: Animated.Value;
  titleOpacity: Animated.Value;
  panHandlers: any;
  onImagePress: () => void;
  swipeIndicatorOpacity: Animated.Value;
  toggleLoginForm: () => void;
}

const styles = StyleSheet.create({
  touchable: {
    alignItems: "center",
  },
  swipeContainer: {
    position: "absolute",
    bottom: 40, 
    left: 0,
    right: 0,
    alignItems: "center", 
    justifyContent: "center",
  },
});

const BackgroundFillBlack = styled.View`
  width: 80%;
  height: 100%;
  background-color: ${Colors.dark.backgroundFill};
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
  position: relative;
  bottom: 15px;
`;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  translateY,
  paramTranslateY,
  titleOpacity,
  panHandlers,
  onImagePress,
  swipeIndicatorOpacity,
  toggleLoginForm,
}) => {
  const [swipeIndicatorWidth, setSwipeIndicatorWidth] = useState(0);

  const adjustedScaleImage = paramTranslateY.interpolate({
    inputRange: [0, 1],
    outputRange: [0.65, 1],
    extrapolate: "clamp",
  });

  const adjustedTranslateY = paramTranslateY.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
    extrapolate: "clamp",
  });

  return (
    <>
      <Title opacity={titleOpacity} />
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          pointerEvents: "auto",
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3,
          backgroundColor: "#FFBE17",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}
        {...panHandlers}
      >
        <TouchableOpacity onPress={onImagePress} style={[styles.touchable, { zIndex: 10 }]}>
          <BackgroundFillBlack>
            <ImageWrapper
              scaleImage={adjustedScaleImage}
              imageTranslateY={adjustedTranslateY}
              source={muscleImage}
            />
          </BackgroundFillBlack>
        </TouchableOpacity>
      </Animated.View>

    <View style={styles.swipeContainer}>
      <SwipeIndicator
        onLayout={(event) => setSwipeIndicatorWidth(event.nativeEvent.layout.width)}
        style={{
          transform: [{ translateX: -swipeIndicatorWidth / 2 }],
          opacity: swipeIndicatorOpacity,
        }}
        onPress={toggleLoginForm}
      />
    </View>
    </>
  );
};

export default WelcomeScreen;
