// AnimalFilter.js
import React from "react";
import styles from "./index.styles.module.css";
import Button from "../Button";
import SexFilter from "./SexFilter/SexFilter";
import AgeFilter from "./AgeFilter/AgeFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import AdoptFilter from "./AdoptFilter/AdoptFilter";
import { useRecoilState } from "recoil";
import {
  sexFilterState,
  ageFilterState,
  locationFilterState,
  adoptFilterState,
  animalParamsState,
} from "../../apis/atoms";
import axiosInstance from "../../apis/axiosInstance";

export default function AnimalFilter({ onApplyFilter, isOpenFilter }) {
  const [sexFilter, setSexFilter] = useRecoilState(sexFilterState);
  const [ageFilter, setAgeFilter] = useRecoilState(ageFilterState);
  const [locationFilter, setLocationFilter] =
    useRecoilState(locationFilterState);
  const [adoptFilter, setAdoptFilter] = useRecoilState(adoptFilterState);
  const [params, setParams] = useRecoilState(animalParamsState);

  const handleApplyFilters = async () => {
    const newParams = { ...params };

    if (sexFilter) {
      newParams.sexCd = sexFilter;
    } else {
      delete newParams.sexCd;
    }
    if (ageFilter.startYear && ageFilter.endYear) {
      newParams.startYear = String(ageFilter.startYear);
      newParams.endYear = String(parseInt(ageFilter.endYear) + 1);
    } else {
      delete newParams.startYear;
      delete newParams.endYear;
    }
    if (locationFilter && locationFilter.length > 0) {
      newParams.cityProvinceIds = locationFilter.join(",");
    } else {
      delete newParams.cityProvinceIds;
    }
    if (adoptFilter !== null) {
      newParams.canAdopt = adoptFilter;
    } else {
      delete newParams.canAdopt;
    }

    try {
      const res = await axiosInstance.get(`/api/v1/animals?page=0`, {
        params: newParams,
      });
      onApplyFilter(res.data.content, newParams);
      setParams(newParams);
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetFilter = () => {
    setSexFilter(null);
    setAgeFilter({ startYear: "", endYear: "" });
    setLocationFilter([]);
    setAdoptFilter(false);
  };

  return (
    <div
      className={styles.container}
      style={{ bottom: isOpenFilter ? "0" : "-100%" }}
    >
      <SexFilter />
      <AgeFilter />
      <LocationFilter />
      <div className={styles.bottom_container}>
        <AdoptFilter />
        <p onClick={handleResetFilter}>초기화</p>
      </div>
      <Button text={"적용"} onClick={handleApplyFilters} />
    </div>
  );
}
