import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "../../api/axios";

import PastIcon from "../../assets/images/character/past.png";
import PresentIcon from "../../assets/images/character/present.png";
import FutureIcon from "../../assets/images/character/future.png";
import Candle from "../../components/candle/Candle";

function Main() {
  // 데이터
  const [data, setData] = useState({ nickname: "", view_cnt: 0 });

  const url = window.location.pathname;
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1];
  const user_id = lastPart;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`auth/username/${user_id}`);

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.MainWrapper>
        <S.MainContent>
          <S.Title>{data.nickname}'s 스크루지</S.Title>
          <S.SubTitle>{data.view_cnt}번째 방문자에요 :)</S.SubTitle>

          <Link to="/mailbox" state={{ data: "past", nickname: data.nickname }}>
            <S.Past>
              <S.PastImg src={PastIcon} alt="과거 캐릭터" />
              <S.PastText>Past</S.PastText>
            </S.Past>
          </Link>

          <Link
            to="/mailbox"
            state={{ data: "present", nickname: data.nickname }}
          >
            <S.Present>
              <S.PresentText>Present</S.PresentText>
              <S.PresentImg src={PresentIcon} alt="현재 캐릭터" />
            </S.Present>
          </Link>

          <Link
            to="/mailbox"
            state={{ data: "future", nickname: data.nickname }}
          >
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
