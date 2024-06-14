import React from "react";
import styles from "./index.styles.module.css";
import img_dog from "../../assets/img_dog.png";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <img src={img_dog} alt={'dog'}/>
      <h2>404-Page Not Found</h2>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
    </div>
  );
}
