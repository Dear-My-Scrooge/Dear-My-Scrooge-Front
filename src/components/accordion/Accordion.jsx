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
        <S.AccordionQuestionWrapper>
          <S.AccordionQuestion>
            Q. 과거 수연의 첫 수연의 첫 인상은?
          </S.AccordionQuestion>
          <S.AccordionMoreButton onClick={handleShowMore}>
            <S.AccordionMoreButtonImg src={MoreIcon} show={show} />
          </S.AccordionMoreButton>
        </S.AccordionQuestionWrapper>

        <S.AccordionAnswer className={show ? "show" : "hide"}>
          gd
        </S.AccordionAnswer>
      </S.AccordionWrapper>
    </>
  );
}

export default Accordion;
