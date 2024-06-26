import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import icon_bell_accent from "../../assets/icon_bell_accent.png";
import axios from "axios";
import ShelterInfo from "../../components/ShelterInfo";
import { useInView } from "react-intersection-observer";

export default function Shelters() {
  const [shelters, setShelters] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView();

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
  }, []);

  useEffect(() => {
    if (inView) {
      fetchShelterData();
    }
  }, [inView]);

  return (
    <div>
      <Header title={"보호소 찾기"} img={icon_bell_accent} />
      <div className={styles.container}>
        <h3>보호소 목록</h3>
        {isLoading && <p>Loading...</p>}
        {shelters.map((list) => (
          <div key={list.id} ref={ref}>
            <ShelterInfo list={list} />
          </div>
        ))}
      </div>
    </div>
  );
}
