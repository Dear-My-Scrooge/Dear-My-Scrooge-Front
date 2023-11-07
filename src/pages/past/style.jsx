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
