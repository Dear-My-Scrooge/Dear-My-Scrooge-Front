import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import axios from "../../api/axios";

import FutureIcon from "../../assets/images/character/future.png";

function Future() {
  const { state } = useLocation();
  const nickname = state && state.nickname;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`main/question/future`);
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.FutureWrapper>
        <Head bgcolor={"#083A00"} color={"#fff"} nickname={nickname} />
        {data.length > 0 ? (
          <S.FutureQuestion>Q. {data[0].content}</S.FutureQuestion>
        ) : (
          <S.FutureQuestion>Loading...</S.FutureQuestion>
        )}

        <Send
          icon={FutureIcon}
          iconsize={"108px"}
          top={"-25px"}
          right={"30px"}
          nickname={nickname}
        />
      </S.FutureWrapper>
    </>
  );
}

export default Future;
