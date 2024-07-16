import React, { useState } from "react";
import styles from "./SignOut.styles.module.css";
import axiosInstance from "../../../../apis/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignOut({ setIsModal }) {
  const id = localStorage.getItem("id");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await axiosInstance.delete("/api/v1/user/signout", {
        data: { id, password },
      });
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      setIsModal(false);
      toast.success("탈퇴되었습니다.");
      navigate("/login");
    } catch (err) {
      if (err.response.data.code === 2003) {
        toast.error(err.response.data.message);
      }
      console.log(err);
    }
  };

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal_container}>
        <h4>
          탈퇴 시 회원님의 관심목록 데이터가 모두 삭제됩니다. 탈퇴하시려면
          비밀번호를 입력해주세요.
        </h4>
        <input
          placeholder={"비밀번호 입력"}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.button_container}>
          <button onClick={handleSignOut}>탈퇴</button>
          <button onClick={() => setIsModal(false)}>취소</button>
        </div>
      </div>
    </div>
  );
}
