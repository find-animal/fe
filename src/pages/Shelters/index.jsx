import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import icon_bell_accent from "../../assets/icon_bell_accent.png";
import axios from "axios";
import ShelterInfo from "../../components/ShelterInfo";

export default function Shelters() {
  const [shelters, setShelters] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShelterData = async (page) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/v1/shelter/all?pageNo=${page}`);
      setShelters(res.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShelterData(pageNo);
  }, [pageNo]);

  return (
    <div>
      <Header title={"보호소 찾기"} img={icon_bell_accent} />
      <div className={styles.container}>
        <h3>보호소 목록</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {shelters.map((list) => (
              <div key={list.id}>
                <ShelterInfo list={list} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
