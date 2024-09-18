import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu";
import Login from "../pages/Login/Login";
import Order from "../pages/Order/Order";
import SignUp from "../pages/SignUp/SignUp";
import Secrete from "../Shared/Secret/Secrete";
import PrivateRoute from "./PrivateRoute";
// import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secrete></Secrete>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
