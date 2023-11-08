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
