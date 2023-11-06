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
      </S.MainWrapper>
    </>
  );
}

export default Main;
