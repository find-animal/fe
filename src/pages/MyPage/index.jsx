import React from "react";
import styles from "./index.styles.module.css";
import MyPageList from "./_components/MyPageList/MyPageList";
import icon_bell from "../../assets/icon_bell.png";
import Header from "../../components/Header";

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
      <Header
        title={"아이디"}
        img={icon_bell}
        color={"white"}
        bgColor={"var(--color-accent)"}
      />
      <ul className={styles.list_container}>
        {mypageLists.map((mypageList, index) => (
          <MyPageList
            key={index}
            name={mypageList.name}
            path={mypageList.path}
          />
        ))}
      </ul>
    </div>
  );
}
