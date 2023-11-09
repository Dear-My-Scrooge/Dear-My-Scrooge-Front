import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const MailboxWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${props => props.bgimg});
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

// 고정 버튼
export const FixedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

// 작성하기 버튼
export const MailboxWriterWrapper = styled(Link)`
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

  &:hover {
    transform: scale(1.1); /* 크기를 1.1배로 확대 (원하는 크기로 조절 가능) */
    transition: transform 0.2s;
  }
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

// 공유하기 버튼
export const MailboxShareWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  margin-left: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;

export const MailboxShareIcon = styled.img`
  width: 21px;
`;
