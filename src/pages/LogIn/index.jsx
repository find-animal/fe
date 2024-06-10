import react from "react"
import styles from "./index.styles.module.css"
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button";
import React from "react";

export default function LogIn() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>로그인</p>
      <InputBox type={'text'} text={'아이디'}/>
      <InputBox type={'password'} text={'비밀번호'}/>
      <p className={styles.warning}>비밀번호가 일치하지 않아요</p>
      <Button text={'로그인'}/>
    </div>
  )
}