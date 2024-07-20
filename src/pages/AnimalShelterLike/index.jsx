import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import AnimalLikeList from "./_components/AnimalLikeList/AnimalLikeList";
import Divider from "../../components/Divider";
import ShelterInfo from "../../components/ShelterInfo";
import axiosInstance from "../../apis/axiosInstance";

export default function AnimalShelterLike() {
  const [animalLikeLists, setAnimalLikeLists] = useState([]);
  const [shelterLikeLists, setShelterLikeLists] = useState([]);
  const userId = localStorage.getItem("userId");
  const [update, setUpdate] = useState(false);

  const fetchAnimalLikeList = async () => {
    try {
      const res = await axiosInstance(`/api/v1/animals/favorite/${userId}`);
      setAnimalLikeLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchShelterLikeList = async () => {
    try {
      const res = await axiosInstance(`/api/v1/shelter/favorite/${userId}`);
      setShelterLikeLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnimalLikeList();
    fetchShelterLikeList();
  }, [update]);

  return (
    <div className={styles.container}>
      <Header title={"관심 목록"} />
      <div className={styles.contents_container}>
        <div className={styles.list_container}>
          <h3>관심 동물</h3>
          {animalLikeLists.length === 0 ? (
            <p>관심 동물을 등록해주세요.</p>
          ) : (
            animalLikeLists.map((list, index) => (
              <div key={index}>
                <AnimalLikeList list={list} setUpdate={setUpdate} />
              </div>
            ))
          )}
        </div>
        <Divider />
        <div className={styles.list_container}>
          <h3>관심 보호소</h3>
          {shelterLikeLists.length === 0 ? (
            <p>관심 보호소를 등록해주세요.</p>
          ) : (
            shelterLikeLists.map((list, index) => (
              <div key={index}>
                <ShelterInfo
                  list={list}
                  isLiked={true}
                  setUpdate={setUpdate}
                  isHeart={true}
                />
              </div>
            ))
          )}
        </div>
        <Divider />
      </div>
    </div>
  );
}
