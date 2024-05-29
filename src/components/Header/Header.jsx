import React from "react";
import styles from "./Header.styles.module.css";

export default function Header({ title, img}) {
  return (
    <div className={styles.title}>
      <p>{title}</p>
      <img
      className={styles.image}
      src={img}
      alt="bell"
    />
    </div>
  );
}
