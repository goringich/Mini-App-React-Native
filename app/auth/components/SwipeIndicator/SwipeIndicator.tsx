import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";

interface SwipeIndicatorProps {
  onLayout: (event: any) => void;
  style: object;
}

const StyledSwipeIndicator = styled(Animated.Text)`
  position: absolute;
  bottom: 15px;
  color: white;
  font-size: 16px;
  left: 50%;
  z-index: 1000;
`;

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({ onLayout, style }) => {
  return (
    <StyledSwipeIndicator onLayout={onLayout} style={style}>
      Swipe ↑ or Tap
    </StyledSwipeIndicator>
  );
};

export default SwipeIndicator;
