import React from "react";
import styles from "./MyPageList.styles.module.css";
import { Link } from "react-router-dom";
import icon_link from "../../../../assets/icon_link.png";

export default function MyPageList({ myPageLists }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list_container}>
        {myPageLists.map((list) => (
          <Link to={`/mypage${list.path}`}>
            <li className={styles.list}>
              <img
                className={styles.list_icon}
                src={list.icon}
                alt={"아이콘"}
              />
              <span style={{ color: list.color }}>{list.name}</span>
              <img className={styles.icon_link} src={icon_link} alt={"링크"} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
