import React from "react";
import styles from "./index.styles.module.css";

export default function Button({ text, onClick}) {
  return (
    <button className={styles.container} onClick={onClick}>
      {text}
    </button>
  );
}
