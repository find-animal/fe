import React from "react";
import styles from "./AnimalNewsList.styles.module.css";
import Divider from "../../../components/Divider";

export default function AnimalNewsList({ list }) {
  const { title, image, link, description, pubDate } = list;

  const titleText = title.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  const descriptionText = description.replace(/<b>/g, "").replace(/<\/b>/g, "").replace(/&quot;/g, '"').replace(/&amp;/g, '&');

  return (
    <div className={styles.container} onClick={() => window.open(link)}>
      {image && <div className={styles.image_container}><img src={image} alt="image"/></div>}
      <div className={styles.contents_container}>
        <p>{titleText}</p>
        <p>{descriptionText}</p>
        <span>{pubDate}</span>
      </div>
      <Divider />
    </div>
  );
}
