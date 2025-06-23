import React from "react";
import styled, { keyframes, css } from "styled-components";

// Animações
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-120%) scale(0.95);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(120%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`;

const slideOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(120%) scale(0.95);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled component com animações
const AnimatedDiv = styled.div<{
  $isVisible: boolean;
  $animation: string;
  $duration?: number;
}>`
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;

  ${({ $isVisible, $animation, $duration = 0.7 }) => {
    if (!$isVisible) {
      return css`
        display: none;
      `;
    }

    const animations = {
      slideInRight: slideInRight,
      slideOutLeft: slideOutLeft,
      slideInLeft: slideInLeft,
      slideOutRight: slideOutRight,
      fadeIn: fadeIn,
      fadeOut: fadeOut,
    };

    const animation = animations[$animation as keyof typeof animations];

    if (animation) {
      return css`
        animation: ${animation} ${$duration}s forwards;
      `;
    }

    return css``;
  }}
`;

interface AnimatedComponentProps {
  children: React.ReactNode;
  isVisible: boolean;
  animation:
    | "slideInRight"
    | "slideOutLeft"
    | "slideInLeft"
    | "slideOutRight"
    | "fadeIn"
    | "fadeOut";
  duration?: number;
  onAnimationEnd?: () => void;
  className?: string;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  isVisible,
  animation,
  duration = 0.7,
  onAnimationEnd,
  className,
}) => {
  return (
    <AnimatedDiv
      $isVisible={isVisible}
      $animation={animation}
      $duration={duration}
      className={className}
    >
      {children}
    </AnimatedDiv>
  );
};

export default AnimatedComponent;
