import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import ButtonChip from "@/components/basics/ButtonChip";
import InputBrazilNumber from "@/components/basics/InputBrazilNumber";
import InputOtp from "@/components/basics/InputOtp";
import Input from "@/components/basics/Input";
import SelectInput from "@/components/basics/SelectInput";
import LoginModal from "@/components/Login/LoginModal";

// Animações
const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(-120%) scale(0.95); }
  to { opacity: 1; transform: translateX(0) scale(1); }
`;
const slideOutRight = keyframes`
  from { opacity: 1; transform: translateX(0) scale(1); }
  to { opacity: 0; transform: translateX(120%) scale(0.95); }
`;
const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(120%) scale(0.95); }
  to { opacity: 1; transform: translateX(0) scale(1); }
`;
const slideOutLeft = keyframes`
  from { opacity: 1; transform: translateX(0) scale(1); }
  to { opacity: 0; transform: translateX(-120%) scale(0.95); }
`;

const logoDown = keyframes`
  from { transform: translate(-50%, -50px); }
  to { transform: translate(-50%, 0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const titleIn = keyframes`
  from { opacity: 0; transform: translate(-50%, 20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
`;

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.header`
  width: 100%;
  position: relative;
  height: 22vh; /* Altura controlada para a área de animação */

  .logo,
  h2,
  .back-button {
    position: absolute;
    transition: all 0.5s ease-in-out;
  }

  .logo {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 44px;
  }

  h2 {
    left: 50%;
    top: calc(50% + 45px); /* Posicionado abaixo do logo */
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
  }

  .back-button {
    left: 10%;
    top: 6.5vh; /* Alinhado com a posição final do logo */
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
  }

  /* Animation States */
  &.condensed-state {
    height: 10vh; /* Altura inicial */
    transition: height 0.5s ease-in-out; /* Transição suave */
    /* height:10vh; */
    .logo {
      top: 6.5vh; /* Anima para a posição final */
    }
    h2 {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    .back-button {
      opacity: 1;
      pointer-events: auto;
      transition-delay: 0.1s; /* Pequeno delay para aparecer */
    }
  }

  &.reverting-state {
    height: 22vh; /* Altura inicial */
    transition: height 0.5s ease-in-out; /* Transição suave */
    .logo {
      animation: ${logoDown} 0.5s forwards;
    }
    h2 {
      animation: ${titleIn} 0.4s 0.3s forwards;
    }
    .back-button {
      animation: ${fadeOut} 0.2s forwards;
    }
  }
`;

const CenterContainer = styled.div<{ $animation: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Ocupa o espaço disponível */

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

const Footer = styled.div<{ $isNumberCheck: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 85%;
  padding-bottom: ${({ $isNumberCheck }) => ($isNumberCheck ? "40px" : "20px")};
  min-height: ${({ $isNumberCheck }) => ($isNumberCheck ? "120px" : "140px")};
  transition:
    min-height 0.3s ease-in-out,
    padding-bottom 0.3s ease-in-out;

  h3 {
    font-size: 14px;
    text-align: center;
    color: var(--color-medium-gray);
    opacity: ${({ $isNumberCheck }) => ($isNumberCheck ? "0" : "1")};
    max-height: ${({ $isNumberCheck }) => ($isNumberCheck ? "0" : "50px")};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    margin: 0;
    padding: 0;
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

const Login = () => {
  document.body.style.overflow = "hidden";

  const [currentScreen, setCurrentScreen] = useState<
    "phoneInput" | "register" | "numberCheck"
  >("phoneInput");
  const [centerAnimation, setCenterAnimation] = useState<
    "slideInRight" | "slideOutRight" | "slideInLeft" | "slideOutLeft" | "none"
  >("none");
  const [isCondensed, setIsCondensed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados dos dados
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [localidade, setLocalidade] = useState("");

  const localidades = [
    { value: "camacari", label: "Camaçari, BA" },
    { value: "dias_davila", label: "Dias d'Ávila, BA" },
    { value: "salvador", label: "Salvador, BA" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    function onPopState() {
      handleBack();
    }
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [currentScreen]);

  const handleUserTypeSelect = () => {
    window.history.pushState({}, "", window.location.pathname);
    setIsModalOpen(false);

    setIsCondensed(true);
    setCenterAnimation("slideOutRight");

    setTimeout(() => {
      setCurrentScreen("register");
      setCenterAnimation("slideInRight");
    }, 700);
  };

  const handleRegisterContinue = () => {
    window.history.pushState({}, "", window.location.pathname);
    setCenterAnimation("slideOutRight");
    setTimeout(() => {
      setCurrentScreen("numberCheck");
      setCenterAnimation("slideInRight");
    }, 700);
  };

  const handleNumberCheckContinue = () => {
    navigate("/home");
  };

  const handleBack = () => {
    if (currentScreen === "register") {
      setIsCondensed(false);
      setCenterAnimation("slideOutLeft");

      setTimeout(() => {
        setCurrentScreen("phoneInput");
        setCenterAnimation("slideInLeft");
      }, 700);
    } else if (currentScreen === "numberCheck") {
      setCenterAnimation("slideOutLeft");
      setTimeout(() => {
        setCurrentScreen("register");
        setCenterAnimation("slideInLeft");
      }, 700);
    }
  };

  const handleContinueClick = () => {
    if (currentScreen === "phoneInput") {
      setIsModalOpen(true);
    } else if (currentScreen === "register") {
      handleRegisterContinue();
    } else if (currentScreen === "numberCheck") {
      handleNumberCheckContinue();
    }
  };

  const renderCenter = () => {
    switch (currentScreen) {
      case "phoneInput":
        return (
          <Center>
            <h1>Qual seu whatsapp?</h1>
            <InputBrazilNumber />
            <ButtonChip>se cadastrar</ButtonChip>
          </Center>
        );
      case "register":
        return (
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
        );
      case "numberCheck":
        return (
          <Center>
            <h1 className="codeDesc">Digite seu Código</h1>
            <h3 className="codeInfo">
              Enviamos um código de verificação para o <br /> numero
              <strong> +55 71 9 9933-2003</strong>
            </h3>
            <InputOtp />
            <ButtonChip>enviar novamente</ButtonChip>
          </Center>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header className={isCondensed ? "condensed-state" : ""}>
        <img
          src="/ico/gray-arrow-3.svg"
          alt="Voltar"
          className="back-button"
          onClick={handleBack}
        />
        <img src="/white-icon.svg" alt="Logo" className="logo" />
        <h2>Mova-se Fácil</h2>
      </Header>

      <CenterContainer $animation={centerAnimation}>
        {renderCenter()}
      </CenterContainer>

      <Footer $isNumberCheck={currentScreen === "numberCheck"}>
        <h3>
          By tapping Continue, you are agreeing to <br /> our{" "}
          <strong>Terms of Service</strong>
          an <strong>Privacy Policy</strong>
        </h3>
        <YellowButton onClick={handleContinueClick}>
          <p>Continue</p>
          <img src="/ico/dark-arrow-1.svg" alt="" />
        </YellowButton>
      </Footer>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <h1>
            Deseja entrar em qual <br />
            conta?
          </h1>
          <UserTypeButton className="user" onClick={handleUserTypeSelect}>
            <img className="logo" src="/ico/user.svg" alt="" />
            <div className="content">
              <h3 className="title">Passageiro</h3>
              <p className="address">VILA ROAMNA 1 · CAMAÇARI/BA</p>
              <p className="data">19 de mai</p>
            </div>
            <img src="/ico/ligth-arrow-1.svg" alt="" />
          </UserTypeButton>
          <UserTypeButton className="driver" onClick={handleUserTypeSelect}>
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
    </Container>
  );
};

export default Login;
