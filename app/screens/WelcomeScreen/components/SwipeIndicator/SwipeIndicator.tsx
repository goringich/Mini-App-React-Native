import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";
import SwipeButton from "./SwipeButton";
import { Colors } from "@colors";

interface SwipeIndicatorProps {
  onLayout: (event: any) => void;
  style: object;
  onPress: () => void;
}

const StyledSwipeIndicator = styled(Animated.View)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: ${Colors.dark.textWhite};
  font-size: 16px;
  z-index: 1000;
`;

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({ onLayout, style, onPress }) => {
  return (
    <StyledSwipeIndicator onLayout={onLayout} style={style}>
      <SwipeButton onPress={onPress} />
    </StyledSwipeIndicator>
  );
};

export default SwipeIndicator;
