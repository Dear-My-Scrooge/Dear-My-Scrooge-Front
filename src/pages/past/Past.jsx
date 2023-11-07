import React from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import PastIcon from "../../assets/images/character/past.png";
import SocksIcon from "../../assets/images/icon/socks.png";

function Past() {
  return (
    <>
      <S.PastWrapper>
        <Head bgcolor={"#F0D890"} color={"#000"} />
        <S.PastQuestionWrapper>
          <S.PastQuestion>Q. 과거 수연의 첫 인상은?</S.PastQuestion>
        </S.PastQuestionWrapper>
        <Send icon={PastIcon} iconsize={"132px"} top={"-50px"} right={"5px"} />
        <S.SocksIcon src={SocksIcon} alt="양말 아이콘" />
      </S.PastWrapper>
    </>
  );
}

export default Past;
