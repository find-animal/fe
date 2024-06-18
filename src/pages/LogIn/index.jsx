import styles from "./index.styles.module.css";
import Button from "../../components/Button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../../components/InputBox";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function LogIn() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true);

  const handleLogIn = () => {
    try {
      axios
        .post("/api/v1/user/login", {
          id,
          password,
        })
        .then((res) => {
          const token = res.data.jwt;
          if (token) {
            localStorage.setItem("token", token);

            const decoded = jwtDecode(token);
            localStorage.setItem("userId", decoded.sub);

            navigate("/");
          }
        })
        .catch((err) => {
          setCheck(false);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>로그인</p>
      <InputBox type={"text"} text={"아이디"} onInputChange={setId} />
      <InputBox
        type={"password"}
        text={"비밀번호"}
        onInputChange={setPassword}
      />
      {!check && (
        <p className={styles.warning}>아이디 및 비밀번호를 확인해주세요.</p>
      )}
      <div style={{ marginBottom: "50px" }}></div>
      <Button text={"로그인"} onClick={handleLogIn} />
      <div className={styles.link_container}>
        <p>
          <Link to={"/signup"}>회원가입</Link>
        </p>
        <p>비밀번호 찾기</p>
      </div>
    </div>
  );
}
