import React, { useEffect } from "react";
import styles from "./index.styles.module.css";

export default function Toast({ toast, setToast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast, setToast]);

  return (
    <div className={styles.container}>
      <p>{toast}</p>
    </div>
  );
}
