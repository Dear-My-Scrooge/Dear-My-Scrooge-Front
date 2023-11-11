import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import axios from "../../api/axios";

import PastIcon from "../../assets/images/character/past.png";
import SocksIcon from "../../assets/images/icon/socks.png";

function Past() {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  const nickname = state && state.nickname;
  const user_id = state && state.user_id;
  const [questionId, setQuestionId] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`main/question/past`);
      setData(response.data);

      setQuestionId(response.data[0].id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.PastWrapper>
        <Head
          bgcolor={"#F0D890"}
          color={"#000"}
          nickname={nickname}
          user_id={user_id}
        />
        <S.PastQuestionWrapper>
          {data.length > 0 ? (
            <S.PastQuestion>Q. {data[0].content}</S.PastQuestion>
          ) : (
            <S.PastQuestion>Loading...</S.PastQuestion>
          )}
        </S.PastQuestionWrapper>
        <Send
          icon={PastIcon}
          iconsize={"132px"}
          top={"-50px"}
          right={"5px"}
          nickname={nickname}
          user_id={user_id}
          question_id={questionId}
        />
        <S.SocksIcon src={SocksIcon} alt="양말 아이콘" />
      </S.PastWrapper>
    </>
  );
}

export default Past;
