import React, { useEffect, useState } from "react";
import icon_bell_accent from "../../assets/icon_bell_accent.png";
import Header from "../../components/Header";
import styles from "./index.styles.module.css";
import AnimalInfo from "./_components/AnimalInfo/AnimalInfo";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import AnimalFilter from "../../components/AnimalFilter";

export default function Home() {
  const [animalList, setAnimalList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filterParams, setFilterParams] = useState();
  const todayDate = new Date();
  const [ref, inView] = useInView();

  const fetchAnimalData = async () => {
    try {
      const res = await axios.get(`/api/v1/animals?page=${page}`, {
        params: filterParams,
      });
      setAnimalList([...animalList, ...res.data.content]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnimalData();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchAnimalData();
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  const handleApplyFilter = (filtered, params) => {
    setPage(1);
    setFilterParams(params);
    setAnimalList(filtered);
    setIsOpenFilter(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Header title={"find-animal"} img={icon_bell_accent} />
        <div className={styles.button_container}>
          <button className={styles.button}>+ 관심 보호소 등록</button>
          <button className={styles.button} onClick={handleOpenFilter}>
            Filter
          </button>
        </div>
        <div className={styles.list_container}>
          {isLoading && <p>Loading...</p>}
          {animalList
          .map((list) => {
            return (
              <div key={list.id}>
                <AnimalInfo
                  id={list.id}
                  img={list.popFile}
                  animalBreed={list.animalBreed}
                  age={list.age.substring(0, 4)}
                  sex={list.sex}
                  uploadDate={list.noticeSdt}
                  todayDate={todayDate}
                />
              </div>
            );
          })}
          <div ref={ref} style={{ height: "10px", width: "100%" }}></div>
        </div>
      </div>
      {isOpenFilter && (
        <AnimalFilter
          onApplyFilter={handleApplyFilter}
          page={page}
          inView={inView}
        />
      )}
    </>
  );
}
