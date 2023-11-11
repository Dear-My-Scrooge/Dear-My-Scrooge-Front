import React, { useState } from "react";
import * as S from "./style";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Candle from "../../../components/candle/Candle";
import axios from "../../../api/axios";

function AuthSignUp() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const user_id = state && state.user_id;
  const [user, setUser] = useState({
    email: "",
    nickname: "",
    password: "",
    password1: ""
  });

  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [passwordIsVaild, setpasswordIsVaild] = useState(false);
  const [pwdMatchMessage, setPwdMatchMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    // 모든 필수 정보가 입력되었는지 확인
    if (user.email && user.password && confirmPwd && user.nickname) {
      try {
        const response = await axios.post("auth/signup", {
          email: user.email,
          nickname: user.nickname,
          password: user.password,
          password1: user.password1
        });
        if (response.status === 200) {
          alert("회원가입이 완료되었습니다.");
          navigate("/login");
        }
      } catch (error) {
        alert("회원가입에 실패했습니다.");
        console.log(error);
      }
    } else {
      alert("모든 필수 정보를 입력해주세요.");
    }
  };

  // 비밀번호 입력
  const handlePwd = e => {
    e.preventDefault();
    const password = e.target.value;
    setPwd(password);
    setUser({ ...user, password: password });

    // Password strength validation
    const hasMinLength = password.length >= 8;
    const hasValidCombination =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()]).{2,}$/.test(password);
    if (hasMinLength && hasValidCombination) {
      setpasswordIsVaild(true);
    } else {
      setpasswordIsVaild(false);
    }
  };

  // 비밀번호 확인 입력
  const handleConfirmPwd = e => {
    e.preventDefault();
    const confirmedPassword = e.target.value;
    setConfirmPwd(confirmedPassword);
    setUser({ ...user, password1: confirmedPassword });

    // Password confirmation validation
    if (confirmedPassword !== pwd) {
      setPwdMatchMessage("동일하지 않은 비밀번호입니다 :(");
    } else {
      setPwdMatchMessage("확인 완료되었습니다 :)");
    }
  };

  return (
    <>
      <S.AuthSignUpWrapper>
        <S.AuthSignUpContentWrapper>
          <Link to={`/${user_id}`}>
            <S.AuthSignUpHeader>디어 마이 스크루지</S.AuthSignUpHeader>
          </Link>
          <S.AuthSignUpTItle>회원가입을 해주세요</S.AuthSignUpTItle>
          {/* 닉네임 */}
          <S.SignUpInput
            required
            placeholder="닉네임"
            type="text"
            name="nickname"
            onChange={e => setUser({ ...user, nickname: e.target.value })}
            value={user.nickname}
            isvaild="true"
          />
          {/* 이메일 */}
          <S.SignUpInputForm onSubmit={handleSubmit}>
            <S.SignUpInput
              required
              placeholder="이메일"
              type="email"
              name="email"
              onChange={e => setUser({ ...user, email: e.target.value })}
              value={user.email}
              isvaild="true"
            />

            {/* 비밀번호 */}
            <S.SignUpInput
              required
              placeholder="비밀번호"
              type="password"
              name="pwd"
              onChange={handlePwd}
              value={pwd}
              isvaild="true"
            />
            {pwd ? (
              <S.MessageText isvaild={passwordIsVaild ? "true" : "false"}>
                ︎✓ 8자 이상 입력
                <br />✓ 숫자, 영문, 특수문자 포함하여, 2개 이상 조합
              </S.MessageText>
            ) : (
              ""
            )}

            {/* 비밀번호 확인 */}
            <S.SignUpInput
              required
              placeholder="비밀번호 확인"
              type="password"
              name="confirmPwd"
              onChange={handleConfirmPwd}
              value={confirmPwd}
              isvaild={pwd === confirmPwd ? "true" : "false"}
            />
            {confirmPwd ? (
              pwd === confirmPwd ? (
                <S.MessageText isvaild="true">확인 완료</S.MessageText>
              ) : (
                <S.MessageText isvaild="false">
                  동일하지 않은 비밀번호입니다 :(
                </S.MessageText>
              )
            ) : (
              ""
            )}

            {/* 확인 버튼 */}
            <S.AuthSignUpButton type="submit">확인</S.AuthSignUpButton>
          </S.SignUpInputForm>
        </S.AuthSignUpContentWrapper>
        <Candle />
      </S.AuthSignUpWrapper>
    </>
  );
}

export default AuthSignUp;
