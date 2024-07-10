import React from "react";
import styles from "./index.styles.module.css";

export default function Button({ text, onClick, disabled}) {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
