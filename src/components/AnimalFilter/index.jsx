import React, { useEffect, useState } from "react";
import styles from "./index.styles.module.css";
import Button from "../Button";
import SexFilter from "./SexFilter/SexFilter";
import AgeFilter from "./AgeFilter/AgeFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import AdoptFilter from "./AdoptFilter/AdoptFilter";
import axios from "axios";

export default function AnimalFilter({ onApplyFilter }) {
  const [sexFilter, setSexFilter] = useState([null]);
  const [ageFilter, setAgeFilter] = useState({ startYear: "", endYear: "" });
  const [locationFilter, setLocationFilter] = useState(null);
  const [adoptFilter, setAdoptFilter] = useState(null);
  
  let params = {};

  const handleSexFilter = (filter) => {
    setSexFilter(filter);
  };
  const handleAgeFilter = (filter) => {
    setAgeFilter(filter);
  };
  const handleLocationFilter = (filter) => {
    setLocationFilter(filter);
  };
  const handleAdoptFilter = (filter) => {
    setAdoptFilter(filter);
  };

  const handleApplyFilters = async () => {
    let params = {};

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
      <SexFilter onSexFilterChange={handleSexFilter} />
      <AgeFilter onAgeFilterChange={handleAgeFilter} />
      <LocationFilter onLocationFilterChange={handleLocationFilter} />
      <AdoptFilter onAdoptFilterChange={handleAdoptFilter} />
      <Button text={"적용"} onClick={handleApplyFilters} width={"50px"} />
    </div>
  );
}
