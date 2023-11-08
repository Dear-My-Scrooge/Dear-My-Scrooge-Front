import React, { useState } from "react";
import * as S from "./style";
import Candle from "../../components/candle/Candle";

function About() {
  return (
    <>
      <S.AboutWrapper>
        <S.CandleWrapper>
          <Candle />
        </S.CandleWrapper>
      </S.AboutWrapper>
    </>
  );
}

export default About;
