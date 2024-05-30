import React from "react";
import icon_double_quote from "../../../../../assets/icon_double_quote.png";
import styles from './AnimalContents.styles.module.css'

export default function AnimalContents({animalBreed, age, color, sex, weight, happenPlace, neuterYn}) {
  return (
    <div className={styles.container}>
      <img src={icon_double_quote} />
      <div>
        <p className={styles.title}>유기동물 정보</p>
        <div className={styles.contents}>
          <p><span>견종: </span>{animalBreed}</p>
          <p><span>년생: </span>{age.substring(0,4)}</p>
          <p><span>털색: </span>{color}</p>
          <p><span>성별: </span>{sex}</p>
          <p><span>몸무게: </span>{weight}</p>
          <p><span>발견된 장소: </span>{happenPlace}</p>
          <p><span>중성화 여부: </span>{neuterYn}</p>
        </div>
      </div>
    </div>
  );
}
