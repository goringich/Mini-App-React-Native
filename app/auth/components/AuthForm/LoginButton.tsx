import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface LoginButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #FFBE17;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>Login</ButtonText>
    </StyledButton>
  );
};

export default LoginButton;
