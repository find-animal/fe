import React, { useState } from "react";
import styles from "./LocationFilter.styles.module.css";

export default function LocationFilter({onLocationFilterChange}) {
  const options = [
    { name: "전체", code: null },
    { name: "서울특별시", code: "18" },
    { name: "부산광역시", code: "19" },
    { name: "대구광역시", code: "20" },
    { name: "인천광역시", code: "21" },
    { name: "광주광역시", code: "22" },
    { name: "대전광역시", code: "24" },
    { name: "울산광역시", code: "25" },
    { name: "경기도", code: "26" },
    { name: "강원도", code: "27" },
    { name: "충청북도", code: "28" },
    { name: "충청남도", code: "29" },
    { name: "전라북도", code: "30" },
    { name: "전라남도", code: "31" },
    { name: "경상북도", code: "32" },
    { name: "경상남도", code: "33" },
    { name: "제주특별자치도", code: "34" },
  ];

  const [selected, setSelected] = useState([options[0].code]);

  const handleOptionCheck = (option) => {
    let updatedSelected;
    if (option.code === null) {
      updatedSelected = [option.code];
    } else if (selected.includes(option.code)) {
      updatedSelected = selected.filter((item) => item !== option.code);
    } else {
      updatedSelected = [...selected.filter((item) => item != null), option.code];
    }
    setSelected(updatedSelected);
    onLocationFilterChange(updatedSelected);
  };

  return (
    <div>
      <label className={styles.label}>위치</label>
      <ul className={styles.option_container}>
        {options.map((option, index) => (
          <li
            key={index}
            className={styles.option}
            onClick={() => handleOptionCheck(option)}
            style={{
              fontWeight: selected.includes(option.code) ? "var(--font-weight)" : "",
              color: selected.includes(option.code) ? "var(--font-black)" : "#5d5d5d",
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}