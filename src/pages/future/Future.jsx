import React from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import Send from "../../components/send/Send";
import FutureIcon from "../../assets/images/character/future.png";

function Future() {
  return (
    <>
      <S.FutureWrapper>
        <Head color={"#083A00"} />
        <S.FutureQuestion>
          Q. 미래 수연은 <br />
          어떻게 성장해 있을까요?
        </S.FutureQuestion>
        <Send
          icon={FutureIcon}
          iconsize={"108px"}
          top={"-25px"}
          right={"30px"}
        />
      </S.FutureWrapper>
    </>
  );
}

export default Future;
