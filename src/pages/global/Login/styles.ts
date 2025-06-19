import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  max-width:600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  gap: 25px;
  @media (min-width: 800px) {
    margin-top: 15vh;
  }

  `;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

`;
export const YellowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--color-yellow);
  border-radius: 50px;
  width: 100%;
  height: 52px;

  p{
    font-size: 20px;
    font-weight: 600;
    color: var(--color-very-dark-gray-1);
  }

`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 85%;

  h3{
    font-size: 14px;
    text-align: center;
    color: var(--color-medium-gray);
  }
  .links{
    display: flex;
    justify-content: space-between;
    padding: 10px 0 20px;
    align-items: center;
    width: 95%;
    font-size: 12px;
    color: var(--color-light-gray-2);
  }

`;