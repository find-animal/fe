import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./index.styles.module.css";
import AnimalInfo from "./_components/AnimalInfo/AnimalInfo";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import AnimalFilter from "../../components/AnimalFilter";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {animalParamsState} from "../../apis/atoms";

export default function Home() {
  const [animalList, setAnimalList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filterParams, setFilterParams] = useRecoilState(animalParamsState);
  const [ref, inView] = useInView();
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const fetchAnimalData = async () => {
    try {
      const res = await axios.get(`/api/v1/animals?page=${page}`, {
        params: filterParams,
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  const handleApplyFilter = (filtered) => {
    setPage(1);
    setAnimalList(filtered);
    setIsOpenFilter(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header title={"find-animal"} />
            <button className={styles.button} onClick={handleOpenFilter}>
              Filter
            </button>
        </div>
        <div className={styles.list_container}>
          {isLoading && <p>Loading...</p>}
          {animalList.map((list) => {
            return (
              <div key={list.id} ref={ref}>
                <AnimalInfo list={list} />
              </div>
            );
          })}
        </div>
      </div>
      <AnimalFilter
        onApplyFilter={handleApplyFilter}
        page={page}
        inView={inView}
        isOpenFilter={isOpenFilter}
      />

    </>
  );
}
