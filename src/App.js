import React from "react";
import styles from "./App.styles.module.css";
import Routers from "./routes/Routers";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className={styles.App}>
      <RecoilRoot>
        <Routers />
      </RecoilRoot>

    </div>
  );
}

export default App;
