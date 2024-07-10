import React from "react";
import styles from "./AnimalLikeList.styles.module.css";
import Heart from "../../../../components/Heart";
import { Link } from "react-router-dom";

export default function AnimalLikeList({ list, setUpdate }) {
  const { id, popFile, animalBreed, specialMark } = list;
  return (
    <div className={styles.container}>
      <Link to={`/animals/${id}`}>
        <div className={styles.img_box}>
          <img src={popFile} alt={"animal"} />
        </div>
        <div className={styles.text_container}>
          <h4>{animalBreed}</h4>
          <p>{specialMark}</p>
        </div>
      </Link>
      <Heart id={id} type={"animal"} setUpdate={setUpdate} isLiked={true}/>
    </div>
  );
}
