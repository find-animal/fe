import React from "react";
import styles from "./index.styles.module.css";

export default function Header({ title, color, bgColor }) {
  return (
    <div
      className={styles.header}
      style={{ color: color, backgroundColor: bgColor }}
    >
      <p>{title}</p>
    </div>
  );
}
