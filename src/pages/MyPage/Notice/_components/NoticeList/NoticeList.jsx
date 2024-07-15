import React from "react";
import styles from "./NoticeList.styles.module.css";

export default function NoticeList({ title, contents }) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{contents}</p>
    </div>
  );
}
