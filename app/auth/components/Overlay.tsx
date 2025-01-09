import React from "react";
import styled from "styled-components/native";
import { Animated } from "react-native";

interface OverlayProps {
  opacity: Animated.Value;
  isVisible: boolean;
}

const StyledOverlay = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
  overflow: hidden;
`;

const Overlay: React.FC<OverlayProps> = ({ opacity, isVisible }) => {
  return (
    <StyledOverlay
      style={{
        opacity,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    />
  );
};

export default Overlay;
