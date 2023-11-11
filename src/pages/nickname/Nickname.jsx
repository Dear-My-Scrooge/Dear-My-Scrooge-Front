import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import Candle from "../../components/candle/Candle";
import axios from "../../api/axios";

function Nickname() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const { state } = useLocation();
  const data = state && state.data;
  const myNickname = state && state.nickname;
  const user_id = state && state.user_id;
  const question_id = state && state.question_id;
  console.log("question_id" + question_id);
  console.log("data" + data);
  console.log("nickname" + nickname);
  console.log("user_id" + user_id);

  const onInputHandler = e => {
    setInputCount(e.target.value.length);
    setNickname(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (nickname && data) {
      try {
        const response = await axios.post(`main/username/${user_id}/answer`, {
          writer: nickname,
          content: data,
          to_user: user_id,
          question: question_id
        });
        if (response.status === 201) {
          alert("작성 성공 :)");
        }
      } catch (error) {
        alert("작성 실패 :(");
        console.log(error);
      }
    } else {
      alert("모든 필수 정보를 입력해주세요.");
    }

    navigate(`/${user_id}`);
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
