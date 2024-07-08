import React, { useEffect, useState } from "react";
import styles from "./ShelterFilter.styles.module.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { shelterFilterState } from "../../apis/atoms";
import Button from "../Button";

export default function ShelterFilter({ onApplyFilter, isOpenFilter }) {
  const [locationList, setLocationList] = useState([]);
  const [selected, setSelected] = useRecoilState(shelterFilterState);

  const fetchLocationList = async () => {
    try {
      const res = await axios.get("/api/v1/cityProvince");
      setLocationList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOptionCheck = (option) => {
    let updatedSelected;
    if (option.id === null) {
      updatedSelected = [option.id];
    } else if (selected.includes(option.id)) {
      updatedSelected = selected.filter((item) => item !== option.id);
    } else {
      updatedSelected = [...selected.filter((item) => item != null), option.id];
    }

    setSelected(updatedSelected);
  };

  useEffect(() => {
    fetchLocationList();
  }, []);

  const handleResetFilter = () => {
    setSelected([]);
  }

  const handleApplyFilters = async () => {
    try {
      let params = {};

      if(selected.length > 0) {
        params = {cityProvinceIds : selected.join(",")};
      }

      const res = await axios.get(`/api/v1/shelter/all?pageNo=0`, {
        params: params,
      });
      onApplyFilter(res.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container} style={{bottom: (isOpenFilter ? "0" : "-100%")}}>
      <h3 className={styles.label}>지역</h3>
      <ul className={styles.option_container}>
        {locationList.map((option, index) => (
          <li
            key={index}
            className={styles.option}
            onClick={() => handleOptionCheck(option)}
            style={{
              fontWeight: selected.includes(option.id)
                ? "var(--font-weight)"
                : "",
              color: selected.includes(option.id)
                ? "var(--font-black)"
                : "var(--color-gray)",
            }}
          >
            {option.orgdownNm}
          </li>
        ))}
      </ul>
      <p className={styles.reset} onClick={handleResetFilter}>초기화</p>
      <Button text={"적용"} onClick={handleApplyFilters} />
    </div>
  );
}
