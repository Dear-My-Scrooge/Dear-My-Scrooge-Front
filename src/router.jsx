import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import AuthLogin from "./pages/auth/authLogin/AuthLogin";
import AuthSignUp from "./pages/auth/authSignUp/AuthSignUp";
import About from "./pages/about/About";
import Past from "./pages/past/Past";
import Present from "./pages/present/Present";
import Future from "./pages/future/Future";
import Nickname from "./pages/nickname/Nickname";
import Mailbox from "./pages/mailbox/Mailbox";
import NotFoundError from "./pages/error/NotFound";
import Tree from "./pages/tree/Tree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Tree />
      },
      {
        path: "login",
        element: <AuthLogin />
      },
      {
        path: "signup",
        element: <AuthSignUp />
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
      },
      {
        path: "tree",
        element: <Tree />
      },
      {
        path: ":user_id",
        element: <Main />
      },
      {
        path: "mailbox/:user_id",
        element: <Mailbox />
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
