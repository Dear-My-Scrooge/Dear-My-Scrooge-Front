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

  return (
    <>
      <S.MailboxWrapper>
        <Head bgcolor={getBackgroundColor(time)} color={"#000"} />
      </S.MailboxWrapper>
    </>
  );
}

export default Mailbox;
