import React from "react";
import icon_shelter_clicked from "../../../../assets/icon_shelter_clicked.png";
import styles from "./ShelterContents.styles.module.css";
import icon_call from "../../../../assets/icon_call.png";

export default function ShelterContents({ shelterTel, shelterNm, shelterAddr, managerTel }) {
  const handleShelterCall = () => {
      window.location.href = `tel:${shelterTel}`;
  }
  return (
    <div className={styles.container}>
      <img src={icon_shelter_clicked} />
      <div>
        <div className={styles.title}>
          <p>보호소 정보</p>
          <img src={icon_call} onClick={handleShelterCall}/>
        </div>
        <div className={styles.contents}>
          <p>
            <span>보호소 이름: </span>
            {shelterNm}
          </p>
          <p>
            <span>보호소 주소: </span>
            {shelterAddr}
          </p>
          <p>
            <span>관리자 번호: </span>
            {managerTel}
          </p>
        </div>
      </div>
    </div>
  );
}
