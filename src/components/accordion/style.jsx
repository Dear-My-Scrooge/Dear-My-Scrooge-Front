import { styled, keyframes } from "styled-components";
const fadeInAnimation = keyframes`
from {
  opacity: 0;
  transform: translateY(2rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeInAnimation} 1s ease-in-out;
`;

export const AccordionQuestionWrapper = styled.div`
  width: 325px;
  /* border-radius: 16px; */
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  gap: 10px;
  border-radius: 16px 16px 16px 16px;
  &.show {
    border-radius: 16px 16px 0px 0px;
  }
  cursor: pointer;
  margin-top: 20px;
`;

export const AccordionQuestion = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
`;

export const AccordionMoreButton = styled.button``;

export const AccordionMoreButtonImg = styled.img`
  width: 13.091px;
  transform: rotate(0deg);
  transition: transform 0.3s;

  &.show {
    transform: rotate(180deg);
  }
`;

export const AccordionAnswerWrapper = styled.div`
  max-height: 0; // 처음에 안보이게
  overflow: hidden;
  transition: max-height 0s ease-in-out; //접는 속도

  &.show {
    max-height: 100rem;
    transition: max-height 1s ease-in-out; //펼치는 속도
  }
`;

export const AccordionAnswer = styled.div`
  width: 325px;
  border-bottom: 0.7px solid rgba(0, 0, 0, 0.5);
  background: #e5e5e5;
  border-radius: 0px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  padding: 10px 20px;
  &.AccordionLastAnswer {
    width: 325px;
    border-bottom: 0.7px solid rgba(0, 0, 0, 0.5);
    background: #e5e5e5;
    border-radius: 0px 0px 16px 16px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 26.3px;
    padding: 10px 20px;
  }
`;

export const AccordionAnswerContent = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  white-space: pre-line;
`;

export const AccordionAnswerWriter = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
`;

export const AccordionLastAnswer = styled.div`
  width: 325px;
  border-bottom: 0.7px solid rgba(0, 0, 0, 0.5);
  background: #e5e5e5;
  border-radius: 0px 0px 16px 16px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  padding: 10px 20px;
`;

export const MapWrapper = styled.div``;
