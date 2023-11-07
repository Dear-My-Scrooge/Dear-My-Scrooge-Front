import React, { useState } from "react";
import * as S from "./style";
import Candle from "../../components/candle/Candle";

function Nickname() {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = e => {
    setInputCount(e.target.value.length);
  };

  return (
    <>
      <S.NicknameWrapper>
        <S.NicknameTitle>수연's 스크루지</S.NicknameTitle>
        <S.NicknameWho>누구라고 전달해줄까요?</S.NicknameWho>
        <S.NicknameInputWrapper>
          <S.NicknameInput
            type="text"
            maxLength="10"
            placeholder="닉네임을 입력해주세요"
            onChange={onInputHandler}
          />
          <S.NicknameCnt>{inputCount} / 10</S.NicknameCnt>
        </S.NicknameInputWrapper>
        <S.SendButton>보내기</S.SendButton>

        <S.CandleWrapper>
          <Candle />
        </S.CandleWrapper>
      </S.NicknameWrapper>
    </>
  );
}

export default Nickname;
