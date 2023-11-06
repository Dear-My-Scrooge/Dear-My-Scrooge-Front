import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import Login from "./pages/auth/Login";
import About from "./pages/about/About";
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
        path: "about",
        element: <About />
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
