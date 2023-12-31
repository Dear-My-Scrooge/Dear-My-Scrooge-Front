import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import axios from "../../api/axios";

import PresentIcon from "../../assets/images/character/present.png";
import SnowmanIcon from "../../assets/images/icon/snowman.png";
import DuckIcon from "../../assets/images/icon/duck.png";

function Present() {
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
      const response = await axios.get(`main/question/present`);
      setData(response.data);
      console.log(response.data);
      setQuestionId(response.data[0].id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.PresentWrapper>
        <Head
          bgcolor={"#810006"}
          color={"#fff"}
          nickname={nickname}
          user_id={user_id}
        />
        <S.PresentQuestionWrapper>
          {data.length > 0 ? (
            <S.PresentQuestion>Q. {data[0].content}</S.PresentQuestion>
          ) : (
            <S.PresentQuestion>Loading...</S.PresentQuestion>
          )}

          <S.DuckIcon src={DuckIcon} alt="오리 아이콘" />
        </S.PresentQuestionWrapper>
        <Send
          icon={PresentIcon}
          iconsize={"108px"}
          top={"-40px"}
          right={"30px"}
          nickname={nickname}
          user_id={user_id}
          question_id={questionId}
        />
        <S.SnowmanIcon src={SnowmanIcon} alt="눈사람 아이콘" />
      </S.PresentWrapper>
    </>
  );
}

export default Present;
