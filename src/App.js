import React from "react";
import Routers from "./routes/Routers";
import { RecoilRoot } from "recoil";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Routers />
        <ToastContainer
          transition={Zoom}
          hideProgressBar={true}
          limit={1}
        />
      </RecoilRoot>
    </div>
  );
}

export default App;
