import icon_heart from "../../assets/icon_heart.png";
import icon_heart_like from "../../assets/icon_heart_like.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Heart({ id, type }) {
  const userId = localStorage.getItem("userId");
  const [heartImg, setHeartImg] = useState(icon_heart);

  const checkHeartStatus = async () => {
    const endPoint = type === 'animal' ? `/animals/favorite/${userId}` : `/shelter/favorite/${userId}`
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
        .then(() => setHeartImg(icon_heart_like))
        .catch((err) => console.log(err));
    } else {
      axios
        .delete(`/api/v1/user/${type}`, {
          data: payload,
        })
        .then(() => setHeartImg(icon_heart))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    checkHeartStatus();
  }, [id, type]);

  return (
    <div>
      <img
        className={"img"}
        src={heartImg}
        alt={"heart"}
        onClick={handleClick}
      />
    </div>
  );
}
