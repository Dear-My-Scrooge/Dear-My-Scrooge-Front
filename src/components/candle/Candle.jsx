import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import CandleIcon from "../../assets/images/icon/candle.png";

function Candle() {
  return (
    <>
      <S.CandleWrapper>
        <Link to="/about">
          <S.Candle src={CandleIcon} alt="촛불 아이콘" />
        </Link>
      </S.CandleWrapper>
    </>
  );
}

export default Candle;
