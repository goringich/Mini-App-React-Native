import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";
import { Colors } from "@colors";

const StyledInput = styled.TextInput`
  background-color: ${Colors.dark.inputBackground};
  border-radius: 16px;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid ${Colors.dark.inputBorder};
  color: ${Colors.dark.textSecondary};
`;

const InputField: React.FC<TextInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default InputField;
