import { styled } from "styled-components";

import FutureBackGroundImg from "../../assets/images/background/sendFuture.png";

export const FutureWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${FutureBackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FutureQuestion = styled.div`
  width: 100%;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  padding: 50px 30px 0px 30px;
`;
