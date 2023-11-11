import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

function Head(props) {
  console.log(props);
  return (
    <>
      <>
        <S.HeadWrapper bgcolor={props.bgcolor}>
          <Link to={`/${props.user_id}`}>
            <S.HeadTitle color={props.color}>
              {props.nickname}'s 스크루지
            </S.HeadTitle>
          </Link>
        </S.HeadWrapper>
      </>
    </>
  );
}

export default Head;
