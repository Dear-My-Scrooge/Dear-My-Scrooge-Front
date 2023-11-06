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

// 과거
export const Past = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 352px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #f0d890;
`;

export const PastImg = styled.img`
  width: 135px;
  height: 135px;
  margin-left: 20px;
  margin-right: 94px;
`;

export const PastText = styled.div`
  color: #000321;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
`;
