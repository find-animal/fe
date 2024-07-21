import React, { useState } from "react";
import styles from ".//ChangePwd.styles.module.css";
import Button from "../../../components/Button";
import InputBox from "../../../components/InputBox";
import BackIconHeader from "../../../components/BackIconHeader";
import axiosInstance from "../../../apis/axiosInstance";
import {toast} from "react-toastify";

export default function ChangePwd() {
  const id = localStorage.getItem("id");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const handleShow = (e) => {
    e.preventDefault();

    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChangePwd = async (e) => {
    e.preventDefault();

    if (!/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/.test(password)) {
      toast.error("비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.");
      return;
    } else if (password !== confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await axiosInstance.patch("/api/v1/user/password", {
        id,
        password,
      });
      toast.success("비밀번호가 성공적으로 변경되었습니다.");
    } catch (err) {
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
        <Button text={"확인"} type="submit" disabled={isDisabled} />
      </form>
    </div>
  );
}
