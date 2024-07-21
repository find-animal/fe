import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";

import icon_heart from "../../assets/icon_heart.png";
import icon_heart_like from "../../assets/icon_heart_like.png";
import axiosInstance from "../../apis/axiosInstance";
import {toast} from "react-toastify";

export default function Heart({
  id,
  type,
  setUpdate,
  isCheckedHeart = false,
  isLiked = false,
}) {
  const userId = localStorage.getItem("userId");
  const [heartImg, setHeartImg] = useState(icon_heart);

  const checkHeartStatus = async () => {
    const endPoint =
      type === "animal"
        ? `animals/favorite/${userId}`
        : `shelter/favorite/${userId}`;
    try {
      const res = await axiosInstance.get(`/api/v1/${endPoint}`);
      const datas = res.data;
      const isExist = datas.find((data) => Number(data.id) === Number(id));
      setHeartImg(isExist ? icon_heart_like : icon_heart);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    let payload;

    if (type === "animal") {
      payload = { userId, animalId: id };
    } else if (type === "shelter") {
      payload = { userId, shelterId: id };
    } else {
      payload = { userId, id };
    }

    if (heartImg === icon_heart) {
      axiosInstance
        .post(`/api/v1/user/${type}`, payload)
        .then(() => {
          setHeartImg(icon_heart_like);
          toast.success("관심목록에 추가되었습니다.");
        })
        .catch((err) => console.log(err));
    } else {
      axiosInstance
        .delete(`/api/v1/user/${type}`, {
          data: payload,
        })
        .then(() => {
          setHeartImg(icon_heart);
          toast.error("관심목록에서 삭제되었습니다.");
          setUpdate((prev) => !prev);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    isCheckedHeart && checkHeartStatus(); // 보호소 상세페이지, 동물 상세페이지만 확인 필요
    setHeartImg(isLiked ? icon_heart_like : icon_heart);
  }, [id, type]);

  return (
    <div>
      <img
        className={styles.img}
        src={heartImg}
        alt={"heart"}
        onClick={handleClick}
      />
    </div>
  );
}
