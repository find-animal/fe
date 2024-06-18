import { Routes, Route } from "react-router-dom";
import React from "react";
import MyPage from "../pages/MyPage";
import ChangePwd from "../pages/MyPage/ChangePwd/ChangePwd";
import Setting from "../pages/MyPage/Setting/Setting";
import Notice from "../pages/MyPage/Notice/Notice";
import LogOut from "../pages/MyPage/LogOut/LogOut";
import AccountDeletion from "../pages/MyPage/AccountDeletion/AccountDeletion";
import TermOfService from "../pages/MyPage/TermsOfService/TermOfService";
import Index from "./Layout";
import Home from "../pages/Home";
import AnimalDetails from "../pages/AnimalDetails";
import Animals from "../pages/AnimalShelterLike";
import Shelters from "../pages/Shelters";
import Informations from "../pages/Informations/Informations";
import AccInform from "../pages/MyPage/AccInform/AccInform";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

export default function Routers() {
  return (
    <Routes>
      <Route element={<Index />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/animals/:id" element={<AnimalDetails />}></Route>
        <Route path="/shelters" element={<Shelters />}></Route>
        <Route path="/informations" element={<Informations />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/account-information" element={<AccInform />} />
        <Route path="/mypage/setting" element={<Setting />} />
        <Route path="/mypage/notice" element={<Notice />} />
        <Route path="/mypage/logout" element={<LogOut />} />
        <Route path="/mypage/term-of-service" element={<TermOfService />} />
        <Route path="/mypage/account-deletion" element={<AccountDeletion />} />
        <Route path="/mypage/change-password" element={<ChangePwd />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
