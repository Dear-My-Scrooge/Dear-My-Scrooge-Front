import React from "react";
import * as S from "./style";

function Head(props) {
  return (
    <>
      <>
        <S.HeadWrapper bgcolor={props.bgcolor}>
          <S.HeadTitle color={props.color}>
            {props.nickname}'s 스크루지
          </S.HeadTitle>
        </S.HeadWrapper>
      </>
    </>
  );
}

export default Head;
