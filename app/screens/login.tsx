import React, { useState, useRef, useEffect } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { RootState } from "../../store/index";

import Overlay from "../auth/components/Overlay";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import SwipeIndicator from "../WelcomeScreen/components/SwipeIndicator/SwipeIndicator";
import AuthForm from "../auth/AuthForm/AuthForm";
import {
  createAnimatedValues,
  showLoginFormAnimation,
  hideLoginFormAnimation,
} from "../../animations/animations";

const Container = styled.View`
  flex: 1;
  background-color: #121212;
  position: relative;
`;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [swipeIndicatorWidth, setSwipeIndicatorWidth] = useState(0);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  // Создаём анимированные значения
  const { translateY, titleOpacity, overlayOpacity, swipeIndicatorOpacity, imageTranslateY, paramTranslateY } =
    useRef(createAnimatedValues()).current;

  useEffect(() => {
    titleOpacity.setValue(1);
  }, []);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => {
      return Math.abs(gesture.dy) > Math.abs(gesture.dx) && Math.abs(gesture.dy) > 10;
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dy < -50) {
        toggleLoginForm();
      }
    },
  });

  const toggleLoginForm = () => {
    if (isLoginVisible) {
      hideLoginFormAnimation(translateY, paramTranslateY, swipeIndicatorOpacity, titleOpacity, setIsLoginVisible);
    } else {
      showLoginFormAnimation(translateY, paramTranslateY, swipeIndicatorOpacity, titleOpacity, setIsLoginVisible);
    }
  };

  const handleLogin = () => {
    const fakeToken = "1234567890";
    dispatch(login({ email, token: fakeToken }));
    hideLoginFormAnimation(translateY, paramTranslateY, swipeIndicatorOpacity, titleOpacity, setIsLoginVisible);
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
        />

        <SwipeIndicator
          onLayout={(event) => setSwipeIndicatorWidth(event.nativeEvent.layout.width)}
          style={{
            transform: [{ translateX: -swipeIndicatorWidth / 2 }],
            opacity: swipeIndicatorOpacity,
          }}
          onPress={toggleLoginForm} 
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
