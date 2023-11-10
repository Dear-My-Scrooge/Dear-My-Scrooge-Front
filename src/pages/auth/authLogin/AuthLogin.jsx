import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import Candle from "../../../components/candle/Candle";

function AuthLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    pwd: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, pwd } = loginData;

    if (email === "" || pwd === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("auth/login", {
        email: email,
        password: pwd
      });

      const accessToken = response.data.token.access;
      const refreshToken = response.data.token.refresh;
      const nickname = response.data.user.nickname;

      setUserInfo({
        email: email,
        nickname: nickname,
        accessToken: accessToken,
        refreshToken: refreshToken
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          email: email,
          nickname: nickname,
          accessToken: accessToken,
          refreshToken: refreshToken
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("비밀번호를 다시 입력해주세요!");
    }
  };

  return (
    <>
      <S.AuthLoginWrapper>
        <S.AuthLoginWrapperContent>
          <S.AuthLoginHeader>디어 마이 스크루지</S.AuthLoginHeader>
          <S.AuthLoginTItle>로그인 해주세요</S.AuthLoginTItle>

          <S.AuthForm onSubmit={handleSubmit}>
            <S.AuthInputWrapper>
              <S.AuthInput
                required
                placeholder="이메일"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={loginData.email}
                real={loginData.email ? "true" : "false"}
              />

              <S.AuthInput
                required
                placeholder="비밀번호"
                type="password"
                name="pwd"
                onChange={handleInputChange}
                value={loginData.pwd}
                real={loginData.pwd ? "true" : "false"}
              />
            </S.AuthInputWrapper>

            <S.AuthLoginSubmit type="submit">확인</S.AuthLoginSubmit>
          </S.AuthForm>

          <S.AuthCreatePage to={"/signup"}>
            내 페이지 만들기 &gt;
          </S.AuthCreatePage>
          <S.AuthLoginHelp>로그인에 어려움이 있어요 &gt; </S.AuthLoginHelp>
        </S.AuthLoginWrapperContent>

        <Candle />
      </S.AuthLoginWrapper>
    </>
  );
}

export default AuthLogin;