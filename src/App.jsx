import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import GlobalStyle from "./style/global";

import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./utils/react-query";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <GlobalStyle />
          <RouterProvider router={routers} />
        </React.StrictMode>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
