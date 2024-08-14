import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Login />,
  },
]);
