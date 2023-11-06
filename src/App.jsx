import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";
import { Outlet } from "react-router-dom";

const BackGroundColor = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
  max-width: 420px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Layout = () => {
  return (
    <>
      <BackGroundColor>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </BackGroundColor>
    </>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
