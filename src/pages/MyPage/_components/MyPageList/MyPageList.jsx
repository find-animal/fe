import React from "react";
import styles from "./MyPageList.styles.module.css";
import { Link } from "react-router-dom";

export default function MyPageList({ path, name }) {
  return (
    <div className={styles.container}>
      <Link to={`/mypage${path}`}>
        <li className={styles.list}>
          <span>{name}</span>
        </li>
      </Link>
    </div>
  );
}
