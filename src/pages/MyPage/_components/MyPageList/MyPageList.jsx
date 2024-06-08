import React from "react";
import styles from "./MyPageList.styles.module.css";
import { Link } from "react-router-dom";
import icon_link from '../../../../assets/icon_link.png'

export default function MyPageList({title, myPageLists}) {
  return (
    <div>
      <h3>{title}</h3>
      <ul className={styles.list_container}>
        {myPageLists.map((list) => (
          <Link to={`/mypage${list.path}`}>
            <li className={styles.list}>
              <img className={styles.list_icon} src={list.icon} />
              <span>{list.name}</span>
              <img className={styles.icon_link} src={icon_link} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
