import { Routes, Route } from "react-router-dom";
import React from "react";
import MyPage from "../pages/MyPage";
import ChangePwd from "../pages/MyPage/ChangePwd/ChangePwd";
import Setting from "../pages/MyPage/Setting/Setting";
import Notice from "../pages/MyPage/Notice/Notice";
import LogOut from "../pages/MyPage/LogOut/LogOut";
import AccountDeletion from "../pages/MyPage/AccountDeletion/AccountDeletion";
import TermOfService from "../pages/MyPage/TermsOfService/TermOfService";
import Layout from "./Layout";
import Home from "../pages/Home";
import AnimalDetails from "../pages/Animal/AnimalDetails";

export default function Routers() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animals/:id" element={<AnimalDetails />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/change-password" element={<ChangePwd />} />
        <Route path="/mypage/setting" element={<Setting />} />
        <Route path="/mypage/notice" element={<Notice />} />
        <Route path="/mypage/logout" element={<LogOut />} />
        <Route path="/mypage/term-of-service" element={<TermOfService />} />
        <Route path="/mypage/account-deletion" element={<AccountDeletion />} />
      </Route>
    </Routes>
  );
}
