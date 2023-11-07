import React from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";

function Past() {
  return (
    <>
      <S.PastWrapper>
        <Head />
        <Send />
      </S.PastWrapper>
    </>
  );
}

export default Past;
