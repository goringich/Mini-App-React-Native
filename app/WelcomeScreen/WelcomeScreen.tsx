import React from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";
import muscleImage from "../../assets/images/login/react-logo.png";
import Title from "./components/Title";
import ImageWrapper from "./components/ImageWrapper";


interface WelcomeScreenProps {
  translateY: Animated.Value;
  scaleImage: Animated.AnimatedInterpolation;
  imageTranslateY: Animated.Value;
  titleOpacity: Animated.Value;
  panHandlers: any;
  onImagePress: () => void;
}

const styles = StyleSheet.create({
  touchable: {
    alignItems: "center",
  },
});

const BackgroundFillBlack = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
  // bottom: 15px;
`;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  translateY,
  scaleImage,
  imageTranslateY,
  borderBottomPosition,
  titleOpacity,
  panHandlers,
  onImagePress,
}) => {
  const adjustedScaleImage = translateY.interpolate({
    inputRange: [350, 544],
    outputRange: [0.7, 0.3],
    extrapolate: "clamp",
  })

  return (
    <>
      <Title opacity={titleOpacity} />
      <Animated.View
        style={{
          transform: [{ translateY: Animated.add(translateY, 15) }],
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
              imageTranslateY={imageTranslateY}
              source={muscleImage}
            />
          </BackgroundFillBlack>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default WelcomeScreen;
