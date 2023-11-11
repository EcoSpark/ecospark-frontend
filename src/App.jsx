import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routers } from "./routes/routes";
import { queryClient } from "./utils/react-query";

import "react-toastify/dist/ReactToastify.css";
import "./style/main.sass";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <RouterProvider router={routers} />
        </React.StrictMode>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
