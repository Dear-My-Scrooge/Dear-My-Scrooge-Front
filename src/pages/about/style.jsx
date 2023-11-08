import { styled } from "styled-components";
import MainBackGroundImg from "../../assets/images/background/main.png";

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${MainBackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutTitle = styled.div`
  margin-top: 130px;
  color: #fff;
  text-align: center;
  font-family: Nanum DaSiSiJagHae;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
`;

export const AboutContent = styled.div`
  color: #fff;
  text-align: center;
  font-family: Nanum DaSiSiJagHae;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 46px;
`;

export const ClickMeImg = styled.img`
  width: 209px;
  margin-top: 60px;
`;

export const CandleWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 72px;
`;
