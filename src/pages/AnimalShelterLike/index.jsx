import React, {useEffect, useState} from 'react'
import styles from './index.styles.module.css'
import Header from '../../components/Header'
import icon_bell_accent from "../../assets/icon_bell_accent.png";
import AnimalLikeList from "./_component/AnimalLikeList";
import axios from "axios";

export default function AnimalLike() {
  const [animalLikeLists, setAnimalLikeLists] = useState([]);
  const [shelterLikeLists, setShelterLikeLists] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchAnimalLikeList = async () => {
    try {
      const res = await axios(`/api/v1/animals/favorite/${userId}`);
      setAnimalLikeLists(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  const fetchShelterLikeList = async () => {
    // try {
    //   const res = await axios(`/api/v1/animals/favorite/${userId}`);
    //   setAnimalLikeLists(res.data);
    // } catch(err) {
    //   console.log(err);
    // }
  }

  useEffect(() => {
    fetchAnimalLikeList();
    fetchShelterLikeList();
  }, []);

  return (
    <div className={styles.container}>
      <Header title={"관심 리스트"} img={icon_bell_accent}/>
      <div className={styles.contents_container}>
        <div className={styles.list_container}>
          <h4>관심 동물</h4>
          {animalLikeLists.length === 0 ? <p>관심 동물을 등록해주세요.</p> :
            animalLikeLists.map((list) => (
              <AnimalLikeList animal={list}/>
            ))}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.list_container}>
          <h4>관심 보호소</h4>
          {shelterLikeLists.length === 0 ? <p>관심 보호소를 등록해주세요.</p> :
            shelterLikeLists.map((list) => (
              <AnimalLikeList animal={list}/>
            ))}
        </div>
        <div className={styles.divider}></div>
      </div>
    </div>

  );
}
