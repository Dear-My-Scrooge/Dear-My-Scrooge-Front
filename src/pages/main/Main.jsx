import React from "react";
import * as S from "./style";

import PastIcon from "../../assets/images/character/past.png";
import PresentIcon from "../../assets/images/character/present.png";
import FutureIcon from "../../assets/images/character/future.png";
import CandleIcon from "../../assets/images/icon/candle.png";

function Main() {
  return (
    <>
      <S.MainWrapper>
        <S.Title>수연's 스크루지</S.Title>
        <S.SubTitle>78번째 방문자에요 :)</S.SubTitle>

        <S.Past>
          <S.PastImg src={PastIcon} alt="과거 캐릭터" />
          <S.PastText>Past</S.PastText>
        </S.Past>

        <S.Present>
          <S.PresentText>Present</S.PresentText>
          <S.PresentImg src={PresentIcon} alt="현재 캐릭터" />
        </S.Present>

        <S.Future>
          <S.FutureImg src={FutureIcon} alt="미래 캐릭터" />
          <S.FutureText>Future</S.FutureText>
        </S.Future>

        <S.CreatePage>내 스크루지 페이지 만들기</S.CreatePage>

        <S.Candle src={CandleIcon} alt="촛불 아이콘" />
      </S.MainWrapper>
    </>
  );
}

export default Main;
