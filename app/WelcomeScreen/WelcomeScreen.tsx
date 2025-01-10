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
  borderBottomPosition: Animated.Value;
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
  border-radius: 15%;
  position: relative;
  bottom: 15px;
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
  return (
    <>
      <Title opacity={titleOpacity} />
      <Animated.View
        style={{
          transform: [{ translateY }],
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
              scaleImage={scaleImage}
              imageTranslateY={imageTranslateY}
              borderBottomPosition={borderBottomPosition}
              source={muscleImage}
            />
          </BackgroundFillBlack>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default WelcomeScreen;
