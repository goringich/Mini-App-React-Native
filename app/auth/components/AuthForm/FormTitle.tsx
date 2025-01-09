import React from "react";
import styled from "styled-components/native";

interface FormTitleProps {
  text: string;
}

const TitleText = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: -10px;
`;

const FormTitle: React.FC<FormTitleProps> = ({ text }) => {
  return <TitleText>{text}</TitleText>;
};

export default FormTitle;
