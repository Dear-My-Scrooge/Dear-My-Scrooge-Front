import { styled } from "styled-components";

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const AccordionQuestionWrapper = styled.div`
  width: 325px;
  border-radius: 16px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  gap: 10px;
`;

export const AccordionQuestion = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
`;

export const AccordionMoreButton = styled.div``;

export const AccordionMoreButtonImg = styled.img`
  width: 13.091px;
  transform: ${props => (props.show ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.3s;
`;

export const AccordionAnswer = styled.div`
  max-height: 0; // 처음에 안보이게
  overflow: hidden;
  transition: max-height 0.3s ease-in-out; //접는 속도

  &.show {
    max-height: 100rem;
    transition: max-height 0.5s ease-in-out; //펼치는 속도
  }
`;
