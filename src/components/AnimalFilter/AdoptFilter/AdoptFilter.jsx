import React, { useState } from "react";
import styles from "./AdoptFilter.styles.module.css";

export default function AdoptFilter({ onAdoptFilterChange }) {
  const handleOptionClick = (e) => {
    const checked = e.target.checked;
    onAdoptFilterChange(checked);
  };
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="adoptCheck">
        입양가능
      </label>
      <input id="adoptCheck" type="checkbox" onClick={handleOptionClick} />
    </div>
  );
}
