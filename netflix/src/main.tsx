// import React from "react";
// import ReactDOM from "react-dom/client";
// import Home from "./Netflix/(page)/Home/index.tsx";
// import Login from "./Netflix/(page)/Login/index.tsx";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Netflix from "./Netflix/index.tsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Netflix />,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Test from "./Test";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
