import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import ReduxProvider from "./provider/redux-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container">
        <Home />
      </div>
    ),
  },
  {
    path: "/user/:id",
    element: (
      <div className="container">
        <User />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider>
    <RouterProvider router={router} />
  </ReduxProvider>
);
