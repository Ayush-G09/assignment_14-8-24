import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <StyledHeaderLayout>
      <img
        src={logo}
        width="50px"
        height="50px"
        style={{ marginLeft: "1.5rem" }}
      />
      <label style={{ marginLeft: "1rem" }}>
        Timemachine <label style={{ color: "#35A58B" }}>HR</label>
      </label>
      <ButtonCon>
        <Button
          placeholder={"Schedule a Demo"}
          onClick={() => console.log("")}
          type={"outline"}
        />
        <Button
          placeholder={"Sign Up Now"}
          onClick={() => navigate('/signup')}
          type={"primary"}
        />
      </ButtonCon>
    </StyledHeaderLayout>
  );
}

const StyledHeaderLayout = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const ButtonCon = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  gap: 1.5rem;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
