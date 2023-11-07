import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import Login from "./pages/auth/authLogin/Login";
import SignUp from "./pages/auth/authSignUp/AuthSignUp";
import About from "./pages/about/About";
import Past from "./pages/past/Past";
import Present from "./pages/present/Present";
import Future from "./pages/future/Future";
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
        element: <Login />
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
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
