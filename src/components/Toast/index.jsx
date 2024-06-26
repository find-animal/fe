import React from "react";
import styles from "./index.styles.module.css";

export default function Toast({toast}) {
  return (
    <div className={styles.container}>
      <p>{toast === "add" ? "관심목록에 추가되었습니다." : "관심목록에서 삭제되었습니다."}</p>
    </div>
  );
}