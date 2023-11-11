import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import Candle from "../../components/candle/Candle";
import ClickMeIcon from "../../assets/images/icon/clickMe.png";
import CloseIcon from "../../assets/images/icon/x.png";

function About() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state } = useLocation();
  const user_id = state && state.user_id;

  return (
    <>
      <S.AboutWrapper>
        <S.AboutContentWrapper>
          <Link to={`/${user_id}`}>
            <S.AboutTitle>디어 마이 스크루지</S.AboutTitle>
          </Link>
          <S.AboutContent>
            그들의 과거에게, <br />
            그들의 현재에게, <br />
            그들의 미래에게, <br />
            당신은 어떤 말을 전하고 싶나요?
          </S.AboutContent>

          <S.ClickMeImg
            onClick={() => setIsModalOpen(true)}
            src={ClickMeIcon}
            alt="클릭 아이콘"
          />
        </S.AboutContentWrapper>

        <Candle />

        {isModalOpen && (
          <>
            <S.ModalBackground>
              <S.ModalWrapper>
                <S.ModalCloseButton
                  onClick={() => setIsModalOpen(false)}
                  src={CloseIcon}
                  alt="닫힘 버튼"
                />
                <S.ModalTitle>About Us</S.ModalTitle>
                <S.ModalContent>
                  UI/UX <br />
                  한성대학교 박수연 <br />
                  성균관대학교 김지윤
                </S.ModalContent>

                <S.ModalContent>
                  Front-End <br />
                  동국대학교 이유진 <br />
                  성균관대학교 김재영
                </S.ModalContent>

                <S.ModalContent>
                  Back-End <br />
                  동국대학교 차은호 <br />
                  동국대학교 이상준
                </S.ModalContent>
              </S.ModalWrapper>
            </S.ModalBackground>
          </>
        )}
      </S.AboutWrapper>
    </>
  );
}

export default About;
