import React, { useState, useRef, useEffect } from "react";
import { Animated, PanResponder } from "react-native";
import { useRouter } from "expo-router"; //temp
import styled from "styled-components/native";
import { Colors } from "@colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { RootState } from "../../store/index";

import Overlay from "../auth/components/Overlay";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import AuthForm from "../auth/AuthForm/AuthForm";
import {
  createAnimatedValues,
  showLoginFormAnimation,
  hideLoginFormAnimation,
} from "../../animations/animations";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.dark.backgroundFill};
  position: relative;
`;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  // Создаём анимированные значения
  const {
    translateY,
    titleOpacity,
    overlayOpacity,
    swipeIndicatorOpacity,
    imageTranslateY,
    paramTranslateY,
  } = useRef(createAnimatedValues()).current;

  useEffect(() => {
    titleOpacity.setValue(1);
  }, []);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => {
      return (
        Math.abs(gesture.dy) > Math.abs(gesture.dx) && Math.abs(gesture.dy) > 10
      );
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dy < -50) {
        toggleLoginForm();
      }
    },
  });

  const toggleLoginForm = () => {
    if (isLoginVisible) {
      hideLoginFormAnimation(
        translateY,
        paramTranslateY,
        swipeIndicatorOpacity,
        titleOpacity,
        setIsLoginVisible
      );
    } else {
      showLoginFormAnimation(
        translateY,
        paramTranslateY,
        swipeIndicatorOpacity,
        titleOpacity,
        setIsLoginVisible
      );
    }
  };

  const handleLogin = (router: ReturnType<typeof useRouter>) => {
    const fakeToken = "1234567890";
    dispatch(login({ email, token: fakeToken }));
  
    hideLoginFormAnimation(
      translateY,
      paramTranslateY,
      swipeIndicatorOpacity,
      titleOpacity,
      setIsLoginVisible
    );
  
    if (__DEV__) {
      router.push("/screens/RegisterStep1");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, overflow: "hidden" }}>
      <Container>
        <Overlay opacity={overlayOpacity} isVisible={isLoginVisible} />

        <WelcomeScreen
          translateY={translateY}
          imageTranslateY={imageTranslateY}
          paramTranslateY={paramTranslateY}
          titleOpacity={titleOpacity}
          panHandlers={panResponder.panHandlers}
          onImagePress={toggleLoginForm}
          swipeIndicatorOpacity={swipeIndicatorOpacity}
          toggleLoginForm={toggleLoginForm}
        />

        {isLoginVisible && (
          <AuthForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      </Container>
    </GestureHandlerRootView>
  );
};

export default LoginScreen;
