import React from "react";
import styles from "./AdoptFilter.styles.module.css";
import { useRecoilState } from "recoil";
import { adoptFilterState } from "../../../apis/atoms";

export default function AdoptFilter() {
  const [selected, setSelected] = useRecoilState(adoptFilterState);

  return (
    <div>
      <label className={styles.label} htmlFor="adoptCheck">
        입양가능
      </label>
      <input id="adoptCheck" type="checkbox" checked={selected} onChange={(e)=> setSelected(e.target.checked)} />
    </div>
  );
}
