import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import FutureIcon from "../../assets/images/character/future.png";

function Send(props) {
  const [inputContent, setInputContent] = useState("");
  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = e => {
    setInputCount(e.target.value.length);
    setInputContent(e.target.value);
  };

  return (
    <>
      <>
        <S.SendWrapper>
          <S.Icon
            src={props.icon}
            alt="아이콘"
            iconsize={props.iconsize}
            top={props.top}
            right={props.right}
          />
          <S.SendTextCnt>{inputCount} / 100</S.SendTextCnt>
          <S.SendTextarea
            onChange={onInputHandler}
            placeholder="메시지를 입력해주세요"
            maxLength={100}
          />

          <Link
            to="/nickname"
            state={{ data: inputContent, nickname: props.nickname }}
          >
            <S.SendButtonWrapper>
              <S.SendButton>보내기</S.SendButton>
            </S.SendButtonWrapper>
          </Link>
        </S.SendWrapper>
      </>
    </>
  );
}

export default Send;
