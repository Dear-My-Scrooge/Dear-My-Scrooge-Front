import React, { useState, useEffect } from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import axios from "../../api/axios";

import PastIcon from "../../assets/images/character/past.png";
import SocksIcon from "../../assets/images/icon/socks.png";

function Past() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`main/question/past`);
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.PastWrapper>
        <Head bgcolor={"#F0D890"} color={"#000"} />
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
          data={data}
        />
        <S.SocksIcon src={SocksIcon} alt="양말 아이콘" />
      </S.PastWrapper>
    </>
  );
}

export default Past;
