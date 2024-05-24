import { Routes, Route } from "react-router-dom";
import React from "react";
import MyPage from "../pages/MyPage";
import ChangePwd from "../pages/MyPage/ChangePwd/ChangePwd";
import Setting from "../pages/MyPage/Setting/Setting";
import Notice from "../pages/MyPage/Notice/Notice";
import LogOut from "../pages/MyPage/LogOut/LogOut";
import AccountDeletion from "../pages/MyPage/AccountDeletion/AccountDeletion";
import TermOfService from "../pages/MyPage/TermsOfService/TermOfService";

export default function MyPageRoutes() {
  return (
    <Routes>
      <Route path="/my-page/*" element={<MyPage />}>
        <Route path="change-password" element={<ChangePwd />} />
        <Route path="setting" element={<Setting />} />
        <Route path="notice" element={<Notice />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="term-of-service" element={<TermOfService />} />
        <Route path="account-deletion" element={<AccountDeletion />} />
      </Route>
    </Routes>
  );
}
