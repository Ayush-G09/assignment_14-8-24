import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import mix1 from "../assets/mix1.jpg";
import mix2 from "../assets/mix2.jpg";
import mix3 from "../assets/mix3.jpg";
import CustomImage from "../components/Image";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [dataIndex, setDataIndex] = useState(0);

  const navigate = useNavigate();

  const data = [
    { value: "Human Resources", color: "#35A58B", img: mix1 },
    { value: "Leave/Time-Off", color: "#FDC300", img: mix2 },
    { value: "Attendance/Roster", color: "#3871E0", img: mix3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <StyledLayout>
      <Header />
      <Body>
        <ContentCon>
          <Spacer />
          <Content>
            <div style={{ display: "flex", alignItems: "end" }}>
              <CustomImage src={logo} />
              <label
                style={{
                  marginLeft: "1rem",
                  color: data[dataIndex].color,
                  fontSize: "1.5rem",
                }}
              >
                {data[dataIndex].value}
              </label>
            </div>
            <label style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Productivity Starts Here
            </label>
            <label style={{ color: "gray" }}>
              Designed to streamline your workflow, enhance collaboration, and
              optimize your productivity from the movement you login. Whether
              you are managing projects, coordinating with teams, or setting
              personal milestones, Valluva provides a seamless experience that
              empowers you to focus on what truly matters.
            </label>
            <div style={{ display: "flex", marginTop: "2rem", gap: "1rem" }}>
              <Button
                placeholder={"Sign Up Now"}
                onClick={() => navigate('/signup')}
                type={"primary"}
              />
              <Button
                placeholder={"Schedule a Demo"}
                onClick={() => console.log("")}
                type={"outline"}
              />
            </div>
            <label style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>
              *No credit card required / Cancel anytime
            </label>
          </Content>
        </ContentCon>
        <ImgCon>
          <StyledImg src={data[dataIndex].img} />
        </ImgCon>
      </Body>
      <Footer/>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentCon = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin-top: 0%;

  @media (max-width: 768px) {
    margin-top: 5%;
    width: 100%;
    height: 50%;
  }
`;

const Spacer = styled.div`
  width: 20%;

  @media (max-width: 768px) {
    width: 10%;
  }
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImgCon = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const StyledImg = styled.img`
  width: 25rem;
  height: 25rem;

  @media (max-width: 425px) {
    width: 15rem;
    height: 15rem;
  }
`;

export default Home;
