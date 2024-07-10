import React, {useEffect, useState} from "react";
import styles from "./LocationFilter.styles.module.css";
import {useRecoilState} from "recoil";
import {locationFilterState} from "../../../apis/atoms";
import axiosInstance from "../../../apis/axiosInstance";

export default function LocationFilter() {
  const [locationList, setLocationList] = useState([]);
  const [selected, setSelected] = useRecoilState(locationFilterState);

  const fetchLocationList = async () => {
    try {
      const res = await axiosInstance.get('/api/v1/cityProvince');
      setLocationList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocationList();
  }, []);

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

  return (
    <div className={styles.container}>
      <label className={styles.label}>지역</label>
      <ul className={styles.option_container}>
        {locationList.map((option, index) => (
          <li
            key={index}
            className={styles.option}
            onClick={() => handleOptionCheck(option)}
            style={{
              fontWeight: selected.includes(option.id) ? "var(--font-weight)" : "",
              color: selected.includes(option.id) ? "var(--font-black)" : "var(--color-gray)",
            }}
          >
            {option.orgdownNm}
          </li>
        ))}
      </ul>
    </div>
  );
}