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
  width: 204px;
  height: 38px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.65);
  color: #010422;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  margin-top: 27px;
  margin-bottom: 1px;
`;


export const GhostIcon = styled.img`
margin-left: 300px;
  display: flex;
  width: 72px;
  height: 99px;
  margin-top: 6px;
`;

export const TreeIcon = styled.img`
  display: flex;
  width: 210px;
  height: 299px;
  margin-top: 6px;
`;


export const Title = styled.div`
  display: flex;
  color: #fff;
  margin-top: 97px;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
`;