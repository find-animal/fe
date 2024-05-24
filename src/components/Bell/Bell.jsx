import React from "react";
import icon_bell from '../../assets/icon_bell.png'
import styles from './Bell.styles.module.css'

export default function Bell() {
  return <img className={styles.image} src={icon_bell} alt="bell" />;
}
