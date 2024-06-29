import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./index.styles.module.css";
import Toast from "../Toast";

import icon_heart from "../../assets/icon_heart.png";
import icon_heart_like from "../../assets/icon_heart_like.png";

export default function Heart({ id, type, setUpdate, isCheckedHeart = false, isLiked = false }) {
  const userId = localStorage.getItem("userId");
  const [heartImg, setHeartImg] = useState(icon_heart);
  const [toast, setToast] = useState("");

  const checkHeartStatus = async () => {
    const endPoint =
      type === "animal"
        ? `/animals/favorite/${userId}`
        : `/shelter/favorite/${userId}`;
    try {
      const res = await axios.get(`/api/v1/${endPoint}`);
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
      axios
        .post(`/api/v1/user/${type}`, payload)
        .then(() => {
          setHeartImg(icon_heart_like);
          setToast("관심목록에 추가되었습니다.");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .delete(`/api/v1/user/${type}`, {
          data: payload,
        })
        .then(() => {
          setHeartImg(icon_heart);
          setToast("관심목록에서 삭제되었습니다.");
          setUpdate((prev) => !prev);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    isCheckedHeart && checkHeartStatus(); // 보호소 상세페이지, 동물 상세페이지만 확인 필요
    setHeartImg(isLiked ? icon_heart_like : icon_heart)
  }, [id, type]);

  return (
    <div>
      <img
        className={styles.img}
        src={heartImg}
        alt={"heart"}
        onClick={handleClick}
      />
      {toast && <Toast toast={toast} setToast={setToast} />}
    </div>
  );
}
