import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import icon_bell_accent from "../../assets/icon_bell_accent.png";
import axios from "axios";
import Index from "../../components/ShelterInfo";
import ShelterInfo from "../../components/ShelterInfo";

export default function Shelters() {
  const [shelterList, setShelterList] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShelterData = async () => {
    try {
      const res = await axios.get(`/api/v1/shelter/all?pageNo=${pageNo}`);
      setShelterList(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (pageNo === 0) {
      fetchShelterData();
    }
  }, [pageNo]);

  return (
    <div>
      <Header title={"보호소 찾기"} img={icon_bell_accent} />
      <div className={styles.container}>
        <h3>보호소 목록</h3>
        <div>
          {shelterList.map((list) => (
            <div key={list.id}>
              <ShelterInfo
                careNm={list.careNm}
                careAddr={list.careAddr}
                careTel={list.careTel}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
