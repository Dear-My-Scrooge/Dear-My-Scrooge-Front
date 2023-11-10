import React, { useState, useEffect } from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import axios from "../../api/axios";

import PresentIcon from "../../assets/images/character/present.png";
import SnowmanIcon from "../../assets/images/icon/snowman.png";
import DuckIcon from "../../assets/images/icon/duck.png";

function Present() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`main/question/present`);
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <S.PresentWrapper>
        <Head bgcolor={"#810006"} color={"#fff"} />
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
          data={data}
        />
        <S.SnowmanIcon src={SnowmanIcon} alt="눈사람 아이콘" />
      </S.PresentWrapper>
    </>
  );
}

export default Present;
