import styled from "styled-components";
import React from "react";

interface ButtonChipProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const ChipButton = styled.button`
  background: var(--color-dark-brown-gray);
  color: var(--color-white);
  border: none;
  border-radius: 20px;
  padding: 0.3rem 1.2rem;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  &:hover {
    filter: brightness(1.1);
  }
`;

const ButtonChip: React.FC<ButtonChipProps> = ({
  children,
  onClick,
  type = "button",
}) => (
  <ChipButton onClick={onClick} type={type}>
    {children}
  </ChipButton>
);

export default ButtonChip;
