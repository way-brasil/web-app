import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import ButtonChip from "@/components/basics/ButtonChip";
import InputBrazilNumber from "@/components/basics/InputBrazilNumber";
import LoginModal from "@/components/Login/LoginModal";

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

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  gap: 25px;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
  transition: all 0.5s;

  @media (min-width: 800px) {
    margin-top: 15vh;
  }

  img {
    height: 44px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
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
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 85%;
  padding-bottom: 20px;

  h3 {
    font-size: 14px;
    text-align: center;
    color: var(--color-medium-gray);
  }

  .links {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 20px;
    align-items: center;
    width: 95%;
    font-size: 12px;
    font-weight: bold;
    color: var(--color-light-gray-2);
  }

  button {
    background: none;
    border: none;
    color: var(--color-light-gray-2);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
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

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  h1 {
    text-align: center;
    margin-top: 16px;
  }
`;

const UserTypeButton = styled.div`
  height: 88px;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-dark-gray-1);
  border: 2px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-very-dark-gray-2);
    border: 2px solid var(--color-dark-gray-1);
  }

  .logo {
    width: 20px;
    height: 20px;
  }

  .content {
    margin-right: auto;
    margin-left: 17px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  .address {
    font-size: 9px;
    font-weight: bold;
  }

  .data {
    font-size: 9px;
    font-weight: bold;
  }
`;

interface PhoneInputScreenProps {
  animation:
    | "slideInRight"
    | "slideOutRight"
    | "slideInLeft"
    | "slideOutLeft"
    | "none";
  onUserTypeSelect: () => void;
}

const PhoneInputScreen: React.FC<PhoneInputScreenProps> = ({
  animation,
  onUserTypeSelect,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinueClick = () => {
    setIsModalOpen(true);
  };

  const handleUserTypeClick = () => {
    setIsModalOpen(false);
    onUserTypeSelect();
  };

  return (
    <ScreenContainer $animation={animation}>
      <Logo>
        <img src="/white-icon.svg" alt="Logo" />
        <h2>Mova-se Fácil</h2>
      </Logo>

      <Center>
        <h1>Qual seu whatsapp?</h1>
        <InputBrazilNumber />
        <ButtonChip>se cadastrar</ButtonChip>
      </Center>

      <Footer>
        <h3>
          By tapping Continue, you are agreeing to <br /> our{" "}
          <strong>Terms of Service</strong>
          an <strong>Privacy Policy</strong>
        </h3>
        <YellowButton onClick={handleContinueClick}>
          <p>Continue</p>
          <img src="/ico/dark-arrow-1.svg" alt="" />
        </YellowButton>
        <div className="links">
          <button>termos de uso</button>
          <button>suporte</button>
        </div>
      </Footer>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <h1>
            Deseja entrar em qual <br />
            conta?
          </h1>
          <UserTypeButton className="user" onClick={handleUserTypeClick}>
            <img className="logo" src="/ico/user.svg" alt="" />
            <div className="content">
              <h3 className="title">Passageiro</h3>
              <p className="address">VILA ROAMNA 1 · CAMAÇARI/BA</p>
              <p className="data">19 de mai</p>
            </div>
            <img src="/ico/ligth-arrow-1.svg" alt="" />
          </UserTypeButton>
          <UserTypeButton className="driver" onClick={handleUserTypeClick}>
            <img src="/ico/driver.svg" className="logo" alt="" />
            <div className="content">
              <h3 className="title">Passageiro</h3>
              <p className="address">VILA ROAMNA 1 · CAMAÇARI/BA</p>
              <p className="data">19 de mai</p>
            </div>
            <img src="/ico/ligth-arrow-1.svg" alt="" />
          </UserTypeButton>
        </ModalContent>
      </LoginModal>
    </ScreenContainer>
  );
};

export default PhoneInputScreen;
