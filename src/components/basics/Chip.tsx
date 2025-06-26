import styled from "styled-components";
import React from "react";

interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  className?: string;
}

const ChipWrapper = styled.span<{ variant: string; size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-family: "Nunito", sans-serif;

  /* Variantes de cor */
  ${({ variant }) => {
    switch (variant) {
      case "success":
        return `
          background: var(--color-green);
        `;
      case "warning":
        return `
          background: #F5A524;
        `;
      case "error":
        return `

        `;
      default:
        return `
          background: #F4F4F5;
          color: #27272A;
          border: 1px solid #E4E4E7;
        `;
    }
  }}

  /* Tamanhos */
  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 1px 7px;
          font-size: 8px;
        `;
      case "large":
        return `
          padding: 8px 16px;
          font-size: 16px;
        `;
      default:
        return `
          padding: 6px 12px;
          font-size: 14px;
        `;
    }
  }}
`;

const Chip: React.FC<ChipProps> = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
}) => {
  return (
    <ChipWrapper variant={variant} size={size} className={className}>
      {children}
    </ChipWrapper>
  );
};

export default Chip;
