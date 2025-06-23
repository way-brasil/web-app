import React from "react";
import styled, { keyframes, css } from "styled-components";
import ButtonChip from "@/components/basics/ButtonChip";
import InputOtp from "@/components/basics/InputOtp";

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

// Styled Components
const ScreenContainer = styled.div<{ $animation: string }>`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ $animation }) => {
    switch ($animation) {
      case "slideInRight":
        return css`
          animation: ${slideInRight} 0.7s forwards;
        `;
      case "slideOutRight":
        return css`
          animation: ${slideOutRight} 0.7s forwards;
        `;
      case "slideInLeft":
        return css`
          animation: ${slideInLeft} 0.7s forwards;
        `;
      case "slideOutLeft":
        return css`
          animation: ${slideOutLeft} 0.7s forwards;
        `;
      default:
        return css``;
    }
  }}
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10vh;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
  position: relative;

  @media (min-width: 800px) {
    margin-top: 15vh;
  }

  .back-button {
    cursor: pointer;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 10%;
  }

  .logo {
    height: 44px;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;

  h1 {
    font-size: 26px;
    font-weight: bold;
  }

  .codeInfo {
    font-size: 14px;
    text-align: center;
    color: var(--color-medium-gray);
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 85%;
  padding-bottom: 40px;
`;

const YellowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--color-yellow);
  border-radius: 50px;
  width: 100%;
  height: 52px;
  cursor: pointer;

  p {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-very-dark-gray-1);
  }
`;

interface NumberCheckScreenProps {
  animation:
    | "slideInRight"
    | "slideOutRight"
    | "slideInLeft"
    | "slideOutLeft"
    | "none";
  onBack: () => void;
  onContinue: () => void;
}

const NumberCheckScreen: React.FC<NumberCheckScreenProps> = ({
  animation,
  onBack,
  onContinue,
}) => {
  return (
    <ScreenContainer $animation={animation}>
      <Header>
        <img
          src="/ico/gray-arrow-3.svg"
          alt="Voltar"
          className="back-button"
          onClick={onBack}
        />
        <img src="/white-icon.svg" alt="Logo" className="logo" />
      </Header>

      <Center>
        <h1 className="codeDesc">Digite seu Código</h1>
        <h3 className="codeInfo">
          Enviamos um código de verificação para o <br /> numero
          <strong> +55 71 9 9933-2003</strong>
        </h3>
        <InputOtp />
        <ButtonChip>enviar novamente</ButtonChip>
      </Center>

      <Footer>
        <YellowButton onClick={onContinue}>
          <p>Continue</p>
          <img src="/ico/dark-arrow-1.svg" alt="" />
        </YellowButton>
      </Footer>
    </ScreenContainer>
  );
};

export default NumberCheckScreen;
