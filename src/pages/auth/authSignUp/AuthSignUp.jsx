import React from "react";
import * as S from "./style";
import Candle from "../../../components/candle/Candle";

function AuthSignUp() {
  return (
    <>
      <S.AuthSignUpWrapper>
        <S.AuthSignUpContentWrapper></S.AuthSignUpContentWrapper>
        <Candle />
      </S.AuthSignUpWrapper>
    </>
  );
}

export default AuthSignUp;
