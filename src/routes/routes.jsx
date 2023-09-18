import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/home";
import { LoginPage } from "../page/login";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
