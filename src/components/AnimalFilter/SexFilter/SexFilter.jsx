import React, { useState } from "react";
import styles from "./SexFilter.styles.module.css";

export default function SexFilter({ onSexFilterChange }) {
  const options = [
    { name: "전체", code: null  },
    { name: "수컷", code: "M"  },
    { name: "암컷", code: "F"  },
  ];
  const [selected, setSelected] = useState(options[0].code);

  const handleOptionCheck = (option) => {
    setSelected(option.code);
    onSexFilterChange(option.code);
  };

  return (
    <div>
      <label className={styles.label}>성별</label>
      <ul className={styles.option_container}>
        {options.map((option, index) => (
          <li
            key={index}
            className={styles.option}
            style={{
              backgroundColor:
                selected === option.code ? "var(--color-accent)" : "transparent",
              color:
                selected === option.code
                  ? "var(--color-white)"
                  : "var(--color-black)",
            }}
            onClick={() => handleOptionCheck(option)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
