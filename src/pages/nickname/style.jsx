import { styled } from "styled-components";
import MainBackGroundImg from "../../assets/images/background/main.png";

export const NicknameWrapper = styled.div`
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

export const NicknameTitle = styled.div`
  color: #fff;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
  margin-top: 234px;
`;
export const NicknameWho = styled.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 42.08px;
  margin-top: 53px;
`;

export const NicknameInput = styled.input`
  margin-top: 14px;
  width: 325px;
  height: 54px;
  border-radius: 16px;
  background: #e5e5e5;
  color: rgba(100, 100, 100, 0.9);
  font-family: Nanum DaSiSiJagHae;
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  padding: 13px 50px 12px 23px;
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 45px;
  border-radius: 16px;
  background: #fff;
  color: #000321;
  text-align: center;
  font-family: "Nanum_DaSiSiJagHae";
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  margin-top: 30px;
`;

export const NicknameCnt = styled.div`
  position: absolute;
  top: 30px;
  right: 18px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;

export const NicknameForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NicknameInputWrapper = styled.div`
  position: relative;
`;

export const CandleWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 72px;
`;
