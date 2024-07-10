import React, { useState } from "react";
import styles from "./FindId.styles.module.css";
import BackIconHeader from "../../components/BackIconHeader";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FindId() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");

  const [toast, setToast] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isEmailCodeVerified, setIsEmailCodeVerified] = useState(false);

  const handleEmailVerification = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/v1/send-mail/email", { email });
      setToast("인증번호를 전송했습니다.");
      setError("");
      setIsEmailVerified(true);
    } catch (err) {
      setError("이메일 형식을 확인해주세요.");
      setIsEmailVerified(false);
      console.log(err);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    try {
      await axios.get("/api/v1/send-mail/checkCode", {
        params: {
          email,
          code: emailCode,
        },
      });
      setError("");
      setToast("이메일 인증 완료되었습니다.");
      setIsEmailCodeVerified(true);
    } catch (err) {
      setError("인증코드를 확인해주세요.");
      setIsEmailCodeVerified(false);
      console.log(err);
    }
  };

  const handleFindId = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("/api/v1/user/id", {
        params: {email, code: emailCode},
      });
      setId(res.data.id);
    } catch (err) {
      console.log(error);
    }
  };

  const isButtonDisabled = !(isEmailVerified && isEmailCodeVerified);

  return (
    <div className={styles.container}>
      <BackIconHeader text={"아이디 찾기"} />
      <form className={styles.contents_container} onSubmit={handleFindId}>
        <div className={styles.input_container}>
          <InputBox type="email" text="이메일" onInputChange={setEmail} />
          <button className={styles.button} onClick={handleEmailVerification}>
            인증
          </button>
        </div>
        {isEmailVerified && (
          <div className={styles.input_container}>
            <InputBox
              type="text"
              text="인증번호 입력"
              onInputChange={setEmailCode}
            />
            <button className={styles.button} onClick={handleVerifyCode}>
              확인
            </button>
          </div>
        )}
        <p className={styles.warning}>{error}</p>
        <Button text="확인" type="submit" disabled={isButtonDisabled} />
      </form>
      {toast && <Toast toast={toast} setToast={setToast} bottom={"5%"} />}
      {id && <p className={styles.id}>회원님의 아이디는 {id}입니다.</p>}
    </div>
  );
}
