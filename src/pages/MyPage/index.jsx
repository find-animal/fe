import React from "react";
import styles from "./index.styles.module.css";
import icon_bell from "../../assets/icon_bell.png";
import Header from "../../components/Header";
import icon_account from "../../assets/icon_account.png";
import icon_password from "../../assets/icon_password.png";
import icon_bell_black from "../../assets/icon_bell_black.png";
import icon_star from "../../assets/icon_star.png";
import icon_notice from "../../assets/icon_notice.png";
import MyPageList from "./_components/MyPageList/MyPageList";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const accountsLists = [
    { icon: icon_account, name: "회원 정보", path: "/account-information" },
    { icon: icon_password, name: "비밀번호 변경", path: "/change-password" },
    { icon: icon_bell_black, name: "공지사항", path: "/notice" },
  ];
  const moreLists = [
    { icon: icon_star, name: "앱설정", path: "/setting" },
    { icon: icon_notice, name: "이용약관", path: "/term-of-service" },
  ];
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <Header
        title={"아이디"}
        img={icon_bell}
        color={"white"}
        bgColor={"var(--color-accent)"}
      />
      <div className={styles.contents_container}>
        <MyPageList title={"Account"} myPageLists={accountsLists} />
        <MyPageList title={"More"} myPageLists={moreLists} />
      </div>
      <p className={styles.logOut} onClick={handleClickLogOut}>
        로그아웃
      </p>
    </div>
  );
}
