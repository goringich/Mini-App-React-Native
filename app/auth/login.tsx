import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  PanResponder,
  StyleSheet 
} from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { RootState } from "../../store";

import muscleImage from "../../assets/images/login/react-logo.png";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 576,
  },
  image: {
    width: 375,
    marginTop: 275,
    resizeMode: "contain",
  },
});

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

const TitleContainer = styled.View`
  position: absolute;
  top: 136px;
  width: 353px;
  align-items: center;
`;

const TitleText = styled.Text`
  color: white;
  font-family: Futura;
  font-size: 21px;
  font-weight: 700;
  line-height: 29.24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  text-transform: uppercase;
`;

const SubTitleText = styled.Text`
  color: #FFBE17;
  text-align: center;
  font-family: Futura;
  font-size: 22px;
  font-weight: 700;
  line-height: 29.24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  text-transform: uppercase;
`;

const SwipeIndicator = styled.Text`
  position: absolute;
  bottom: 40px;
  color: white;
  font-size: 16px;
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
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #444;
`;

const InputField = styled.TextInput`
  background-color: #222;
  border-radius: 8px;
  padding: 12px;
  margin-top: 15px;
  border: 1px solid #444;
  color: white;
`;

const LabelText = styled.Text`
  color: white;
  margin-top: 5px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #ff9900;
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
  color: #ff9900;
  font-weight: bold;
`;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const translateY = new Animated.Value(0);

  // Отслеживает жесты (gestures (жесты)) для свайпа
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, gesture) => {
      // Если пользователь свайпнул (swiped (свайпнул)) вверх
      if (gesture.dy < -50) {
        showLoginForm();
      }
    },
  });

  // При нажатии (on press) также анимируем
  const showLoginForm = () => {
    Animated.timing(translateY, {
      toValue: -1000,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const handleLogin = () => {
    const fakeToken = "1234567890";
    dispatch(login({ email, token: fakeToken }));
    console.log("Logged in:", email);
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log("Logged out");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, overflow: 'hidden' }}>
      <Container>
        {/* Начальный (initial (начальный)) экран */}
        <WelcomeScreen
          style={{
            transform: [
              {
                translateY: auth.isAuthenticated ? -1000 : translateY,
              },
            ],
          }}
          {...panResponder.panHandlers}
        >
          <TitleContainer>
            <TitleText>
              Everything you need to achieve an
              <SubTitleText> aesthetic, </SubTitleText>
              <SubTitleText>sculpted physique</SubTitleText>
            </TitleText>
          </TitleContainer>

          <TouchableOpacity onPress={showLoginForm}>
            <Image
              source={muscleImage}
              style={styles.image}
            />
          </TouchableOpacity>

          <SwipeIndicator>Swipe ↑ or Tap</SwipeIndicator>
        </WelcomeScreen>

        {/* Экран логина */}
        <AuthScreen
          style={{
            transform: [
              {
                translateY: auth.isAuthenticated ? 0 : 1000,
              },
            ],
          }}
        >
          <FormContainer>
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Login
            </Text>

            <LabelText>E-mail</LabelText>
            <InputField
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
            />

            <LabelText>Password</LabelText>
            <InputField
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity>
              <FooterText>Forgot Password?</FooterText>
            </TouchableOpacity>

            <LoginButton onPress={handleLogin}>
              <ButtonText>Login</ButtonText>
            </LoginButton>

            {auth.isAuthenticated && (
              <TouchableOpacity onPress={handleLogout}>
                <FooterText>Logout</FooterText>
              </TouchableOpacity>
            )}

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
