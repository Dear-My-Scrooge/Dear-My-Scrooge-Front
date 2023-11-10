import React, { useState } from "react";
import * as S from "./style";
import MoreIcon from "../../assets/images/icon/more.png";

function Accordion({ data }) {
  const [show, setShow] = useState(data ? Array(data.length).fill(false) : []);

  const handleShowMore = index => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };

  if (!data) {
    return <></>;
  }

  return (
    <>
      <S.AccordionWrapper>
        {data.map((question, index) => (
          <S.MapWrapper key={question.question_id}>
            <S.AccordionQuestionWrapper
              onClick={() => handleShowMore(index)}
              className={show[index] ? "show" : "hide"}
            >
              <S.AccordionQuestion>Q. {question.content}</S.AccordionQuestion>
              <S.AccordionMoreButton>
                <S.AccordionMoreButtonImg
                  src={MoreIcon}
                  className={show[index] ? "show" : "hide"}
                />
              </S.AccordionMoreButton>
            </S.AccordionQuestionWrapper>

            {question.answers.map((answer, ansIndex) => (
              <S.AccordionAnswerWrapper
                key={answer.answer_id}
                className={
                  show[index] && ansIndex === question.answers.length - 1
                    ? "show last"
                    : show[index]
                    ? "show"
                    : "hide"
                }
              >
                <S.AccordionAnswer
                  className={
                    ansIndex === question.answers.length - 1
                      ? "AccordionLastAnswer"
                      : ""
                  }
                >
                  <S.AccordionAnswerContent>
                    {answer.content}
                  </S.AccordionAnswerContent>
                  <S.AccordionAnswerWriter>
                    - {answer.writer} -
                  </S.AccordionAnswerWriter>
                </S.AccordionAnswer>
              </S.AccordionAnswerWrapper>
            ))}
          </S.MapWrapper>
        ))}
      </S.AccordionWrapper>
    </>
  );
}

export default Accordion;
