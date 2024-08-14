import React from "react";
import CustomImage from "../components/Image";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import googleSignin from "../assets/googleSignin.png";
import linkedinSignin from "../assets/linkedinSignin.png";
import appleSignin from "../assets/appleSignin.png";
import Footer from "../components/Footer";
import styled from "styled-components";

function Login() {
  return (
    <React.Fragment>
      <Container>
        <div style={{ display: "flex", alignItems: "end" }}>
          <CustomImage src={logo} width="60px" height="60px" />
          <label
            style={{
              marginLeft: "1rem",
              fontSize: "1.5rem",
              marginBottom: "0.2rem",
            }}
          >
            Timemachine <label style={{ color: "#35A58B" }}>HR</label>
          </label>
        </div>
        <StyledInput placeholder="Email" type="email" />
        <StyledPass>
          <StyledInput
            placeholder="Password"
            type="password"
            style={{ width: "75%" }}
          />
          <Button
            color={"#008E6D"}
            placeholder={"Verify"}
            onClick={() => console.log("")}
            type={"primary"}
          />
        </StyledPass>
        <Spacer>
          <div
            style={{ width: "40%", height: "1px", backgroundColor: "gray" }}
          />
          <label>Or</label>
          <div
            style={{ width: "40%", height: "1px", backgroundColor: "gray" }}
          />
        </Spacer>
        <Button
          placeholder={<img src={googleSignin} width="250px" />}
          onClick={() => console.log("")}
          type="none"
        />
        <Button
          placeholder={<img src={linkedinSignin} width="250px" />}
          onClick={() => console.log("")}
          type="none"
        />
        <Button
          placeholder={<img src={appleSignin} width="250px" />}
          onClick={() => console.log("")}
          type="none"
        />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  outline: none;
  height: 32px;
  border-radius: 5px;
  border: 1px solid;
  width: 18%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const StyledPass = styled.div`
  display: flex;
  width: 18.5%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 72%;
  }
`;

const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.5%;
  gap: 5%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Login;
