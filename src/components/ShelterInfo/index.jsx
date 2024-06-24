import React from "react";
import styles from "./index.styles.module.css";
import Divider from "../Divider";
import Heart from "../Heart";

export default function ShelterInfo({ list }) {
  const { id, careNm, careAddr, careTel } = list;

  return (
    <div className={styles.container}>
      <div className={styles.list_container}>
        <div className={styles.text_container}>
          <h4>보호소 이름 : {careNm ? careNm : '정보없음'}</h4>
          <p>보호소 주소 : {careAddr ? careAddr : '정보없음'}</p>
          <p>전화번호 : {careTel ? careTel : '정보없음'}</p>
        </div>
        <Heart id={id} type={'shelter'} />
      </div>
      <Divider/>
    </div>
  );
}
