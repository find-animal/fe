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
  const [ref, inView] = useInView();

  const fetchAnimalData = async () => {
    try {
      const res = await axios.get(`/api/v1/animals?page=${page}`, {
        params: filterParams,
      });
      setAnimalList([...animalList, ...res.data.content]);
      setPage((page) => page + 1);
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
        <div className={styles.header}>
          <Header title={"find-animal"} img={icon_bell_accent} />
          <div className={styles.button_container}>
            <button className={styles.button}>+ 관심 보호소 등록</button>
            <button className={styles.button} onClick={handleOpenFilter}>
              Filter
            </button>
          </div>
        </div>
        <div className={styles.list_container}>
          {isLoading && <p>Loading...</p>}
          {animalList.map((list) => {
            return (
              <div key={list.id} ref={ref}>
                <AnimalInfo
                  list={list}
                />
              </div>
            );
          })}
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
