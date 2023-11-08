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
  &:hover {
    transform: scale(1.1); /* 크기를 1.1배로 확대 (원하는 크기로 조절 가능) */
    transition: transform 0.3s;
  }
  cursor: pointer;
`;

export const CandleWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 72px;
`;

// 모달창

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(229, 229, 229, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 328px;
  height: 379px;
  border-radius: 20px;
  background: #e5e5e5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ModalCloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
  margin-top: 30px;
`;

export const ModalContent = styled.div`
  width: 100%;
  padding-left: 50px;
  color: #000;
  font-size: 21px;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;
