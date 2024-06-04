import React, { useState } from "react";
import styles from "./AgeFilterstyles.module.css";

export default function AgeFilter({ onAgeFilterChange }) {
  const [option, setOption] = useState({ startYear: null, endYear: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOption({ ...option, [name]: value });
    onAgeFilterChange({ ...option, [name]: value });
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>년생</label>
      <div className={styles.option_container}>
        <input
          name="startYear"
          value={option.startYear|| ''}
          type="number"
          placeholder="YYYY"
          onChange={handleInputChange}
        />
        <span>~</span>
        <input
          name="endYear"
          value={option.endYear || ''}
          type="number"
          placeholder="YYYY"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
