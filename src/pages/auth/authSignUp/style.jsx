import { styled } from "styled-components";
import MainBackGroundImg from "../../../assets/images/background/main.png";

export const AuthSignUpWrapper = styled.div`
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

export const AuthSignUpContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthSignUpHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
  margin-top: 130px;
`;

export const AuthSignUpTItle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  margin-top: 76px;
`;

export const SignUpInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignUpInput = styled.input`
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

  ::placeholder {
    color: #aeafb9;
  }
  /* Your styling here */
  border-bottom: ${props =>
    props.isvaild == "true" ? "1px solid #000000" : "1px solid red"};
  /* Additional styling based on validity */
`;

export const AuthSignUpButton = styled.button`
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

export const MessageText = styled.span`
  width: 100%;
  margin-left: 20px;
  margin-top: 10px;
  color: ${props => (props.isvaild == "true" ? "#00C24E" : "#FF5D47")};
  font-size: 15px;
`;
