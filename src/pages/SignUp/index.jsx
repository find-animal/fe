import React from "react";
import styles from "./index.styles.module.css";
import icon_x from '../../assets/icon_x.png'
import Button from "../../components/Button";
import InputBox from "../../components/InputBox/InputBox";

export default function SignUp() {
   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <img src={icon_x} alt="x"/>
            <p>회원가입</p>
         </div>
         <InputBox type={'text'} text={'아이디'}/>
         <InputBox type={'password'} text={'비밀번호'}/>
         <InputBox type={'password'} text={'비밀번호 확인'}/>
         <p>비밀번호가 일치하지 않아요</p>
         <Button text={'회원가입'}/>
      </div>
   )

}