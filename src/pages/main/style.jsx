import { styled, keyframes } from "styled-components";
import MainBackGroundImg from "../../assets/images/background/main.png";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${MainBackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  color: #fff;
  margin-top: 97px;
  font-size: 45px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.5px;
`;

export const SubTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  letter-spacing: 1px;
`;

// 과거
export const Past = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 352px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #f0d890;
`;

export const PastImg = styled.img`
  width: 135px;
  height: 135px;
  margin-left: 20px;
  margin-right: 94px;
`;

export const PastText = styled.div`
  color: #000321;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
`;

// 현재
export const Present = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 352px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #810006;
`;

export const PresentImg = styled.img`
  width: 129px;
  height: 129px;
`;

export const PresentText = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
  margin-left: 45px;
  margin-right: 80px;
`;

// 미래
export const Future = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 352px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #083a00;
`;

export const FutureImg = styled.img`
  width: 104px;
  height: 104px;
  margin-left: 32px;
  margin-right: 102px;
`;

export const FutureText = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
`;

// 페이지 만들기 버튼
export const CreatePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 204px;
  height: 38px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.65);
  color: #010422;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.3px;
  margin-top: 27px;
  margin-bottom: 109px;
`;

// 촛불 - about 페이지 버튼
export const Candle = styled.img`
  display: flex;
  width: 72px;
  height: 99px;
  margin-top: 6px;
`;

export const CandleWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 72px;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInAnimation} 1s ease-in-out;
`;
