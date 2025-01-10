import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Dimensions, Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { RootState } from "../../store/index";

import Overlay from "../auth/components/Overlay";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import SwipeIndicator from "../auth/components/SwipeIndicator/SwipeIndicator";
import AuthForm from "../auth/components/AuthForm/AuthForm";

const screenWidth = Dimensions.get("window").width;

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

  // Animated values
  const translateY = useRef(new Animated.Value(16)).current; // For moving the WelcomeScreen
  const titleOpacity = useRef(new Animated.Value(1)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const swipeIndicatorOpacity = useRef(new Animated.Value(1)).current;

  const imageTranslateY = useRef(new Animated.Value(100)).current;
  const borderBottomPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  // For swipe
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => {
      const shouldSet =
        Math.abs(gesture.dy) > Math.abs(gesture.dx) &&
        Math.abs(gesture.dy) > 10;
      if (shouldSet) {
        console.log("PanResponder activated");
      }
      return shouldSet;
    },
    onPanResponderRelease: (_, gesture) => {
      // If swipe up, toggle the login form
      if (gesture.dy < -50) {
        toggleLoginForm();
      }
    },
  });

  const toggleLoginForm = () => {
    console.log("toggleLoginForm called");
    if (isLoginVisible) {
      hideLoginForm();
      console.log("Login is not Visible");
    } else {
      showLoginForm();
    }
  };

  const showLoginForm = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -400,
          duration: 500,
          useNativeDriver: true,
        }),
        // Animated.timing(swipeIndicatorOpacity, {
        //   toValue: 0,
        //   duration: 300,
        //   useNativeDriver: true,
        // }),
        Animated.timing(titleOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setIsLoginVisible(true);
    });
  };

  const hideLoginForm = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        // Animated.timing(swipeIndicatorOpacity, {
        //   toValue: 1,
        //   duration: 300,
        //   useNativeDriver: true,
        // }),
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setIsLoginVisible(false);
    });
  };

  const handleLogin = () => {
    const fakeToken = "1234567890";
    dispatch(login({ email, token: fakeToken }));
    console.log("Logged in:", email);
    hideLoginForm();
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log("Logged out");
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, overflow: "hidden" }}>
      <Container>
        {/* Overlay */}
        <Overlay opacity={overlayOpacity} isVisible={isLoginVisible} />

        {/* Welcome Screen */}
        <WelcomeScreen
          translateY={translateY}
          // scaleImage={scaleImage}
          imageTranslateY={imageTranslateY}
          titleOpacity={titleOpacity}
          panHandlers={panResponder.panHandlers}
          onImagePress={toggleLoginForm}
        />

        {/* Swipe Indicator */}
        <SwipeIndicator
          onLayout={(event) =>
            setSwipeIndicatorWidth(event.nativeEvent.layout.width)
          }
          style={{
            transform: [{ translateX: -swipeIndicatorWidth / 2 }],
            opacity: swipeIndicatorOpacity,
          }}
        />

        {/* Auth Form */}
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
