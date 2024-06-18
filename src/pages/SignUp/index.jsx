import React, { useState } from "react";
import styles from "./index.styles.module.css";
import Button from "../../components/Button";
import GoBackIcon from "../../components/GoBackIcon";
import InputBox from "../../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (id.length < 4) {
      setError("아이디는 최소 4글자 이상이어야 합니다.");
      return;
    } else if (
      !/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/.test(password)
    ) {
      setError("비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.");
      return;
    } else if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      axios
        .post("/api/v1/user/signup", {
          id,
          password,
        })
        .then(() => {
          alert("회원가입 성공");
          navigate("/login");
        })
        .catch((err) => {
          if (err.response && err.response.code === 2001) {
            setError("이미 사용 중인 아이디입니다.");
          } else {
            console.log(err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GoBackIcon />
        <p>회원가입</p>
      </div>
      <form onSubmit={handleSignUp}>
        <InputBox type={"text"} text={"아이디"} onInputChange={setId} />
        <InputBox
          type={"password"}
          text={"비밀번호"}
          onInputChange={setPassword}
        />
        <InputBox
          type={"password"}
          text={"비밀번호 확인"}
          onInputChange={setConfirmPassword}
        />
        <p className={styles.warning}>{error}</p>
        <Button text={"회원가입"} type="submit" />
      </form>
    </div>
  );
}
