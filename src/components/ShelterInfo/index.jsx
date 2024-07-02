import React from "react";
import styles from "./index.styles.module.css";
import Divider from "../Divider";
import Heart from "../Heart";
import { Link } from "react-router-dom";

export default function ShelterInfo({
  list,
  setUpdate,
  isLiked,
  isHeart = false,
}) {
  const { id, careNm, careAddr, careTel } = list;

  return (
    <div className={styles.container}>
      <div className={styles.list_container}>
        <Link to={`/shelter/${id}`}>
          <div className={styles.text_container}>
            <h4>보호소명 : {careNm ? careNm : "정보없음"}</h4>
            <p>
              <span>주소 : </span>
              {careAddr ? careAddr : "정보없음"}
            </p>
            <p>
              <span>전화번호 : </span>
              {careTel ? careTel : "정보없음"}
            </p>
          </div>
        </Link>
        {isHeart && (
          <Heart
            id={id}
            type={"shelter"}
            isLiked={isLiked}
            setUpdate={setUpdate}
          />
        )}
      </div>
      <Divider />
    </div>
  );
}
