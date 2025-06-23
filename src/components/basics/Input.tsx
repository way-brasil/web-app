import styled from "styled-components";
import React from "react";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-dark-brown-gray);
  border-radius: 20px;
  padding: 0.7rem 1rem;
  width: 90%;
  height: 62px;
`;

const StyledInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-light-gray-2);
  font-size: 20px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    color: var(--color-medium-gray);
    opacity: 1;
    font-size: 20px;
    font-weight: 600;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  ...rest
}) => {
  return (
    <InputWrapper>
      <StyledInput placeholder={placeholder} {...rest} />
    </InputWrapper>
  );
};

export default Input;
