import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";

interface TitleProps {
  opacity: Animated.Value;
}

const TitleContainer = styled(Animated.View)`
  position: absolute;
  top: 136px;
  width: 353px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  z-index: 50;
`;

const TitleText = styled.Text`
  color: white;
  font-family: Futura;
  font-size: 21px;
  font-weight: 700;
  line-height: 29.24px;
  text-align: center;
  text-transform: uppercase;
`;

const SubTitleText = styled.Text`
  color: #ffbe17;
  text-align: center;
  font-family: Futura;
  font-size: 22px;
  font-weight: 700;
  line-height: 29.24px;
  text-transform: uppercase;
`;

const Title: React.FC<TitleProps> = ({ opacity }) => {
  return (
    <TitleContainer style={{ opacity }}>
      <TitleText>
        Everything you need to achieve an
        {"\n"}
        <SubTitleText>aesthetic,</SubTitleText>
        <SubTitleText>sculpted physique</SubTitleText>
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
