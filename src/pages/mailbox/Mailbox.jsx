import React, { useState } from "react";
import * as S from "./style";
import Head from "../../components/head/Head";

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

  return (
    <>
      <S.MailboxWrapper>
        <Head bgcolor={getBackgroundColor(time)} color={getColor(time)} />
      </S.MailboxWrapper>
    </>
  );
}

export default Mailbox;
