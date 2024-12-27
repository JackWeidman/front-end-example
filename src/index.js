import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import HomePage from "./pages/HomePage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NasaFun from "./pages/NasaFun.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
  { path: "/nasa-fun", element: <NasaFun /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
