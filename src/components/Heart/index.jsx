import styles from './index.styles.module.css'
import icon_heart_like from "../../assets/icon_heart_like.png";
import React from "react";

export default function Heart() {
  return (
    <>
      <img className={'img'} src={icon_heart_like} alt={"heart"}/>
    </>
  )
}