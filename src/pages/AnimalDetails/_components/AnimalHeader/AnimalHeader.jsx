import React from "react";
import icon_heart from "../../../../assets/icon_heart.png";
import styles from "./AnimalHeader.styles.module.css";

export default function AnimalHeader({ image }) {
  return (
    <div className={styles.header}>
      <p>Back</p>
      <p className={styles.title}>상세정보</p>
      <img className={styles.heart} src={icon_heart} />
      <div className={styles.img_box}>
        <img src={image} />
      </div>
    </div>
  );
}
