import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";

interface ImageWrapperProps {
  scaleImage: Animated.AnimatedInterpolation;
  imageTranslateY: Animated.Value;
  source: any;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  scaleImage,
  imageTranslateY,
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
    width: 444,
    resizeMode: "contain",
    bottom: 0,
  },
  touchable: {
    alignItems: "center",

  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default ImageWrapper;
