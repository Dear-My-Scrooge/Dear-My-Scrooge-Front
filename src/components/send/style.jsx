import { styled } from "styled-components";

export const SendWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 30px 0px 30px;
  margin-top: 73px;
`;

export const SendTextareaWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SendTextarea = styled.textarea`
  width: 100%;
  height: 222px;
  border-radius: 20px;
  padding: 30px;
  background: #e5e5e5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #797979;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  resize: none;
  font-family: "Nanum_DaSiSiJagHae";
  border: none;
`;

export const SendTextCnt = styled.div`
  position: absolute;
  top: 220px;
  right: 50px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
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
`;

export const SendButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 27px;
`;

export const Icon = styled.img`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  width: ${props => props.iconsize};
  height: ${props => props.iconsize};
`;
