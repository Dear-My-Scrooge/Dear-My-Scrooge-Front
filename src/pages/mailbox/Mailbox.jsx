import React, { useState } from "react";
import * as S from "./style";
import Head from "../../components/head/Head";
import PastBg from "../../assets/images/background/mailboxPast.png";
import PresentBg from "../../assets/images/background/mailboxPresent.png";
import FutureBg from "../../assets/images/background/mailboxFuture.png";

function Mailbox() {
  const [time, setTime] = useState("과거");

  const handleTimeClick = tab => {
    setTime(tab);
  };

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
      <S.MailboxWrapper bgImg={setBackgroundImg(time)}>
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
      </S.MailboxWrapper>
    </>
  );
}

export default Mailbox;
