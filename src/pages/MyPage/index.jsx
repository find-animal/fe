import React, { useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import icon_account from "../../assets/icon_account.png";
import icon_password from "../../assets/icon_password.png";
import icon_bell from "../../assets/icon_bell.png";
import icon_cancel from "../../assets/icon_cancel.png";
import icon_notice from "../../assets/icon_notice.png";
import MyPageList from "./_components/MyPageList/MyPageList";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";

export default function MyPage() {
  const id = localStorage.getItem("id");
  const myPageLists = [
    { icon: icon_account, name: "회원 정보", path: "/account-information" },
    { icon: icon_password, name: "비밀번호 변경", path: "/change-password" },
    { icon: icon_bell, name: "공지사항", path: "/notice" },
    { icon: icon_notice, name: "이용약관", path: "/term-of-service" },
    { icon: icon_cancel, name: "회원탈퇴", path: "/account-deletion", color: "red"},
  ];

  const navigate = useNavigate();
  const [toast, setToast] = useState("");

  const handleClickLogOut = () => {
    localStorage.clear();
    setToast("로그아웃 되었습니다.");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Header
          title={"마이페이지"}
          color={"white"}
          bgColor={"var(--color-accent)"}
        />
        <p>"{id}님 환영합니다."</p>
      </div>
      <div className={styles.contents_container}>
        <MyPageList title={"Account"} myPageLists={myPageLists}/>
      </div>
      <p className={styles.logOut} onClick={handleClickLogOut}>
        로그아웃
      </p>
      {toast && <Toast toast={toast} setToast={setToast} />}
    </div>
  );
}
