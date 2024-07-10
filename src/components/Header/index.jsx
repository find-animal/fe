import React from "react";
import styles from "./index.styles.module.css";

export default function Header({ title, color = "var(--color-black)", bgColor = "var(--color-white)" }) {
  return (
    <div
      className={styles.header}
      style={{ color: color, backgroundColor: bgColor }}
    >
      <p>{title}</p>
    </div>
  );
}
