import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Header from "../../components/Header";
import axios from "axios";
import ShelterInfo from "../../components/ShelterInfo";
import { useInView } from "react-intersection-observer";
import ShelterFilter from "../../components/ShelterFilter/ShelterFilter";
import { useRecoilState } from "recoil";
import { shelterFilterState } from "../../apis/atoms";

export default function Shelters() {
  const [shelterList, setShelterList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView();
  const [locationParams, setLocationParams] =
    useRecoilState(shelterFilterState);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const fetchShelterData = async () => {
    let params = { pageNo: page };

    if (locationParams.length > 0) {
      params.cityProvinceIds = locationParams.join(",");
    }

    try {
      const res = await axios.get(`/api/v1/shelter/all`, {
        params,
      });
      setShelterList([...shelterList, ...res.data.content]);
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

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  const handleApplyFilter = (filtered) => {
    setPage(1);
    setShelterList(filtered);
    setIsOpenFilter(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={"보호소 찾기"} />
        <div className={styles.subheader}>
          <h3>보호소 목록</h3>
          <p onClick={handleOpenFilter}>Filter</p>
        </div>
      </div>
      <div className={styles.shelters_container}>
        {isLoading && <p>Loading...</p>}
        {shelterList.map((list) => {
          return (
            <div key={list.id} ref={ref}>
              <ShelterInfo list={list} />
            </div>
          );
        })}
      </div>
      <div className={styles.filter_container}>
        <ShelterFilter
          onApplyFilter={handleApplyFilter}
          isOpenFilter={isOpenFilter}
        />
      </div>
    </div>
  );
}
