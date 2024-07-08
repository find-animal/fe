import styles from "./index.styles.module.css";
import Button from "../../components/Button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../../components/InputBox";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Toast from "../../components/Toast";

export default function LogIn() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

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
            localStorage.setItem("id", decoded.id);

            setToast("로그인 성공했습니다.");
            setTimeout(() => navigate("/"), 1000);
          }
        })
        .catch((err) => {
          setError("아이디 및 비밀번호를 확인해주세요.");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const isButtonDisabled = !(id && password);

  return (
    <div className={styles.container}>
      <p className={styles.title}>로그인</p>
      <InputBox type={"text"} text={"아이디"} onInputChange={setId} />
      <InputBox
        type={"password"}
        text={"비밀번호"}
        onInputChange={setPassword}
      />
      <p className={styles.warning}>{error}</p>
      <Button
        text={"로그인"}
        onClick={handleLogIn}
        disabled={isButtonDisabled}
      />
      <div className={styles.link_container}>
        <p>
          <Link to={"/signup"}>회원가입</Link>
        </p>
        <p>
          <Link to={"/find-id"}>아이디 찾기</Link>
        </p>
        <p>
          <Link to={"/find-password"}>비밀번호 찾기</Link>
        </p>
      </div>
      {toast && <Toast toast={toast} setToast={setToast} />}
    </div>
  );
}
