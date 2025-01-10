import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Animated } from "react-native";
import FormTitle from "./FormTitle";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import Footer from "./Footer";

interface AuthFormProps {
  email: string;
  password: string;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  handleLogin: () => void;
  handleLogout: () => void;
  isAuthenticated: boolean;
}

const AuthScreen = styled(Animated.View)`
  position: absolute;
  top: 16px;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: transparent;
  z-index: 2;
  justify-content: flex-end;
`;

const FormContainer = styled(Animated.View)`
  width: 90%;
  max-width: 350px;
  margin-bottom: 50px;
`;

const AuthForm: React.FC<AuthFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  handleLogout,
  isAuthenticated,
}) => {
  return (
    <AuthScreen>
      <FormContainer>
        <FormTitle text="Login" />
        <InputField
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Footer.FooterText text="Forgot Password?" />
        </TouchableOpacity>
        <LoginButton onPress={handleLogin} />
        {isAuthenticated && (
          <TouchableOpacity onPress={handleLogout}>
            <Footer.FooterText text="Logout" />
          </TouchableOpacity>
        )}
        <Footer>
          <Footer.HighlightTextNotUnder text="You don't have an account? "/>
          <TouchableOpacity>
            <Footer.HighlightText text="Sign Up" />
          </TouchableOpacity>
        </Footer>
      </FormContainer>
    </AuthScreen>
  );
};

export default AuthForm;
