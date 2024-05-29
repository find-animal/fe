import React from "react";
import styles from "./DogInfo.styles.module.css";

export default function DogInfo({ img, animalBreed, age }) {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = no_image;
  };

  return (
    <div className={styles.list}>
      <img src={img} onError={handleImageError} />
      <div className={styles.dog_info}>
        <p>종: {animalBreed}</p>
        <p>생년: {age}</p>
        <p>성별: </p>
        <p>중성화 여부: </p>
      </div>
    </div>
  );
}
