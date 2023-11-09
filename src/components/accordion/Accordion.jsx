import React, { useState } from "react";
import * as S from "./style";
import MoreIcon from "../../assets/images/icon/more.png";

function Accordion() {
  const [show, setShow] = useState(false);

  const handleShowMore = () => {
    setShow(!show);
  };

  return (
    <>
      <S.AccordionWrapper>
        <S.AccordionQuestionWrapper className={show ? "show" : "hide"}>
          <S.AccordionQuestion>
            Q. 과거 수연의 첫 수연의 첫 인상은?
          </S.AccordionQuestion>
          <S.AccordionMoreButton onClick={handleShowMore}>
            <S.AccordionMoreButtonImg
              src={MoreIcon}
              className={show ? "show" : "hide"}
            />
          </S.AccordionMoreButton>
        </S.AccordionQuestionWrapper>

        <S.AccordionAnswerWrapper className={show ? "show" : "hide"}>
          <S.AccordionAnswer>
            발랄했다.
            <br /> s - 작심이 -
          </S.AccordionAnswer>
        </S.AccordionAnswerWrapper>

        <S.AccordionAnswerWrapper className={show ? "show" : "hide"}>
          <S.AccordionAnswer>발랄했다. s - 작심이 -</S.AccordionAnswer>
        </S.AccordionAnswerWrapper>

        <S.AccordionAnswerWrapper className={show ? "show" : "hide"}>
          <S.AccordionLastAnswer>발랄했다. s - 작심이 -</S.AccordionLastAnswer>
        </S.AccordionAnswerWrapper>
      </S.AccordionWrapper>
    </>
  );
}

export default Accordion;
