import { styled } from "styled-components";

import PresentBackGroundImg from "../../assets/images/background/sendPresent.png";

export const PresentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${PresentBackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const PresentQuestionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: -70px;
`;

export const PresentQuestion = styled.div`
  display: flex;
  /* white-space: pre-line; */
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  padding: 50px 0px 30px 30px;
`;

export const DuckIcon = styled.img`
  width: 205.117px;
  height: 198.325px;
  flex-shrink: 0;
`;

export const SnowmanIcon = styled.img`
  width: 351px;
  flex-shrink: 0;
`;
