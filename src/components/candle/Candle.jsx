import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import CandleIcon from "../../assets/images/icon/candle.png";

function Candle(props) {
  return (
    <>
      <Link
        to="/about"
        state={{
          user_id: props.user_id
        }}
      >
        <S.Candle src={CandleIcon} alt="촛불 아이콘" />
      </Link>
    </>
  );
}

export default Candle;
