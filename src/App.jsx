import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={routers} />
      </React.StrictMode>
    </>
  );
}

export default App;
