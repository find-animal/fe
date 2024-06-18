import React from "react";
import styles from "./AnimalLikeList.styles.module.css";
import Heart from "../../../components/Heart";

export default function AnimalLikeList({ animal }) {
  const { popFile, animalBreed, specialMark } = animal;
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <img src={popFile} alt={"animal"}/>
      </div>
      <div className={styles.text_container}>
        <h4>{animalBreed}</h4>
        <p>{specialMark}</p>
      </div>
      <div className={styles.img_heart}>
        <Heart/>
      </div>
    </div>
  );
}
