import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Button from "../Button";
import SexFilter from "./SexFilter/SexFilter";
import AgeFilter from "./AgeFilter/AgeFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import AdoptFilter from "./AdoptFilter/AdoptFilter";
import axios from "axios";
import { useRecoilState } from "recoil";
import { sexFilterState, ageFilterState, locationFilterState, adoptFilterState } from "./atoms";

export default function AnimalFilter({ onApplyFilter }) {
  const [sexFilter, setSexFilter] = useRecoilState(sexFilterState);
  const [ageFilter, setAgeFilter] = useRecoilState(ageFilterState);
  const [locationFilter, setLocationFilter] = useRecoilState(locationFilterState);
  const [adoptFilter, setAdoptFilter] = useRecoilState(adoptFilterState);
  let params = {};

  const handleApplyFilters = async () => {

    if (sexFilter) {
      params.sexCd = sexFilter;
    }
    if (ageFilter.startYear && ageFilter.endYear) {
      params.startYear = String(ageFilter.startYear);
      params.endYear = String(parseInt(ageFilter.endYear) + 1);
    }
    if (locationFilter && locationFilter.length > 0) {
      params.cityProvinceIds = locationFilter.join(",");
    }
    if (adoptFilter) {
      params.canAdopt = adoptFilter;
    }
    try {
      const res = await axios.get(`/api/v1/animals?page=0`, { params });
      onApplyFilter(res.data.content, params);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <SexFilter/>
      <AgeFilter/>
      <LocationFilter/>
      <AdoptFilter />
      <Button text={"적용"} onClick={handleApplyFilters} />
    </div>
  );
}
