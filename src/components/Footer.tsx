import React from 'react'
import styled from 'styled-components';
import CustomImage from './Image';
import google from "../assets/google.png";
import vip from "../assets/vip.png";
import cir from "../assets/cir.png";
import cpf from "../assets/cpf.png";
import apple from "../assets/apple.png";
import linkedin from "../assets/linkedin.png";
import xero from "../assets/xero.png";
import veremark from "../assets/veremark.png";
import oanda from "../assets/oanda.png";

function Footer() {
  return (
    <StyledFooter>
        <label style={{ fontWeight: 500, fontSize: "1.2rem" }}>Partners</label>
        <PartnersLogo>
          <CustomImage src={google} />
          <CustomImage src={vip} />
          <CustomImage src={cir} />
          <CustomImage src={cpf} />
          <CustomImage src={apple} />
          <CustomImage src={linkedin} />
          <CustomImage src={xero} />
          <CustomImage src={oanda} width="120px" />
          <CustomImage src={veremark} />
        </PartnersLogo>
      </StyledFooter>
  )
}

const StyledFooter = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  border: none;

  @media (max-width: 768px) {
    border-top: 1px solid gray;
    flex-direction: column;
  }
`;

const PartnersLogo = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 3rem;
  height: 100%;
  border-top: 1px solid gray;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: initial;
    border-top: none;
  }
`;

export default Footer