import ButtonChip from "@/components/basics/ButtonChip.tsx";
import { Container, Logo, Center, YellowButton, Footer } from "./styles.ts";
import InputBrazilNumber from "@/components/basics/InputBrazilNumber.tsx";
import LoginModal from "@/components/LoginModal.tsx";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  document.body.style.overflow = 'hidden';
  return (
    <Container>
      <Logo>
        <img src="/white-icon.svg" alt="" />
        <h2>Mova-se Fácil</h2>
      </Logo>

      <Center>
        <h1>Qual seu whatsapp?</h1>
        <InputBrazilNumber />
        <ButtonChip>se cadastrar</ButtonChip>
      </Center>
      <Footer>
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
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}></LoginModal>
    </Container>
  );
};

export default Login;
