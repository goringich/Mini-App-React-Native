import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";
import SwipeButton from "./SwipeButton";

interface SwipeIndicatorProps {
  onLayout: (event: any) => void;
  style: object;
  onPress: () => void;
}

const StyledSwipeIndicator = styled(Animated.Text)`
  position: absolute;
  bottom: 15px;
  color: white;
  font-size: 16px;
  left: 50%;
  z-index: 1000;
`;

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({ onLayout, style, onPress }) => {
  return (
    <StyledSwipeIndicator onLayout={onLayout} style={style}>
      <SwipeButton onPress={onPress}/>
    </StyledSwipeIndicator>
  );
};

export default SwipeIndicator;
