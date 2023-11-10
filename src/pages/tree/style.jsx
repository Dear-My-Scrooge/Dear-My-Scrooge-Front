import { styled } from "styled-components";

import MainBackGroundImg from "../../assets/images/background/main.png";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${MainBackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 257px;
  height: 45px;
  border-radius: 20px;
  background: #E5E5E5;
  color: #010422;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  margin-top: 27px;
  margin-bottom: 1px;
`;


export const GhostIcon = styled.img`
margin-left: 250px;
  display: flex;
  width: 148.75px;
  height: 148.75px;
  margin-top: 70px;
`;

export const TreeIcon = styled.img`
  display: flex;
  width: 332px;
  height: 387.67px;
  margin-top: 6px;
`;


export const Title = styled.div`
  display: flex;
  color: #fff;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
`;