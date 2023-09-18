import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import GlobalStyle from "./style/global";

function App() {
  return (
    <>
      <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={routers} />
      </React.StrictMode>
    </>
  );
}

export default App;
