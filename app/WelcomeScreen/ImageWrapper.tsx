import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";

interface ImageWrapperProps {
  scaleImage: Animated.AnimatedInterpolation;
  imageTranslateY: Animated.Value;
  borderBottomPosition: Animated.Value;
  source: any;
}

const BackgroundFillBlack = styled.View`
  width: 100%;
  height: 100.5%;
  background-color: black;
  border-radius: 5%;
`;

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  scaleImage,
  imageTranslateY,
  borderBottomPosition,
  source,
}) => {
  return (
    <BackgroundFillBlack>
      <View style={styles.imageWrapper}>
        <Animated.Image
          source={source}
          resizeMode="contain"
          style={[
            styles.image,
            {
              transform: [
                { scale: scaleImage },
                { translateY: imageTranslateY },
              ],
            },
          ]}
        />
        <Animated.View
          style={[styles.borderBottom, { bottom: borderBottomPosition }]}
        />
      </View>
    </BackgroundFillBlack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 375,
    marginTop: 240,
    resizeMode: "contain",
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
  },
  borderBottom: {
    position: "absolute",
    bottom: 150,
    width: "100%",
    height: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 15,
    borderColor: "#FFBE17",
  },
});

export default ImageWrapper;
