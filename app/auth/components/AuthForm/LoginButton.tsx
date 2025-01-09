import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface LoginButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const StyledButton = styled.TouchableOpacity`
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

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>Login</ButtonText>
    </StyledButton>
  );
};

export default LoginButton;
