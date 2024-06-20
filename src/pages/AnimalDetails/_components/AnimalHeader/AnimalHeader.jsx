import React, { useState} from "react";
import styles from "./AnimalHeader.styles.module.css";
import Heart from "../../../../components/Heart";
import GoBackIcon from "../../../../components/GoBackIcon";

export default function AnimalHeader({ animalId, image }) {
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.icon}>
          <GoBackIcon />
        </div>
        <p className={styles.title}>상세정보</p>
        <Heart animalId={animalId}/>
        <div className={styles.img_box} onClick={handleOpenModal}>
          <img src={image} alt={'animal'}/>
        </div>
      </div>

      {isModal && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <img className={styles.modal_img} src={image} />
        </div>
      )}
    </>
  );
}
