import React from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";
import muscleImage from "../../assets/images/login/react-logo.png";
import Title from "./components/Title";
import ImageWrapper from "./components/ImageWrapper";


interface WelcomeScreenProps {
  translateY: Animated.Value;
  paramTranslateY: Animated.Value;
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
  width: 80%;
  height: 100%;
  background-color: #121212;
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 90px;
  position: relative;

  bottom: 15px;
`;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  translateY,
  paramTranslateY,
  imageTranslateY,
  titleOpacity,
  panHandlers,
  onImagePress,
}) => {
  const adjustedScaleImage = paramTranslateY.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
    extrapolate: "clamp",
  })

  const adjustedTranslateY = adjustedScaleImage.interpolate({
    inputRange: [0.7, 1],
    outputRange: [250, 0],
    extrapolate: "clamp",
  });

  return (
    <>
      <Title opacity={titleOpacity} />
      <Animated.View
        style={{
          transform: [{ translateY: Animated.add(translateY, 0) }],
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
              imageTranslateY={Animated.add(imageTranslateY, adjustedTranslateY)} 
              source={muscleImage}
            />
          </BackgroundFillBlack>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default WelcomeScreen;
