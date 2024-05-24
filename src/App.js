import React from "react";
import styles from "./App.styles.module.css";
import MyPageRoutes from "./routes/MyPageRoutes";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className={styles.App}>
      <MyPage />
    </div>
  );
}

export default App;
