import { Routes, Route } from "react-router-dom";
import React from "react";
import MyPage from "../pages/MyPage";
import ChangePwd from "../pages/MyPage/ChangePwd/ChangePwd";
import Notice from "../pages/MyPage/Notice/Notice";
import TermOfService from "../pages/MyPage/TermsOfService/TermOfService";
import Home from "../pages/Home";
import AnimalDetails from "../pages/AnimalDetails";
import Animals from "../pages/AnimalShelterLike";
import Shelters from "../pages/Shelters";
import AccInform from "../pages/MyPage/AccInform/AccInform";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import { PrivateRoute } from "./PrivateRoute";
import FindPwd from "../pages/FindPwd";
import ShelterDetails from "../pages/ShelterDetails";
import AnimalNews from "../pages/AnimalNews";
import FindId from "../pages/FindId/FindId";

export default function Routers() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/find-id" element={<FindId />}></Route>
        <Route path="/find-password" element={<FindPwd />}></Route>
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/animals/:id" element={<AnimalDetails />}></Route>
        <Route path="/shelters" element={<Shelters />}></Route>
        <Route path="/shelter/:id" element={<ShelterDetails />}></Route>
        <Route path="/animal-news" element={<AnimalNews />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/account-information" element={<AccInform />} />
        <Route path="/mypage/change-password" element={<ChangePwd />} />
        <Route path="/mypage/notice" element={<Notice />} />
        <Route path="/mypage/term-of-service" element={<TermOfService />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
