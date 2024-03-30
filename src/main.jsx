import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Netflix from "./Netflix/index";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Netflix/page/LoginPage";
import HomePage from "./Netflix/page/HomePage";
import Detail from "./Netflix/page/Detail";
import RegisterPage from "./Netflix/page/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Netflix />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
