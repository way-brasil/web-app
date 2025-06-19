import ButtonChip from "@/components/basics/ButtonChip.tsx";
import {
  Container,
  Logo,
  Center,
  YellowButton,
  Footer,
  ModalContent,
  UserTypeButton,
} from "./styles.ts";
import InputBrazilNumber from "@/components/basics/InputBrazilNumber.tsx";
import LoginModal from "@/components/LoginModal.tsx";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  document.body.style.overflow = "hidden";
  return (
    <Container>
      <Logo className={animateOut ? "logo-animate" : ""}>
        <img
          src="/white-icon.svg"
          alt=""
          className={animateOut ? "logo-img-animate" : ""}
        />
        <h2 className={animateOut ? "hide" : ""}>Mova-se Fácil</h2>
      </Logo>

      <Center className={animateOut ? "animate-out" : ""}>
        <h1>Qual seu whatsapp?</h1>
        <InputBrazilNumber />
        <ButtonChip>se cadastrar</ButtonChip>
      </Center>
      <Footer className={animateOut ? "animate-out" : ""}>
        <h3>
          By tapping Continue, you are agreeing to <br /> our Terms of Service
          an Privacy Policy
        </h3>
        <YellowButton onClick={() => setIsOpen(true)}>
          <p>Continue</p>
          <img src="/ico/dark-arrow-1.svg" alt="" />
        </YellowButton>
        <div className="links">
          <button>termos de uso</button>
          <button>suporte</button>
        </div>
      </Footer>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent>
          <h1>
            Deseja entrar em qual <br />
            conta?
          </h1>
          <UserTypeButton
            className="user"
            onClick={() => {
              setAnimateOut(true);
              setIsOpen(false);
            }}
          >
            <img className="logo" src="/ico/user.svg" alt="" />
            <div className="content">
              <h3 className="title">Passageiro</h3>
              <p className="address">VILA ROAMNA 1 · CAMAÇARI/BA</p>
              <p className="data">19 de mai</p>
            </div>
            <img src="/ico/ligth-arrow-1.svg" alt="" />
          </UserTypeButton>
          <UserTypeButton
            className="driver"
            onClick={() => {
              setAnimateOut(true);
              setIsOpen(false);
            }}
          >
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
