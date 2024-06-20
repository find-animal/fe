import React from "react";
import styles from "./index.styles.module.css";

export default function ShelterInfo({ careNm, careAddr, careTel }) {
  return (
    <div className={styles.container}>
      <h4>보호소 이름 : {careNm ? careNm : '정보없음'}</h4>
      <p>보호소 주소 : {careAddr ? careAddr : '정보없음'}</p>
      <p>전화번호 : {careTel ? careTel : '정보없음'}</p>
    </div>
  );
}
