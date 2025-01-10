import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";

interface ImageWrapperProps {
  scaleImage: Animated.AnimatedInterpolation;
  imageTranslateY: Animated.Value;
  borderBottomPosition: Animated.Value;
  source: any;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  scaleImage,
  imageTranslateY,
  borderBottomPosition,
  source,
}) => {
  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 375,
    resizeMode: "contain",
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "black",
  }
});

export default ImageWrapper;
