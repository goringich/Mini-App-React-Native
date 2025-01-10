import React from "react";
import styled from "styled-components/native";

interface FooterProps {
  children: React.ReactNode;
}

interface FooterTextProps {
  text: string;
}

interface HighlightTextProps {
  text: string;
}
const FooterContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  display: flex;
`;

const FooterTextStyled = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
  text-decoration-line: underline;
  margin: 10px 0 15px;
`;

const HighlightTextStyled = styled.Text`
  color: #ffbe17;
  text-decoration-line: none;
  margin-left: 5px; 
`;

const Footer: React.FC<FooterProps> & {
  FooterText: React.FC<FooterTextProps>;
  HighlightText: React.FC<HighlightTextProps>;
} = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>;
};

const FooterText: React.FC<FooterTextProps> = ({ text }) => {
  return <FooterTextStyled>{text}</FooterTextStyled>;
};

const HighlightText: React.FC<HighlightTextProps> = ({ text }) => {
  return <HighlightTextStyled>{text}</HighlightTextStyled>;
};

Footer.FooterText = FooterText;
Footer.HighlightText = HighlightText;

export default Footer;
