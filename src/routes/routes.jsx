import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/home";
import { LoginPage } from "../page/login";
import { BarcodePage } from '../page/products'

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "produts",
    element: <BarcodePage />,
  },
]);
