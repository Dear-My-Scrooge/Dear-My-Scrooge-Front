import { styled } from "styled-components";
import MainBackGroundImg from "../../../assets/images/background/main.png";
import { Link } from "react-router-dom";

export const AuthLoginWrapper = styled.div`
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

export const AuthLoginWrapperContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthLoginHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
  margin-top: 130px;
`;

export const AuthLoginTItle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  margin-top: 76px;
`;

export const AuthForm = styled.form``;

export const AuthInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthInput = styled.input`
  margin-top: 22px;
  width: 325px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #e5e5e5;
  padding: 16px;
  color: rgba(100, 100, 100, 0.9);
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  font-family: "Nanum_DaSiSiJagHae";
`;

export const AuthLoginSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 54px;
  border-radius: 16px;
  background: #fff;
  color: #000321;
  text-align: center;
  font-family: Nanum DaSiSiJagHae;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 37px;
`;

export const AuthCreatePage = styled(Link)`
  margin-top: 22px;
  width: 100%;
  color: #fff;
  text-align: right;
  font-size: 17px;
  font-weight: 400;
  line-height: 22.355px;
`;

export const AuthLoginHelp = styled.div`
  width: 100%;
  color: #fff;
  text-align: right;
  font-size: 17px;
  font-weight: 400;
  line-height: 22.355px;
`;
