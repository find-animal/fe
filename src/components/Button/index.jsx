import React from "react";
import styles from "./index.styles.module.css";

export default function Button({ text, onClick, width }) {
  return (
    <button className={styles.container} onClick={onClick} style={{width: {width}}}>
      {text}
    </button>
  );
}
