import { styled } from "styled-components";
import PastBackGroundImg from "../../assets/images/background/sendPast.png";

export const PastWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${PastBackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PastQuestion = styled.div`
  width: 80%;
  color: #000;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  padding: 50px 30px 0px 30px;
  margin-bottom: 40px;
`;

export const SocksIcon = styled.img`
  width: 232px;
`;

export const PastQuestionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
