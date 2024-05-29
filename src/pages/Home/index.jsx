import React, { useEffect, useState } from "react";
import icon_bell_accent from "../../assets/icon_bell_accent.png";
import Header from "../../components/Header/Header";
import styles from "./index.styles.module.css";
import DogInfo from "./_components/DogInfo/DogInfo";
import axios from "axios";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [ref, inView] = useInView();

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/animals");
      setDogList([...dogList, ...res.data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [inView]);

  return (
    <div>
      <Header title={"find-animal"} img={icon_bell_accent} />
      <p className={styles.box}>관심보호소를 등록해주세요</p>
      <div className={styles.list_container}>
      {isLoading && <p>Loading...</p>}
        {dogList.map((list) => {
          return (
            <div key={list.id}>
              <DogInfo
                img={list.fileName}
                animalBreed={list.animalBreed}
                age={list.age}
              />
            </div>
          );
        })}
        <div ref={ref}></div>
      </div>
    </div>
  );
}
