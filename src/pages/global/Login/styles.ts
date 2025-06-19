import styled, { keyframes, css } from "styled-components";

const slideOutLeft = keyframes`
  to {
    opacity: 0;
    transform: translateX(-120%) scale(0.95);
  }
`;

const logoUp = keyframes`
  to {
    transform: translateY(-60px) scale(1.1);
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  max-width: 600px;
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
  &.logo-animate {
    .logo-img-animate {
      animation: ${logoUp} 0.7s forwards;
    }
    h2.hide {
      opacity: 0;
      transition: opacity 0.4s;
    }
  }
`;
export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  &.animate-out {
    animation: ${slideOutLeft} 0.7s forwards;
  }
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

  p {
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
    color: var(--color-light-gray-2);
  }
  &.animate-out {
    animation: ${slideOutLeft} 0.7s forwards;
  }
`;
export const ModalContent = styled.div`
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
export const UserTypeButton = styled.div`
  height: 88px;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-dark-gray-1);
  border: 2px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
