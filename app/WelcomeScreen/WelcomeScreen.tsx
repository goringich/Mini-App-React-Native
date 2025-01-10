import React from "react";
import { TouchableOpacity, View, StyleSheet, Animated } from "react-native";
import styled from "styled-components/native";
import muscleImage from "../../assets/images/login/react-logo.png";

interface WelcomeScreenProps {
  translateY: Animated.Value;
  scaleImage: Animated.AnimatedInterpolation;
  imageTranslateY: Animated.Value;
  borderBottomPosition: Animated.Value;
  titleOpacity: Animated.Value;
  panHandlers: any;
  onImagePress: () => void;
}

const TitleContainer = styled(Animated.View)`
  position: absolute;
  top: 136px;
  width: 353px;
  align-items: center;
  z-index: 50;
`;

const TitleText = styled.Text`
  color: white;
  font-family: Futura;
  font-size: 21px;
  font-weight: 700;
  line-height: 29.24px;
  text-align: center;
  text-transform: uppercase;
`;

const SubTitleText = styled.Text`
  color: #ffbe17;
  text-align: center;
  font-family: Futura;
  font-size: 21px;
  font-weight: 700;
  line-height: 29.24px;
  text-transform: uppercase;
`;

const styles = StyleSheet.create({
  image: {
    width: 375,
    resizeMode: "contain",
  },
  touchable: {
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 240,
  },
  borderBottom: {
    // position: "absolute",
    // bottom: 150,
    width: "100%",
    height: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 15,
    borderColor: "#FFBE17",
  },
});

const BackgroundFillBlack = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 5%;
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
      <TitleContainer style={{ opacity: titleOpacity }}>
        <TitleText>
          Everything you need to achieve an
          {"\n"}
          <SubTitleText>aesthetic,</SubTitleText>
          <SubTitleText>sculpted physique</SubTitleText>
        </TitleText>
      </TitleContainer>
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
        }}
        {...panHandlers}
      >
        <TouchableOpacity
          onPress={onImagePress}
          style={[styles.touchable, { zIndex: 10 }]}
        >
          <BackgroundFillBlack>
            <View style={styles.imageWrapper}>
              <Animated.Image
                source={muscleImage}
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
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default WelcomeScreen;
