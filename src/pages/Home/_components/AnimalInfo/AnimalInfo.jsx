import React from "react";
import styles from "./AnimalInfo.styles.module.css";
import { Link } from "react-router-dom";

export default function AnimalInfo({ list }) {
  const { id, popFile, animalBreed, age, sex, noticeSdt } = list;
  const todayDate = new Date();
  const uploadedDate = Math.floor(
    (todayDate - new Date(noticeSdt)) / (1000 * 60 * 60 * 24),
  );
  const ageCalc = age.substring(0, 4);

  return (
    <Link to={`/animals/${id}`}>
      <div className={styles.list}>
        <div className={styles.img_box}>
          <img src={popFile} alt={"animal"} />
        </div>
        <div className={styles.dog_info}>
          <p>종: {animalBreed}</p>
          <p>생년: {ageCalc}</p>
          <p>성별: {sex}</p>
          <p className={styles.uploadedDate}>{uploadedDate} days ago</p>
        </div>
      </div>
    </Link>
  );
}
