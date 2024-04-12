import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//import all pages
import Dashboard from "./pages/Dashboard.jsx";
import Explore from "./pages/Explore.jsx";
import MyGarden from "./pages/MyGarden.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SingleGoal from "./pages/SingleGoal.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "/mygarden",
        element: <MyGarden />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        //TODO: change this to "/goals/:goalId" when we have client queries set up
        path: "/singlegoal",
        element: <SingleGoal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
