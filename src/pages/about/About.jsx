import React, { useState } from "react";
import * as S from "./style";
import Candle from "../../components/candle/Candle";
import ClickMeIcon from "../../assets/images/icon/clickMe.png";

function About() {
  return (
    <>
      <S.AboutWrapper>
        <S.AboutTitle>디어 마이 스크루지</S.AboutTitle>
        <S.AboutContent>
          그들의 과거에게, <br />
          그들의 현재에게, <br />
          그들의 미래에게, <br />
          당신은 어떤 말을 전하고 싶나요?
        </S.AboutContent>

        <S.ClickMeImg src={ClickMeIcon} alt="클릭 아이콘" />

        <S.CandleWrapper>
          <Candle />
        </S.CandleWrapper>
      </S.AboutWrapper>
    </>
  );
}

export default About;
