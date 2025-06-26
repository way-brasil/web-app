import {
  Container,
  Header,
  OriginSelect,
  MainCard,
  UserTrips,
  UserTripsCards,
  Trips,
} from "./styles";
import Chip from "@/components/basics/Chip";

const UserHome = () => {
  document.body.classList.remove("body-no-scroll");
  return (
    <>
      <Container>
        <Header>
          <div className="headerLeft">
            <img src="/white-icon.svg" alt="Logo" className="logo" />
            <div className="userCash">
              <h3>Caio Alcarria</h3>
              <h4>R$ 45</h4>
            </div>
          </div>
          <OriginSelect>
            <img
              src="/ico/arrow-down-black.svg"
              alt="arrow-down-black"
              className="arrow-down-black"
            />
            <h6>Vila Romana</h6>
          </OriginSelect>
        </Header>
        <MainCard>
          <div className="left">
            <div className="title">
              <h6 className="titleText">Próxima Viagem</h6>
              <Chip size="small" variant="success">
                confirmada
              </Chip>
            </div>
            <div className="trip">
              <h3>Vila Romana 1 - Estação Aeroporto</h3>
              <h6>R$12,00</h6>
            </div>
            <div className="tripIllustration">
              <img src="/ico/home.svg" className="ico" alt="" />
              <img src="/ico/lineTrip.svg" alt="" />
              <img src="/ico/airplane.svg" className="ico plane" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="driverUser">
              <h6>André</h6>
              <img src="/temp/user.jpeg" alt="" />
            </div>
            <div className="dateTime">
              <h1 className="date">18/03</h1>
              <h4 className="time">07:00</h4>
            </div>
            <button className="chipButton">AJUDA</button>
          </div>
        </MainCard>
        <UserTrips>
          <div className="title">
            <h3>Viagens agendadas</h3>
            <button className="chipButton">Ver todas</button>
          </div>
          <div className="carroselTripsContainer">
            {Array.from({ length: 5 }, (_, index) => (
              <UserTripsCards key={index}>
                <div className="left">
                  <img src="/ico/airplane.svg" alt="" />

                  <div className="info">
                    <h6>Aeroporto</h6>
                    <p>19/03</p>
                  </div>
                </div>
                <h6>08:00</h6>
              </UserTripsCards>
            ))}
          </div>
        </UserTrips>
        <Trips>
          <div className="title">
            <h1>Viagens</h1>
          </div>
        </Trips>
      </Container>
    </>
  );
};

export default UserHome;
