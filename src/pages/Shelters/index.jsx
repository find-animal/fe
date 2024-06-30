import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import axios from "axios";
import ShelterInfo from "../../components/ShelterInfo";
import { useInView } from "react-intersection-observer";

export default function Shelters() {
  const [shelters, setShelters] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView();
  const [shelterLikeLists, setShelterLikeLists] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchShelterLikeList = async () => {
    try {
      const res = await axios(`/api/v1/shelter/favorite/${userId}`);
      setShelterLikeLists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchShelterData = async () => {
    try {
      const res = await axios.get(`/api/v1/shelter/all?pageNo=${page}`);
      setShelters([...shelters, ...res.data.content]);
      setPage((page) => page + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShelterData();
    if (page === 0) {
      fetchShelterLikeList();
    }
  }, []);

  useEffect(() => {
    if (inView) {
      fetchShelterData();
    }
  }, [inView]);

  return (
    <div>
      <Header title={"보호소 찾기"} />
      <div className={styles.container}>
        <h3>보호소 목록</h3>
        {isLoading && <p>Loading...</p>}
        {shelters.map((list) => {
          return (
            <div key={list.id} ref={ref}>
              <ShelterInfo list={list} shelterLikeLists={shelterLikeLists} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
