import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";

import GhostIcon from "../../assets/images/icon/ghost.png";
import TreeIcon from "../../assets/images/icon/tree.png";

function Tree() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const user_id = state && state.user_id;

  return (
    <>
      <S.MainWrapper>
        <Link
          to="/about"
          state={{
            user_id: user_id
          }}
        >
          <S.GhostIcon src={GhostIcon} alt="고스트 아이콘" />
        </Link>

        <S.MainContent>
          <Link to={`/${user_id}`}>
            <S.Title>디어 마이 스크루지</S.Title>
          </Link>

          <S.TreeIcon src={TreeIcon} alt="트리 아이콘" />

          <Link
            to="/login"
            state={{
              user_id: user_id
            }}
          >
            <S.CreatePage>로그인</S.CreatePage>
          </Link>

          <Link
            to="/signUp"
            state={{
              user_id: user_id
            }}
          >
            <S.CreatePage>내 스크루지 페이지 만들기</S.CreatePage>
          </Link>
        </S.MainContent>
      </S.MainWrapper>
    </>
  );
}

export default Tree;
