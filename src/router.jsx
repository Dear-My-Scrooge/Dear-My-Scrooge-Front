import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import AuthLogin from "./pages/auth/authLogin/AuthLogin";
import SignUp from "./pages/auth/authSignUp/AuthSignUp";
import About from "./pages/about/About";
import Past from "./pages/past/Past";
import Present from "./pages/present/Present";
import Future from "./pages/future/Future";
import Nickname from "./pages/nickname/Nickname";
import Mailbox from "./pages/mailbox/Mailbox";
import NotFoundError from "./pages/error/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "login",
        element: <AuthLogin />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "past",
        element: <Past />
      },
      {
        path: "present",
        element: <Present />
      },
      {
        path: "future",
        element: <Future />
      },
      {
        path: "nickname",
        element: <Nickname />
      },
      {
        path: "mailbox",
        element: <Mailbox />
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
