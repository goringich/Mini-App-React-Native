import React from "react";
import styled from "styled-components/native";
import { Colors } from "@colors";

interface FormTitleProps {
  text: string;
}

const TitleText = styled.Text`
  color:  ${Colors.dark.white};
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
`;

const FormTitle: React.FC<FormTitleProps> = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};

export default FormTitle;
