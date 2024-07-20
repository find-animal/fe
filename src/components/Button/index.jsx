import React from "react";
import styles from "./index.styles.module.css";

export default function Button({ text, type="button", onClick, disabled}) {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled} type={type}>
      {text}
    </button>
  );
}
