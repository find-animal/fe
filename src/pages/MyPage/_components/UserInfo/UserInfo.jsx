import React from "react";
import styles from "./UserInfo.styles.module.css";

export default function UserInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.nickname}>Nickname</p>
      <p className={styles.id}>ID</p>
    </div>
  );
}
