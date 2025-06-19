import styled from "styled-components";
import React, { useState } from "react";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-dark-brown-gray);
  border-radius: 20px;
  padding: 0.7rem 1rem;
  gap: 1rem;
  width: 90%;
  height: 62px;
`;

const Flag = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  background: transparent;
`;

const DDI = styled.span`
  color: var(--color-medium-gray);
  font-size: 20px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
`;

const StyledInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-light-gray-2);
  font-size: 20px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  &::placeholder {
    color: var(--color-medium-gray);
    opacity: 1;
    font-size: 20px;
    font-weight: 600;
  }
`;

function formatPhone(value: string) {
  let numbers = value.replace(/\D/g, "");
  if (numbers.startsWith("55")) numbers = numbers.slice(2);
  numbers = numbers.slice(0, 11);
  // Só adiciona hífen se houver pelo menos 8 dígitos após DDD e nono dígito
  if (numbers.length > 6) {
    const parte1 = numbers.slice(0, 2);
    const parte2 = numbers.slice(2, 3);
    const parte3 = numbers.slice(3, 7);
    const parte4 = numbers.slice(7);
    let result = `${parte1} ${parte2} ${parte3}`;
    if (parte4.length > 0) {
      result += `-${parte4}`;
    }
    return result;
  } else if (numbers.length > 2) {
    return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
  } else {
    return numbers;
  }
}

const InputBrazilNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatPhone(e.target.value));
  };

  return (
    <InputWrapper>
      <Flag src="/ico/br.svg" alt="Bandeira do Brasil" />
      <DDI>+55</DDI>
      <StyledInput
        type="text"
        placeholder="00 0 0000-0000"
        value={value}
        onChange={handleChange}
        maxLength={15}
        inputMode="numeric"
        autoComplete="tel"
      />
    </InputWrapper>
  );
};

export default InputBrazilNumber;
