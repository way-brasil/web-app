import { Container, Title } from "./styles.ts";

const UserHome = () => {
  document.body.classList.remove("body-no-scroll");
  return (
    <>
      <Container>
        <Title>Home do Usuário</Title>
      </Container>
    </>
  );
};

export default UserHome;
