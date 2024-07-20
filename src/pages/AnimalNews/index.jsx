import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import AnimalNewsList from "./_components/AnimalNewsList";
import Header from "../../components/Header";
import {useInView} from "react-intersection-observer";
import axiosInstance from "../../apis/axiosInstance";

export default function AnimalNews() {
  const [page, setPage] = useState(1);
  const [animalNewsList, setAnimalNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView();

  const fetchAnimalNews = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/news/animal?start=${page}`);
      setAnimalNewsList([...animalNewsList, ...res.data.items]);
      setPage(prev => prev + 10);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchAnimalNews();
  }, [inView]);

  return (
    <div className={styles.container}>
      <Header title={"동물 소식"}/>
      <div className={styles.contents_container}>
        <div>
          {isLoading && <p>Loading...</p>}
          {animalNewsList.map((list) => {
            return (
              <div ref={ref}>
                <AnimalNewsList list={list}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
