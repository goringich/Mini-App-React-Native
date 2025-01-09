import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";

const StyledInput = styled.TextInput`
  background-color: #222;
  border-radius: 8px;
  padding: 12px;
  margin-top: 15px;
  border: 1px solid #444;
  color: white;
`;

const InputField: React.FC<TextInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default InputField;
