import styles from "./index.styles.module.css";
import icon_heart from "../../assets/icon_heart.png";
import icon_heart_like from "../../assets/icon_heart_like.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Heart({ animalId }) {
  const userId = localStorage.getItem("userId");
  const [heartImg, setHeartImg] = useState(icon_heart);

  const checkHeartStatus = async () => {
    try {
      const res = await axios.get(`/api/v1/animals/favorite/${userId}`);
      const animals = res.data;
      const isExist = animals.find(
        (animal) => Number(animal.id) === Number(animalId),
      );
      if (isExist) {
        setHeartImg(icon_heart_like);
      } else {
        setHeartImg(icon_heart);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    if (heartImg === icon_heart) {
      axios
        .post("/api/v1/user/animal", { userId, animalId })
        .then((res) => {
          setHeartImg(icon_heart_like)
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .delete("/api/v1/user/animal", {
          data: { userId, animalId },
        })
        .then((res) => setHeartImg(icon_heart))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    checkHeartStatus();
  }, [animalId]);

  return (
    <>
      <img
        className={"img"}
        src={heartImg}
        alt={"heart"}
        onClick={handleClick}
      />
    </>
  );
}
