import React, { useState } from "react";
import icon_heart from "../../../../assets/icon_heart.png";
import styles from "./AnimalHeader.styles.module.css";

export default function AnimalHeader({ image }) {
  const [ismodal, setIsmodal] = useState(false);

  const handleOpenModal = () => {
    setIsmodal(true);
  };

  const handleCloseModal = () => {
    setIsmodal(false);
  }

  return (
    <>
      <div className={styles.header}>
        <p>Back</p>
        <p className={styles.title}>상세정보</p>
        <img className={styles.heart} src={icon_heart} />
        <div className={styles.img_box} onClick={handleOpenModal}>
          <img src={image} />
        </div>
      </div>

      {ismodal && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <img className={styles.modal_img} src={image} />
        </div>
      )}
    </>
  );
}
