import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import Head from "../../components/head/Head";
import PastBg from "../../assets/images/background/mailboxPast.png";
import PresentBg from "../../assets/images/background/mailboxPresent.png";
import FutureBg from "../../assets/images/background/mailboxFuture.png";
import Accordion from "../../components/accordion/Accordion";
import WriteIcon from "../../assets/images/icon/write.png";
import ShareIcon from "../../assets/images/icon/share.png";

function Mailbox() {
  const { state } = useLocation();
  const data = state && state.data;

  // const initialTime = location?.state?.time || "과거";
  const [time, setTime] = useState(data);

  const getBackgroundColor = time => {
    if (time === "과거") return "#F0D890";
    else if (time === "현재") return "#810006";
    else if (time === "미래") return "#083A00";
  };

  const getColor = time => {
    if (time === "과거") return "#000000";
    else return "#FFFFFF";
  };

  const setBackgroundImg = time => {
    if (time === "과거") return PastBg;
    else if (time === "현재") return PresentBg;
    else if (time === "미래") return FutureBg;
  };

  return (
    <>
      <S.MailboxWrapper bgimg={setBackgroundImg(time)}>
        <Head bgcolor={getBackgroundColor(time)} color={getColor(time)} />
        <S.TimeTabWrapper color={getColor(time)}>
          <S.TimeTab
            onClick={() => setTime("과거")}
            borderbottom={time === "과거" ? "#000" : "none"}
          >
            과거
          </S.TimeTab>
          <S.TimeTab
            onClick={() => setTime("현재")}
            borderbottom={time === "현재" ? "#fff" : "none"}
          >
            현재
          </S.TimeTab>
          <S.TimeTab
            onClick={() => setTime("미래")}
            borderbottom={time === "미래" ? "#fff" : "none"}
          >
            미래
          </S.TimeTab>
        </S.TimeTabWrapper>
        <Accordion />
        <Accordion /> <Accordion /> <Accordion /> <Accordion /> <Accordion />
        <S.MailboxWriterWrapper>
          <S.MailboxWriterIcon src={WriteIcon} alt="작성 아이콘" />
          <S.MailboxWriter>작성하기</S.MailboxWriter>
        </S.MailboxWriterWrapper>
        <S.MailboxShareWrapper>
          <S.MailboxShareIcon src={ShareIcon} alt="공유 아이콘" />
        </S.MailboxShareWrapper>
      </S.MailboxWrapper>
    </>
  );
}

export default Mailbox;
