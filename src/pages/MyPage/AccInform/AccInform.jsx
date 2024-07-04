import React, {useEffect, useState} from 'react'
import styles from './AccInform.styles.module.css'
import BackIconHeader from "../../../components/BackIconHeader";
import axios from "axios";

export default function AccInform() {
  const id = localStorage.getItem('id');
  const [email, setEmail] = useState('');

  const getEmail = async () => {
    try {
      const res = await axios.get("/api/v1/user/email", {params: {id}});
      setEmail(res.data.email);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=> {
    getEmail();
  }, [])
  return (
    <div>
      <BackIconHeader text={'회원 정보'}/>
      <div className={styles.contents}>
        <h3>아이디</h3>
        <p>{id}</p>
        <h3>이메일</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}
