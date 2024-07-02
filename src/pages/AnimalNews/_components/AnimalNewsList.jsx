import React from "react";
import styles from "./AnimalNewsList.styles.module.css";
import Divider from "../../../components/Divider";

export default function AnimalNewsList({ list }) {
  const { title, link, description, pubDate } = list;

  const titleText = title.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '"');
  const descriptionText = description.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '"');

  return (
    <div className={styles.container} onClick={() => window.open(link)}>
      <div className={styles.contents_container}>
        <p>{titleText}</p>
        <p>{descriptionText}</p>
        <span>{pubDate}</span>
      </div>
      <Divider />
    </div>
  );
}
