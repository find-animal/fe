import React, { useEffect, useState } from "react";
import styles from ".//ChangePwd.styles.module.css";
import Button from "../../../components/Button";
import Toast from "../../../components/Toast";
import InputBox from "../../../components/InputBox";
import BackIconHeader from "../../../components/BackIconHeader";
import axiosInstance from "../../../apis/axiosInstance";

export default function ChangePwd() {
  const id = localStorage.getItem("id");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");

  const [toast, setToast] = useState("");
  const [error, setError] = useState("");

  const getEmail = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/user/email", {
        params: { id },
      });
      setEmail(res.data.email);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmail();
  }, []);

  const handleShow = (e) => {
    e.preventDefault();

    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChangePwd = async (e) => {
    e.preventDefault();

    if (!/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/.test(password)) {
      setError("비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.");
      return;
    } else if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await axiosInstance.patch("/api/v1/user/password", {
        id,
        password,
        email,
      });
      setToast("비밀번호가 성공적으로 변경되었습니다.");
    } catch (err) {
      if (err.code === 9001) {
        setError("이메일 형식을 맞춰주세요.");
      }
      console.log(err);
    }
  };

  const isDisabled = !password;

  return (
    <div className={styles.container}>
      <BackIconHeader text={"비밀번호 변경"} />
      <form className={styles.contents_container} onSubmit={handleChangePwd}>
        <div className={styles.input_container}>
          <InputBox
            type={passwordType}
            text="변경할 비밀번호"
            onInputChange={setPassword}
          />
          <button className={styles.button} onClick={handleShow}>
            보기
          </button>
        </div>
        <div className={styles.input_container}>
          <InputBox
            type={passwordType}
            text="비밀번호 확인"
            onInputChange={setConfirmPassword}
          />
          <button className={styles.button} onClick={handleShow}>
            보기
          </button>
        </div>
        <p className={styles.warning}>{error}</p>
        <Button text={"확인"} type="submit" disabled={isDisabled} />
      </form>
      {toast && <Toast toast={toast} setToast={setToast} />}
    </div>
  );
}
