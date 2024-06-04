import React from "react";
import styles from "./index.styles.module.css";

export default function Header({ title, img, color, bgColor }) {
  return (
    <div
      className={styles.header}
      style={{ color: color, backgroundColor: bgColor }}
    >
      <p>{title}</p>
      <img className={styles.image} src={img} alt="bell" />
    </div>
  );
}
