import React from "react";
import styles from "./AgeFilterstyles.module.css";
import { useRecoilState } from "recoil";
import { ageFilterState } from "../../../apis/atoms";

export default function AgeFilter() {
  const [selected, setSelected] = useRecoilState(ageFilterState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>년생</label>
      <div className={styles.option_container}>
        <input
          name="startYear"
          value={selected.startYear|| ''}
          type="number"
          placeholder="YYYY"
          onChange={handleInputChange}
        />
        <span>~</span>
        <input
          name="endYear"
          value={selected.endYear || ''}
          type="number"
          placeholder="YYYY"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
