import React, {useState} from "react";
import styles from "./index.styles.module.css";
import Button from "../../components/Button";
import GoBackIcon from "../../components/GoBackIcon";
import InputBox from "../../components/InputBox";
import axios from "axios";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GoBackIcon/>
        <p>회원가입</p>
      </div>
      <InputBox type={'text'} text={'아이디'} onInputChange={setId}/>
      <InputBox type={'password'} text={'비밀번호'} onInputChange={setPassword}/>
      <InputBox type={'password'} text={'비밀번호 확인'} onInputChange={setConfirmPassword}/>
      <Button text={'회원가입'}/>
    </div>
  )

}