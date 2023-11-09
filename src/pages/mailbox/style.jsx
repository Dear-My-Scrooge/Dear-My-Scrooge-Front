import { styled } from "styled-components";

export const MailboxWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeTabWrapper = styled.div`
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
  color: ${props => props.color};
`;

export const TimeTab = styled.div`
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.25px;
  border-bottom: 3px solid ${props => props.borderbottom};
  padding: 0px 18px 5px 18px;
  cursor: pointer;
`;

// 작성하기 버튼
export const MailboxWriterWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 118px;
  height: 49px;
  border-radius: 25px;
  background: #e5e5e5;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.25);
`;

export const MailboxWriterIcon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

export const MailboxWriter = styled.div`
  color: #000321;
  text-align: center;
  font-family: Nanum DaSiSiJagHae;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
