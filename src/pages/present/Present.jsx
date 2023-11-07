import React from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import PresentIcon from "../../assets/images/character/present.png";
import SnowmanIcon from "../../assets/images/icon/snowman.png";
import DuckIcon from "../../assets/images/icon/duck.png";

function Present() {
  return (
    <>
      <S.PresentWrapper>
        <Head color={"#810006"} />
        <S.PresentQuestionWrapper>
          <S.PresentQuestion>
            Q. 오늘 수연에게 <br />
            추천하고 싶은 노래
          </S.PresentQuestion>
          <S.DuckIcon src={DuckIcon} alt="오리 아이콘" />
        </S.PresentQuestionWrapper>
        <Send
          icon={PresentIcon}
          iconsize={"108px"}
          top={"-40px"}
          right={"30px"}
        />
        <S.SnowmanIcon src={SnowmanIcon} alt="눈사람 아이콘" />
      </S.PresentWrapper>
    </>
  );
}

export default Present;
