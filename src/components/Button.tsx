import React from "react";
import styled from "styled-components";

type Props = {
  placeholder: string | React.ReactElement;
  onClick: () => void;
  type: "outline" | "primary" | "none";
  color?: string;
};

function Button({ placeholder, onClick, type, color = '#3871E0'}: Props) {
  return <StyledButton color={color} onClick={onClick} type={type}>{placeholder}</StyledButton>;
}

const StyledButton = styled.div<{ type: "outline" | "primary" | "none", color: string }>`
  padding: ${(p) => p.type === 'none' ? '0rem' : '0.5rem'};
  border: ${(p) => (p.type === "outline" ? `1px solid ${p.color}` : "none")};
  border-radius: 5px;
  background-color: ${(p) => (p.type === "primary" ? `${p.color}` : "none")};
  color: ${(p) => (p.type === "outline" ? `${p.color}` : "white")};
  cursor: pointer;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default Button;
