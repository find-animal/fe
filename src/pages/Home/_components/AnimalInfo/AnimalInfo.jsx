import React from "react";
import styles from "./AnimalInfo.styles.module.css";
import { Link } from "react-router-dom";

export default function AnimalInfo({
  id,
  img,
  animalBreed,
  age,
  sex,
  uploadDate,
  todayDate,
}) {
  const uploadedDate = Math.floor(
    (todayDate - new Date(uploadDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <Link to={`/animals/${id}`} className={styles.link}>
      <div className={styles.list}>
        <img src={img} />
        <div className={styles.dog_info}>
          <p>종: {animalBreed}</p>
          <p>생년: {age}</p>
          <p>성별: {sex}</p>
          <p className={styles.uploadedDate}>{uploadedDate} days ago</p>
        </div>
      </div>
    </Link>
  );
}
