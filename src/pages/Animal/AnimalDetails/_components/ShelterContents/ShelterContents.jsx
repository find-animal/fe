import React from "react";
import icon_shelter_clicked from "../../../../../assets/icon_shelter_clicked.png";
import styles from "./ShelterContents.styles.module.css";

export default function ShelterContents({careNm,careAddr, careTel}) {
  return (
    <div className={styles.container}>
      <img src={icon_shelter_clicked} />
      <div>
        <p className={styles.title}>보호소 정보</p>
        <div className={styles.contents}>
          <p><span>보호소 이름: </span>{careNm}</p>
          <p><span>보호소 주소: </span>{careAddr}</p>
          <p><span>관리자 번호: </span>{careTel}</p>
        </div>
      </div>
    </div>
  );
}
