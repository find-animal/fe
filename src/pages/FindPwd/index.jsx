import React, { useState } from "react";
import styles from "./index.styles.module.css";
import BackIconHeader from "../../components/BackIconHeader";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function FindPwd() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("");
  const [emailCode, setEmailCode] = useState("");

  const [isIdVerified, setIsIdVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isEmailCodeVerified, setIsEmailCodeVerified] = useState(false);

  const handleIdCheck = async (e) => {
    e.preventDefault();

    if (id.length < 4) {
      toast.error("아이디는 최소 4글자 이상이어야 합니다.");
    } else {
      try {
        await axios.get("/api/v1/user/checkId", { params: { id } });
        toast.error("존재하지 않는 아이디입니다.");
        setIsIdVerified(false);
      } catch (err) {
        if (err.response.data.code === 2001) {
          toast.success("아이디가 확인되었습니다.");
          setIsIdVerified(true);
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
      toast.success("인증번호를 전송했습니다.");
      setIsEmailVerified(true);
    } catch (err) {
      toast.error("이메일 형식을 확인해주세요.");
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
      toast.success("이메일 인증 완료되었습니다.");
      setIsEmailCodeVerified(true);
    } catch (err) {
      toast.error("인증코드를 확인해주세요.");
      setIsEmailCodeVerified(false);
      console.log(err);
    }
  };

  const handleShow = (e) => {
    e.preventDefault();

    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleFindPwd = async (e) => {
    e.preventDefault();

    if (!/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/.test(password)) {
      toast.error(
        "비밀번호는 8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.",
      );
      return;
    } else if (password !== confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await axios.patch("/api/v1/user/anonymous/password", {
        id,
        password,
        email,
        code: emailCode,
      });
      toast.success("비밀번호가 성공적으로 변경되었습니다.");
      navigate("/login");
    } catch (err) {
      if (err.code === 2002) {
        toast.error("존재하지 않는 아이디입니다.");
      }
      console.log(err);
    }
  };

  const isButtonDisabled = !(
    isIdVerified &&
    isEmailVerified &&
    isEmailCodeVerified
  );

  return (
    <div className={styles.container}>
      <BackIconHeader text={"비밀번호 찾기"} />
      <form className={styles.contents_container} onSubmit={handleFindPwd}>
        <div className={styles.input_container}>
          <InputBox type="text" text="아이디" onInputChange={setId} />
          <button className={styles.button} onClick={handleIdCheck}>
            확인
          </button>
        </div>
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
        <Button text={"확인"} type="submit" disabled={isButtonDisabled} />
      </form>
    </div>
  );
}
