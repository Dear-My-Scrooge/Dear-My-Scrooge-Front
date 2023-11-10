import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import Candle from "../../components/candle/Candle";

function Nickname() {
  const [nickname, setNickname] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const { state } = useLocation();
  const data = state && state.data;
  const myNickname = state && state.nickname;

  const onInputHandler = e => {
    setInputCount(e.target.value.length);
    setNickname(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    window.location.href = "/";
  };

  return (
    <>
      <S.NicknameWrapper>
        <S.NicknameContentWrapper>
          <S.NicknameTitle>{myNickname}'s 스크루지</S.NicknameTitle>
          <S.NicknameWho>누구라고 전달해줄까요?</S.NicknameWho>
          <S.NicknameForm onSubmit={handleSubmit}>
            <S.NicknameInputWrapper>
              <S.NicknameInput
                type="text"
                maxLength="10"
                placeholder="닉네임을 입력해주세요"
                onChange={onInputHandler}
              />
              <S.NicknameCnt>{inputCount} / 10</S.NicknameCnt>
            </S.NicknameInputWrapper>
            <S.SendButton type="submit">보내기</S.SendButton>
          </S.NicknameForm>
        </S.NicknameContentWrapper>

        <Candle />
      </S.NicknameWrapper>
    </>
  );
}

export default Nickname;
