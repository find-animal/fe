import React from "react";
import styles from "./index.styles.module.css";
import Footer from "../../components/Footer/Footer";
import UserInfo from "./_components/UserInfo/UserInfo";
import Bell from "../../components/Bell/Bell";
import MyPageList from "./_components/MyPageList/MyPageList";
import { Outlet } from "react-router-dom";
import MyPageRoutes from "../../routes/MyPageRoutes";

export default function MyPage() {
  const mypageLists = [
    { name: "비밀번호 변경", path: "/change-password" },
    { name: "앱설정", path: "/setting" },
    { name: "공지사항", path: "/notice" },
    { name: "로그아웃", path: "/logout" },
    { name: "이용약관", path: "/term-of-service" },
    { name: "회원탈퇴", path: "/account-deletion" },
  ];

  return (
    <div className={styles.container}>
      <Bell />
      <UserInfo />
      <ul className={styles.list_container}>
        {mypageLists.map((mypageList, index) => (
          <MyPageList
            key={index}
            name={mypageList.name}
            path={mypageList.path}
          />
        ))}
      </ul>
      <Outlet />
      <Footer />
      <MyPageRoutes />
    </div>
  );
}
