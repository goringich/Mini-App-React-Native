import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  PanResponder,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import welcomeImage from "../assets/images/login/react-logo.png";

// Main screen container
const Container = styled.View`
  flex: 1;
  background-color: black;
  position: relative;
`;

const WelcomeScreen = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
`;

// Text description on the first screen
const TextContainer = styled.View`
  position: absolute;
  top: 100px;
  text-align: center;
`;

const WelcomeText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const SwipeIndicator = styled.Text`
  position: absolute;
  bottom: 40px;
  color: white;
  font-size: 14px;
`;

const AuthScreen = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const FormContainer = styled.View`
  width: 90%;
  max-width: 350px;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 12px;
`;

const InputField = styled.TextInput`
  background-color: #222;
  border-radius: 8px;
  padding: 12px;
  margin-top: 15px;
  border: 1px solid #444;
  color: white;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const FooterText = styled.Text`
  color: white;
  text-align: center;
  margin-top: 10px;
`;

const HighlightText = styled.Text`
  color: #007bff;
  font-weight: bold;
`;

const LoginScreen: React.FC = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const translateY = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dy < -50) {
        Animated.timing(translateY, {
          toValue: -1000,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setAuthVisible(true));
      }
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container>
        {/* Welcome Screen*/}
        <WelcomeScreen
          style={{
            transform: [{ translateY: authVisible ? -1000 : 0 }],
          }}
          {...panResponder.panHandlers}
        >
          <TextContainer>
            <WelcomeText>TEXT TEXT TEXT TEXT TEXT</WelcomeText>
          </TextContainer>

          <ImageContainer>
            <Image source={welcomeImage} style={{ width: "100%", height: 500 }} />
          </ImageContainer>

          <SwipeIndicator>Swipe ↑</SwipeIndicator>
        </WelcomeScreen>

        {/*Login screen*/}
        <AuthScreen
          style={{
            transform: [{ translateY: authVisible ? 0 : 1000 }],
          }}
        >
          <FormContainer>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Login</Text>

            <InputField placeholder="E-mail" placeholderTextColor="#aaa" />
            <InputField placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

            <TouchableOpacity>
              <FooterText>Forgot Password?</FooterText>
            </TouchableOpacity>

            <LoginButton>
              <ButtonText>Login</ButtonText>
            </LoginButton>

            <FooterText>
              You don't have an account? <HighlightText>Sign Up</HighlightText>
            </FooterText>
          </FormContainer>
        </AuthScreen>
      </Container>
    </GestureHandlerRootView>
  );
};

export default LoginScreen;
