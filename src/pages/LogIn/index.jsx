import styles from "./index.styles.module.css"
import Button from "../../components/Button";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import InputBox from "../../components/InputBox";

export default function LogIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <p className={styles.title}>로그인</p>
      <InputBox type={'text'} text={'아이디'} onInputChange={setId}/>
      <InputBox type={'password'} text={'비밀번호'} onInputChange={setPassword}/>
      <div style={{marginBottom: '50px'}}></div>
      <Button text={'로그인'}/>
      <div className={styles.link_container}>
        <p><Link to={'/signup'}>회원가입</Link></p>
        <p>비밀번호 찾기</p>
      </div>
    </div>
  )
}