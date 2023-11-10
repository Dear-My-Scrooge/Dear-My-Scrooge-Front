import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

import PastIcon from "../../assets/images/character/past.png";
import PresentIcon from "../../assets/images/character/present.png";
import FutureIcon from "../../assets/images/character/future.png";
import Candle from "../../components/candle/Candle";

function Main() {
  return (
    <>
      <S.MainWrapper>
        <S.MainContent>
          <S.Title>수연's 스크루지</S.Title>
          <S.SubTitle>78번째 방문자에요 :)</S.SubTitle>

          <Link to="/mailbox" state={{ data: "past" }}>
            <S.Past>
              <S.PastImg src={PastIcon} alt="과거 캐릭터" />
              <S.PastText>Past</S.PastText>
            </S.Past>
          </Link>

          <Link to="/mailbox" state={{ data: "present" }}>
            <S.Present>
              <S.PresentText>Present</S.PresentText>
              <S.PresentImg src={PresentIcon} alt="현재 캐릭터" />
            </S.Present>
          </Link>

          <Link to="/mailbox" state={{ data: "future" }}>
            <S.Future>
              <S.FutureImg src={FutureIcon} alt="미래 캐릭터" />
              <S.FutureText>Future</S.FutureText>
            </S.Future>
          </Link>

          <Link to="/tree">
            <S.CreatePage>내 스크루지 페이지로 이동</S.CreatePage>
          </Link>
        </S.MainContent>

        <Candle />
      </S.MainWrapper>
    </>
  );
}

export default Main;
