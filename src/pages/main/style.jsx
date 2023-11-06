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

export const Title = styled.div`
  display: flex;
  color: #fff;
  margin-top: 97px;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
`;

export const SubTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  letter-spacing: 1px;
`;
