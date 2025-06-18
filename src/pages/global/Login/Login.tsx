import { Container, Logo, Center } from "./styles.ts";
import { Input } from "@heroui/input";
import {Button} from "@heroui/button";


const Login = () => {
  return (
    <Container>
      <Logo>
        <img src="/white-icon.svg" alt="" />
        <h2>Mova-se Fácil</h2>
      </Logo>
      <Center>
        <h1>Qual seu whatsapp?</h1>
        <Input
          radius="lg"
          size="lg"
          startContent={<img src="/ico/br.svg" alt="" />}
        />
        <Button radius="full" size="sm">se cadastrar</Button>
      </Center>
      <div>
        <h3>By tapping Continue, you are agreeing to <br /> our Terms of Service an Privacy Policy</h3>
        <Button radius="full" size="sm">Continue
          <img src="/ico/dark-arrow-1.svg" alt="" />
        </Button>
      </div>
    </Container>
  );
};

export default Login;
