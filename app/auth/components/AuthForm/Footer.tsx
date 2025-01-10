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
  margin-top: 10px;
`;

const FooterTextStyled = styled.Text`
  color: white;
  text-align: center;
`;

const HighlightTextStyled = styled.Text`
  color: #ff9900;
  font-weight: bold;
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
