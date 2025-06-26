import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  margin: auto;
  //margin-top: 100px;
`;

export const Header = styled.div`
  width: 85%;
  //position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  max-width: 600px;
  margin: auto;
  height: 100px;

  //background-color: var(--color-very-dark-gray-1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .headerLeft {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: bold;

    h3 {
      height: 25px;
    }
    h4 {
      font-weight: 700;
    }
  }
  .logo {
    height: 40px;
  }
`;

export const OriginSelect = styled.div`
  width: 35%;
  max-width: 150px;
  padding: 0 2.5%;
  height: 35px;
  border-radius: 50px;
  background-color: var(--color-yellow);
  display: flex;
  align-items: center;
  gap: 5px;

  .arrow-down-black {
    width: 14px;
  }
  h6 {
    color: var(--color-black);
    font-weight: 800;
    line-height: 1;
  }
`;

export const MainCard = styled.div`
  width: 85%;
  left: 0;
  right: 0;
  max-width: 600px;
  margin: auto;
  height: 175px;
  border-radius: 30px;
  background-color: var(--color-yellow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 17px 15px;
  color: var(--color-very-dark-gray-1);

  .left {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    //background-color: aqua;

    .title {
      display: flex;
      align-items: center;
      gap: 7px;
      .titleText {
        font-weight: 600;
      }
    }
    .trip {
      h6 {
        font-weight: 400;
      }
    }
    .tripIllustration {
      display: flex;
      align-items: center;
      gap: 6px;
      .ico {
        width: 28px;
      }
      .plane {
        width: 35px;
      }
    }
  }

  .right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-between;

    .driverUser {
      display: flex;
      gap: 12px;
      align-items: center;

      img {
        aspect-ratio: 1 / 1;
        object-fit: cover;
        width: 24px;
        border-radius: 100px;
      }
    }
    .dateTime {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
    .chipButton {
      padding: 4px 8px;
      background-color: var(--color-dark-blue-gray);
      color: var(--color-white);
      font-weight: 600;
      font-size: 10px;
      border-radius: 30px;
    }
  }
`;

export const UserTrips = styled.div`
  width: 100%;
  //background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  .title {
    //background-color: blueviolet;
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    .chipButton {
      height: 20px;
      padding: 0px 14px;
      background-color: var(--color-yellow);
      color: var(--color-very-dark-gray-1);
      font-weight: 700;
      font-size: 10px;
      border-radius: 30px;
    }
  }
  .carroselTripsContainer {
    //background-color: blue;
    width: 100%;
    height: 120px;
    gap: 13px;
    display: flex;
    align-items: center;
    padding-left: 7.5%;
    padding-right: 7.5%;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    user-select: none;
    
  }
  .carroselTripsContainer::-webkit-scrollbar {
    display: none;
  }
`;

export const UserTripsCards = styled.div`
  min-width: 155px;
  height: 100px;
  border-radius: 30px;
  border: 2px solid var(--color-white);
  padding: 10px 15px 14px 12px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 31px;
      height: 31px;
      border-radius: 500px;
      padding: 5px;
      background-color: var(--color-white);
    }

    .info {
      //background-color: aquamarine;
      h4 {
      }
      p {
        font-size: 10px;
        color: var(--color-medium-gray);
      }
    }
  }
`;

export const Trips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    //background-color: blueviolet;
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
  }
`;
