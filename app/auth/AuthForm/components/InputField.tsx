import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";

const StyledInput = styled.TextInput`
  background-color: #0F0F0F;
  border-radius: 16px;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid #222222;
  color: rgba(255, 255, 255, 0.7);;
`;

const InputField: React.FC<TextInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default InputField;
