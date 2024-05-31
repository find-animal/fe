import React from 'react'
import styles from './index.styles.module.css'
import Header from '../../components/Header'
import icon_bell_accent from "../../assets/icon_bell_accent.png";


export default function Shelters() {
  return (
    <div>
      <Header title={"관심 보호소"} img={icon_bell_accent} />
    </div>
  )
}
