import styled from "styled-components";
import React from "react";

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 90%;
  height: 62px;

  &::after {
    content: "";
    position: absolute;
    right: 1.2rem;
    width: 12px;
    height: 12px;
    background-image: url("/ico/dark-arrow-1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    filter: invert(0.5);
    transform: rotate(90deg);
    pointer-events: none;
    transition: transform 0.2s;
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: var(--color-dark-brown-gray);
  border-radius: 20px;
  padding: 0.7rem 1rem;
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  color: var(--color-light-gray-2);
  font-size: 20px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;

  &:invalid {
    color: var(--color-medium-gray);
  }

  option {
    color: var(--color-light-gray-2);
    background: var(--color-dark-brown-gray);
  }
`;

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  placeholder,
  ...rest
}) => {
  return (
    <SelectWrapper>
      <StyledSelect defaultValue="" {...rest}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default SelectInput;
