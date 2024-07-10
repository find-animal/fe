import React from 'react';
import styles from './index.styles.module.css'
import GoBackIcon from "../GoBackIcon";

export default function BackIconHeader({text}) {
  return (
    <div className={styles.header}>
      <GoBackIcon />
      <p>{text}</p>
    </div>
  );
}