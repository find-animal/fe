import React, { useState } from "react";
import styles from "./index.styles.module.css";
import Button from "../../components/Button";
import GoBackIcon from "../../components/GoBackIcon";
import InputBox from "../../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";

export default function SignUp() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [toast, setToast] = useState("");
  const [error, setError] = useState("");

  const handleIdCheck = async (e) => {
    e.preventDefault();

    if (id.length < 4) {
      setError("아이디는 최소 4글자 이상이어야 합니다.");
    } else {
      try {
        await axios.get("/api/v1/user/checkId", { params: { id } });
        setError("");
        setToast("사용가능한 아이디 입니다.");
      } catch (err) {
        if (err.response.data.code === 2001) {
          setError("이미 사용중인 아이디 입니다.");
        } else {
          console.log(err);
        }
      }
    }
  };

  const handleEmailVerification = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/v1/send-mail/email", { email });
      setToast("인증번호를 전송했습니다.");
      setError("");
      setIsEmailVerified(true);
    } catch (err) {
      setError("이메일 형식을 확인해주세요.");
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
    } catch (err) {
      setError("인증코드를 확인해주세요.");
      console.log(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/.test(password)) {
      setError("비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.");
      return;
    } else if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    } else if (!isEmailVerified) {
      setError("이메일 인증을 완료해주세요.");
      return;
    }

    try {
      await axios.post("/api/v1/user/signup", {
        id,
        password,
        email,
      });
      setToast("회원가입 성공")
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleShow = (e) => {
    e.preventDefault();

    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GoBackIcon />
        <p>회원가입</p>
      </div>
      <form onSubmit={handleSignUp}>
        <div className={styles.input_container}>
          <InputBox type="text" text="아이디" onInputChange={setId} />
          <button className={styles.button} onClick={handleIdCheck}>
            중복확인
          </button>
        </div>
        <div className={styles.input_container}>
          <InputBox
            type="email"
            text="이메일"
            onInputChange={setEmail}
            value={email}
            placeholder="이메일을 입력하세요"
          />
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
        <div className={styles.input_container}>
          <InputBox
            type={passwordType}
            text="비밀번호"
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
        <Button text="회원가입" type="submit" />
      </form>
      {toast && <Toast toast={toast} setToast={setToast} />}
    </div>
  );
}
