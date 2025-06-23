import styled from "styled-components";
import React, { useRef, useState } from "react";

const OtpWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const OtpBox = styled.input`
  width: 64px;
  height: 63px;
  border-radius: 20px;
  background: var(--color-dark-brown-gray);
  border: none;
  outline: none;
  text-align: center;
  font-size: 20px;
  color: var(--color-light-gray-2);
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  box-shadow: none;
  transition:
    background 0.18s,
    transform 0.18s;
  &::placeholder {
    color: var(--color-medium-gray);
    opacity: 1;
    font-size: 20px;
    font-weight: bold;
  }
  &:focus {
    border: none;
    background: var(--color-dark-gray-1);
    transform: scale(1.06);
  }
`;

const InputOtp = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value.replace(/\D/g, "");
    const newValues = [...values];
    if (val.length === 0) {
      newValues[idx] = "";
      setValues(newValues);
      return;
    }
    newValues[idx] = val[0];
    setValues(newValues);
    if (val.length > 0 && idx < 3) {
      (inputs[idx + 1].current as any)?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (values[idx]) {
        const newValues = [...values];
        newValues[idx] = "";
        setValues(newValues);
      } else if (idx > 0) {
        const newValues = [...values];
        newValues[idx - 1] = "";
        setValues(newValues);
        (inputs[idx - 1].current as any)?.focus();
      }
    }
    if (e.key === "ArrowLeft" && idx > 0) {
      (inputs[idx - 1].current as any)?.focus();
    }
    if (e.key === "ArrowRight" && idx < 3) {
      (inputs[idx + 1].current as any)?.focus();
    }
  };

  return (
    <OtpWrapper>
      {values.map((val, idx) => (
        <OtpBox
          key={idx}
          type="text"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(idx, e)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          ref={inputs[idx]}
          inputMode="numeric"
          autoComplete="one-time-code"
        />
      ))}
    </OtpWrapper>
  );
};

export default InputOtp;
