import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import axios from "axios";
import AnimalNewsList from "./_components/AnimalNewsList";
import Header from "../../components/Header";

export default function AnimalNews() {
  const [page, setPage] = useState(1);
  const [animalNewsList, setAnimalNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnimalNews = async () => {
    try {
      const res = await axios.get(`/api/v1/news/animal/${page}`);
      setAnimalNewsList([...animalNewsList, ...res.data.items]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchAnimalNews();
  }, []);

  return (
    <div className={styles.container}>
      <Header title={"동물 소식"}/>
      <div className={styles.contents_container}>
        <div className={styles.news_container}>
          {isLoading && <p>Loading...</p>}
          {animalNewsList.map((list) => {
            return (
              <div>
                <AnimalNewsList list={list}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
