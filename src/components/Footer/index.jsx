import React, { useState } from "react";
import styles from "./index.styles.module.css";
import { icons } from "./icons";
import { Link } from "react-router-dom";

export default function Footer() {
  const [clickedIcon, setClickedIcon] = useState(null);
  const handleIconClick = (index) => {
    setClickedIcon(index);
  };

  return (
    <div className={styles.footer}>
      {icons.map((icon, index) => (
        <Link to={icon.link} key={index}>
        <img
          key={index}
          src={clickedIcon === index ? icon.clicked_src : icon.src}
          alt={icon.alt}
          onClick={() => handleIconClick(index)}
        />
        </Link>
      ))}
    </div>
  );
}
