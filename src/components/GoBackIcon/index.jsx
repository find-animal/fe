import React from 'react'
import icon_back_link from "../../assets/icon_back_link.png";
import styles from './index.styles.module.css'

export default function GoBackIcon() {
    const handleGoBack = () => {
        window.history.back();
    };
  
    return (
    <>
      <img className={styles.image} src={icon_back_link} onClick={handleGoBack} alt={'back'}/>
    </>
  )
}
