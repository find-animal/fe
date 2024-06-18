import React, { useState} from "react";
import icon_heart_like from "../../../../assets/icon_heart_like.png";
import icon_heart from "../../../../assets/icon_heart.png";
import styles from "./AnimalHeader.styles.module.css";
import axios from "axios";

export default function AnimalHeader({ animalId, image }) {
  const [isModal, setIsModal] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [heartImage, setHeartImage] = useState(icon_heart);
  const userId = localStorage.getItem("userId");

  const handleLikeAnimal = async () => {
    if (!isLike) {
      setHeartImage(icon_heart_like);
      try {
        const res = await axios.post('/api/v1/user/animal',
        {userId, animalId} ,
        )
        console.log(res);
      } catch(err) {
        console.log(err);
      }

    } else {
      try {
        const res = await axios.delete('/api/v1/user/animal', {
          data: { userId, animalId },
        });
        console.log(res);
      } catch(err) {
        console.log(err);
      }
      setHeartImage(icon_heart);
    }
    setIsLike(!isLike);
  };

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <div className={styles.header}>
        <p>Back</p>
        <p className={styles.title}>상세정보</p>
        <img
          src={heartImage}
          onClick={handleLikeAnimal}
          alt={'heart'}
        />
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
