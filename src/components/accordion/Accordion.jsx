import React from "react";
import * as S from "./style";
import MoreIcon from "../../assets/images/icon/more.png";

function Accordion() {
  return (
    <>
      <S.AccordionWrapper>
        <S.AccordionQuestionWrapper>
          <S.AccordionQuestion>
            Q. 과거 수연의 첫 수연의 첫 인상은?
          </S.AccordionQuestion>
          <S.AccordionMoreButton>
            <S.AccordionMoreButtonImg src={MoreIcon} />
          </S.AccordionMoreButton>
        </S.AccordionQuestionWrapper>
      </S.AccordionWrapper>
    </>
  );
}

export default Accordion;
