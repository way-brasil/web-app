import React from "react";
import styled, { keyframes, css } from "styled-components";
import Input from "@/components/basics/Input";
import SelectInput from "@/components/basics/SelectInput";

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

interface RegisterScreenProps {
  animation:
    | "slideInRight"
    | "slideOutRight"
    | "slideInLeft"
    | "slideOutLeft"
    | "none";
  nome: string;
  setNome: (value: string) => void;
  cpf: string;
  setCpf: (value: string) => void;
  localidade: string;
  setLocalidade: (value: string) => void;
  localidades: { value: string; label: string }[];
  onBack: () => void;
  onContinue: () => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  animation,
  nome,
  setNome,
  cpf,
  setCpf,
  localidade,
  setLocalidade,
  localidades,
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
        <h3 className="codeInfo"></h3>
        <h1>Qual seu nome?</h1>
        <Input
          placeholder="nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <h1>Qual seu CPF?</h1>
        <Input
          placeholder="CPF"
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
        />
        <h1>Qual sua Localidade?</h1>
        <SelectInput
          options={localidades}
          placeholder="Selecione sua cidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
        />
      </Center>

      <Footer>
        <h3>
          By tapping Continue, you are agreeing to <br /> our{" "}
          <strong>Terms of Service</strong>
          an <strong>Privacy Policy</strong>
        </h3>
        <YellowButton onClick={onContinue}>
          <p>Continue</p>
          <img src="/ico/dark-arrow-1.svg" alt="" />
        </YellowButton>
        <div className="links">
          <button>termos de uso</button>
          <button>suporte</button>
        </div>
      </Footer>
    </ScreenContainer>
  );
};

export default RegisterScreen;
