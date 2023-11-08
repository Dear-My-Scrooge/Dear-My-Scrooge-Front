import { styled } from "styled-components";

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  border-radius: ${props =>
    props.show ? "16px 16px 0px 0px" : "16px 16px 16px 16px"};
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
  transform: ${props => (props.show ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.3s;
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
