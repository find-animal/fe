import React from "react";
import styles from "./DogInfo.styles.module.css";

export default function DogInfo({ img, animalBreed, age, sex }) {
  return (
    <div className={styles.list}>
      <img src={img} />
      <div className={styles.dog_info}>
        <p>종: {animalBreed}</p>
        <p>생년: {age}</p>
        <p>성별: {sex}</p>
        <p>중성화 여부: </p>
      </div>
    </div>
  );
}
