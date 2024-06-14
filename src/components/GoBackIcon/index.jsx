import React from "react";
import icon_back_link from "../../assets/icon_back_link.png";
import styles from "./index.styles.module.css";
import { useNavigate } from "react-router-dom";

export default function GoBackIcon() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <img
        className={styles.image}
        src={icon_back_link}
        onClick={handleGoBack}
        alt={"back"}
      />
    </>
  );
}
