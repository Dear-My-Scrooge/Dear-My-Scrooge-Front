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
